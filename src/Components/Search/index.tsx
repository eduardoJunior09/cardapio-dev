export default function Search() {
  return (
    <div className="flex items-center justify-start gap-2 w-full px-2 py-1 ">
      <i className="bi bi-search text-principal"></i>
      <input
        type="text"
        placeholder="Busca de pesquisa..."
        className="text-textos focus:bg-gray-100 w-full py-1 rounded-lg"
      />
    </div>
  );
}
