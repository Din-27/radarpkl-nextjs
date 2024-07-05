"use client";
import { useEffect, useState } from "react";
import Body from "./Body";
import supabase from "../config/supabaseConfig";

const ITEMS_PER_PAGE = 6; // Number of items per page

export default function Home() {
  const [dataBerita, setData] = useState(null);

  useEffect(() => {
    getData();
  }, [dataBerita]);

  async function getData() {
    const { data } = await supabase
      .from("data-berita")
      .select()
      .order("id", { ascending: false });
    setData(data);
  }

  return (
    <>
      <Body data={dataBerita} />
    </>
  );
}
