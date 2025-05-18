import Search from "../Search";

export default function Header() {
  return (
    <header className="flex flex-col gap-2 w-full">
      <div className="flex items-center justify-center gap-1 w-full text-2xl p-2 bg-principal text-white font-semibold">
        <i className="bi bi-shop-window"></i>
        <h1>Cardápio Dev</h1>
      </div>
      <div className="W-full px-2">
        <Search />
      </div>
      <div className="w-full h-30 px-4 rounded-lg">
        <img
          src="/public/lanchonete.jpg"
          alt=""
          className="w-full  h-full object-cover rounded-lg"
        />
      </div>


    </header>
  );
}
