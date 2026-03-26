export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-white shadow-md flex justify-between items-center px-10">
      <div className="font-bold text-xl text-blue-600">AzraDev</div>
      <ul className="flex gap-6 text-gray-600 font-medium">
        <li className="hover:text-blue-500 cursor-pointer transition">Anasayfa</li>
        <li className="hover:text-blue-500 cursor-pointer transition">Projeler</li>
        <li className="hover:text-blue-500 cursor-pointer transition">İletişim</li>
      </ul>
    </nav>
  );
}