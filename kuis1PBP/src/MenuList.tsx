
import {useEffect, useMemo, useState} from "react";
import {Avatar, Box, Card, CardContent, CardHeader, Divider, Paper, styled, Typography} from "@mui/material";
import Masonry from "@mui/lab/Masonry";

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
    // const [menus, setMenu] = useState<Menu[]>([]);
    //
    // useEffect(() => {
    //     const getMenu = async () =>{
    //         try{
    //             const response = await fetch("api/list-menu");
    //             if (!response.ok) {
    //                 alert("Failed to fetch post");
    //                 return;
    //             }
    //
    //             const data = await response.json();
    //             setMenu(data.records);
    //         } catch{
    //             console.error("e");
    //             setMenu([]);
    //         }
    //     };
    //
    //     getMenu();
    // },[])

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
            setMenuList(data.records);
            console.log(data.records);
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
                {menus.map((menu) => (
                    <Card
                        key={menu.id} sx={{
                        width: 400,
                        height: 200,
                        boxShadow: 5,
                        cursor: "pointer"
                    }}
                    >
                        <CardHeader
                            title={menu.nama}
                        />
                        <Divider />
                        <CardContent>
                            <Typography variant="body2" sx={{
                                color: 'text.secondary',
                                maxHeight: "100px",
                                overflow: "auto"
                            }}>
                                {menu.deskripsi}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}



