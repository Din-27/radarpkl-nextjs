import Link from "next/link";

const dataLink = [
  'Pekalongan',
  'Kecantikan',
  'LifeStyle',
  'Otomotif',
  'Kajen',
  'Batang',
  'Kendal',
  'Bisnis',
  'Pendidikan',
  'Nasional',
  'Jateng',
  'Lain-Lain',
  'Indeks'
]

export default function Category() {
  return (
    <nav className="flex justify-center bg-slate-500 !overflow-auto ">
      <ul className="flex justify-evenly !sm:overflow-auto p-2 w-fit text-white">
        {dataLink.map((x, y) =>
          <Link href={`/${x}`}>
            <li className="px-2">{x}</li>
          </Link>)}
      </ul>
    </nav>
  );
}
