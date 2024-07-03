"use client";
import { Suspense, useEffect, useState } from "react";
import Body from "./Body";
import supabase from "../config/supabaseConfig";

export default function Home() {
  const [dataBerita, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await supabase
      .from("data-berita")
      .select()
      .order("id", { ascending: false });
    setData(data);
  }

  return (
    <>
      <Suspense>
        <Body data={dataBerita} />
      </Suspense>
    </>
  );
}
