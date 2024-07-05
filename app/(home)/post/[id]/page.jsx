"use client";
import supabase from "@/app/config/supabaseConfig";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ContentLoader from "../../components/ContentLoader";
import Image from "next/image";
import CatatanDisway from "../../components/CatatanDisway";
import Terpopuler from "../../components/Terpopuler";

export default function PagePost() {
  const [dataBerita, setDataBerita] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBerita = async () => {
      const { data, error } = await supabase
        .from("data-berita")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        // navigate("/", { replace: true });
        console.log(error);
      }
      if (data) {
        console.log(data);
        setDataBerita(data);
      }
    };

    fetchBerita();
  }, [id]);

  const paragraf = dataBerita?.Isi_Berita;

  const sentences = paragraf
    ?.split(".")
    ?.filter((sentence) => sentence.trim() !== "");

  return (
    <>
      {!dataBerita && <ContentLoader />}
      {dataBerita && (
        <div className="lg:container md:mx-auto">
          <div className="flex p-5 sm:flex-col">
            <div className="flex flex-col w-2/3 md:items-center ">
              <h1 className=" font-bold text-2xl sm:text-xl text-center">
                {dataBerita.Judul}
              </h1>
              <Image
                quality={50}
                width={500}
                height={500}
                src={dataBerita?.ImageURL || ''}
                alt=""
                className="h-fit rounded-lg mb-10"
              />
              <div className="text-lg">
                {" "}
                {sentences?.map((sentence, index) => (
                  <p key={index} className="">
                    {sentence}.
                  </p>
                ))}
                <Image
                  quality={30}
                  width={150}
                  height={150}
                  src={dataBerita?.ImageURL_2 || ""}
                  alt=""
                  className="w-40 sm:w-28 pr-4 h-fit"
                />
              </div>
            </div>
            <div className="w-1/3">
              <Terpopuler />
              <CatatanDisway />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
