"use client";

import { useParams } from "next/navigation";
import SidebarDashboard from "../../components/SidebarDashboard";
import { useEffect, useState } from "react";
import supabase from "@/app/config/supabaseConfig";
import { ImageConvert } from "@/app/fetch/ImageConvert";

export default function EditPage() {
  const [Judul, setJudul] = useState("");
  const [Kategori, setKategori] = useState("");
  const [Isi_Berita, setIsiBerita] = useState("");
  const [ImageURL, setImageUrl] = useState("");
  const [formError, setFormError] = useState(null);

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
        setFormError(error);
        console.log(error);
      }
      if (data) {
        console.log(data);
        setJudul(data.Judul);
        setIsiBerita(data.Isi_Berita);
        setImageUrl(data.ImageURL);
        setKategori(data.Kategori);
      }
    };

    fetchBerita();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Judul || !Isi_Berita || !ImageURL || !Kategori) {
      setFormError("Please fill in all the fields correctly.");
      return;
    }

    const { data, error } = await supabase
      .from("data-berita")
      .update({ Isi_Berita, Judul, ImageURL, Kategori })
      .eq("id", id)
      .select();

    if (error) {
      console.log(error);
      setFormError("Please fill in all the fields correctly.");
    }
    if (data) {
      console.log(data);
      alert("Berhasil update data");
      window.location.reload("/dashboard/listkonten");
    }
  };

  const handleFilesUpload = async (e) => {
    const image = e.target.files[0];
    console.log(image);
    const { data, error } = await supabase.storage
      .from("news-image")
      .upload(`/${image.name}`, await ImageConvert(image) !== null && await ImageConvert(image), {
        contentType: 'image/webp',
        cacheControl: "3600",
        upsert: false,
      });
    console.log(data);
    console.log(error);

    const { publicURL } = await supabase.storage
      .from("news-image")
      .getPublicUrl(`/${image.name}`);

    console.log(publicURL);

    if (data || publicURL) {
      setImageUrl(
        `https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/${image.name}`
      );
    }

    //  (formData = { ...formData, image_url: publicURL })
  };

  return (
    <>
      <div className="h-screen w-full bg-slate-100 flex">
        <SidebarDashboard />
        <div className="w-5/6 h-fit p-10">
          <form onSubmit={handleSubmit}>
            <div className="my-4">
              <label
                htmlFor="judul"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Judul
              </label>
              <input
                type="text"
                id="judul"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={Judul}
                onChange={(e) => setJudul(e.target.value)}
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="kategori"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Kategori
              </label>
              <select
                id="kategori"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option
                  value={Kategori}
                  onChange={(e) => setKategori(e.target.value)}
                >
                  Pilih kategori...
                </option>
                <option value="Pekalongan">Pekalongan</option>
                <option value="Batang">Batang</option>
                <option value="Kajen">Kajen</option>
                <option value="Kendal">Kendal</option>
              </select>
            </div>
            <div className="my-4">
              <label
                htmlFor="isi_berita"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Isi Berita
              </label>
              <textarea
                id="isi_berita"
                rows="4"
                className="block p-2.5 w-full h-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tulis berita disini..."
                value={Isi_Berita}
                onChange={(e) => setIsiBerita(e.target.value)}
              />
            </div>
            <div className="my-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Upload Gambar
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
                accept="image/*"
                // value={ImageURL}
                onChange={(e) => handleFilesUpload(e)}
              />
            </div>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Update Data Berita
            </button>

            {formError && <p className="error">{formError}</p>}
          </form>
        </div>
      </div>
    </>
  );
}
