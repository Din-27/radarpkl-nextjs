const dataContentVideo = [1, 2, 3, 4, 5]

export default function VideoSection({ title }) {
  return (
    <div className="lg:container md:mx-auto">
      <div className=" flex justify-between mx-4">
        <h2 className="font-semibold">{title}</h2>
        <h2 className="font-semibold">Lihat Semua</h2>
      </div>
      <div className="container mx-auto p-6 bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dataContentVideo.map((x, y) =>
            <div className="bg-white shadow-md rounded-lg overflow-hidden" key={y}>
              <a>
                <img
                  src="/Logo RadarPekalonganBiru.webp"
                  alt="bebas"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold">Judul</h3>
                </div>
              </a>
            </div>)}
        </div>
      </div>
    </div>
  );
}
