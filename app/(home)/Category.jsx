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
    <ul className="flex space-x-4 justify-evenly items-center bg-slate-500 overflow-x-auto p-2 w-full text-white">
      {dataLink.map((x, y) =>
        <Link href={`/${x}`} key={y}>
          <li className="w-20">
            {x}
          </li>
        </Link>
      )}
    </ul>
  );
}
