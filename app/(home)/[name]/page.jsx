"use client";

import { useEffect, useState } from "react";
import Body from "../Body";
import { usePathname, useSearchParams } from "next/navigation";
import supabase from "@/app/config/supabaseConfig";

export default function page() {
    const path = usePathname()
    const searchParams = useSearchParams();
    const newParams = searchParams.get("search");
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);

    async function getData() {

        if (!Boolean(newParams)) {
            const { data } = await supabase
                .from("data-berita")
                .select()
                .eq("Kategori", path.replace('/', ''))
                .order("id", { ascending: false });
            setData(data);
        } else {
            const { data, error } = await supabase
                .from("data-berita")
                .select()
                .textSearch("Judul", newParams)
                .order("id", { ascending: false });
            if (data) {
                setData(data);
            }
            if (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        getData()
    }, [newParams, page]);

    return (
        <>
            <Body
                title={
                    path === '/'
                        ? ''
                        : path.includes('search')
                            ? `Kata Pencarian '${newParams}'`
                            : path.replace('/', '')
                }
                data={data}
            />
        </>
    );
}
