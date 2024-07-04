"use client";

import { useEffect, useState } from "react";
import Body from "../Body";
import { usePathname, useSearchParams } from "next/navigation";
import { ITEMS_PER_PAGE } from "@/app/constant";
import supabase from "@/app/config/supabaseConfig";

export default function page() {
    const path = usePathname()
    const searchParams = useSearchParams();
    const newParams = searchParams.get("search");
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);

    async function getData() {
        const from = (page - 1) * ITEMS_PER_PAGE;
        const to = page * ITEMS_PER_PAGE - 1;
        if (!Boolean(newParams)) {
            const { data } = await supabase
                .from("data-berita")
                .select()
                .range(from, to)
                .eq("Kategori", path.replace('/', ''))
                .order("id", { ascending: false });
            setData(data);
        } else {
            const { data, error } = await supabase
                .from("data-berita")
                .select()
                .range(from, to)
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

    const handleNext = () => {
        setPage(page + 1);
    };

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    useEffect(() => {
        getData()
    }, [page, newParams]);

    return (
        <>
            <Body
                title={path.includes('search')
                    ? `Kata Pencarian '${newParams}'`
                    : path.replace('/', '')}
                data={data}
                setPage={setPage}
                page={page}
                getData={getData}
                handleNext={() => handleNext({ page, setPage })}
                handlePrevious={() => handlePrevious({ page, setPage })}
            />
        </>
    );
}
