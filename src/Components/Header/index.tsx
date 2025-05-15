export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-center gap-1 w-full text-2xl p-2 bg-red-500 text-white font-semibold">
        <i className="bi bi-shop-window"></i>
        <h1>Cardápio Dev</h1>
      </div>
      <div className="flex items-center justify-center gap-1 w-full p-1 text-sm text-red-400">
        <i className="bi bi-geo-alt-fill"></i>
        <p>Mutuípe - Bahia</p>
      </div>
      <div className="w-full bg-gray-500 h-56"></div>
    </header>
  );
}
