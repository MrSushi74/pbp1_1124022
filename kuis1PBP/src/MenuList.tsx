
import {useEffect,useState} from "react";
import {Box, Paper, styled} from "@mui/material";
import {Masonry} from "@mui/lab";
import {useNavigate} from "react-router";

type Menu = {
    id: string,
    nama: string,
    deskripsi: string,
    harga: number,
    size: string,
    label: string,
    kategori: string,
}

export default function MenuList() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(2),
    }));

    const [menus, setMenuList] = useState<Menu[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        const reloadPostList = async () => {
            const response = await fetch("api/list-menu" +
                "");
            if (response.status !== 200) {
                alert("Failed to fetch post");
                return;
            }
            const data = await response.json();
            setMenuList(data);
            console.log(data);
        }
        reloadPostList();
    }, [])

    const goToMenu = (id: string) => {
        navigate(`/menu/${id}`);
    };

    return (
        <><div
            style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                padding: "2rem",
            }}
        >
            <h1 style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
            }}
            >Menu List</h1>
        </div>
            <div
                style={{
                    display: "flex",
                    marginTop: "20px",
                    backgroundColor: "white",
                }}
            >
                <Box sx={{width: "100%", minHeight: "100vh", padding: 2}}>
                    <Masonry columns={4} spacing={2}>
                        {menus.map((menu) => (
                            <Item key={menu.id} style={{backgroundColor: "white", borderColor: "darkgray"}}>
                                <h3>{menu.nama}</h3>
                                <p>{menu.deskripsi}</p>
                                <button onClick={() =>goToMenu(menu.id)}>
                                    Detail
                                </button>npm install @react-navigation/native

                            </Item>
                        ))}
                    </Masonry>
                </Box>
            </div>
        </>
    )
}



