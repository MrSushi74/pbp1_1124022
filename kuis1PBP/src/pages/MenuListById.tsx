import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";

type Menu = {
    id: string,
    nama: string,
    deskripsi: string,
    harga: number,
    size: string,
    label: string,
    kategori: string,
}

export default function MenuListByID(){
    const {id} = useParams();
    const [menuID, setMenuID] = useState<Menu>();
    const navigate = useNavigate();
    useEffect(() => {
        const reloadPostList = async () => {
            const response = await fetch(`/api/menu/${id}`);
            if (!response.ok) {
                alert("Failed to fetch post");
                return;
            }
            const data = await response.json();
            setMenuID(data);
            console.log(data);
        }
        reloadPostList();
    }, [id])

    const back = ( ) => {
        navigate(-1);
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "40px",
            }}
        >
            <div
                style={{
                    maxWidth: "600px",
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "24px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                }}
            >


                {/* Nama Barang */}
                <h2 style={{ margin: 0 }}>{menuID?.nama}</h2>

                {/* Content */}
                <p style={{ margin: 0, lineHeight: 1.6 }}>
                    {menuID?.deskripsi}
                </p>

                {/* Actions */}
                <div style={{ marginTop: "16px" }}>
                    <button
                        onClick={back}
                        style={{
                            background: "transparent",
                            border: "none",
                            color: "#1d9bf0",
                            cursor: "pointer",
                            fontSize: "14px",
                        }}
                    >
                        ← Back
                    </button>
                </div>
            </div>
        </div>
    )
}