
import {useEffect, useMemo, useState} from "react";
import {Avatar, Box, Card, CardContent, CardHeader, Divider, Paper, styled, Typography} from "@mui/material";
import {Masonry} from "@mui/lab";

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
                                <button>
                                    Detail
                                </button>
                            </Item>
                        ))}
                    </Masonry>
                </Box>
            </div>
        </>
    )
}



