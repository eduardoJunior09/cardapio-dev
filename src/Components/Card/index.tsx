export default function Card() {
  return (
    <div className="flex flex-col gap-2rounded-md bg-card shadow-lg w-full max-w-72 sm:max-w-64 h-64">
      <div className="w-full h-32">
        <img
          src="/public/lanchonete.jpg"
          alt=""
          className="w-full h-full object-cover rounded-t-lg
        "
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-2 w-full  p-2">
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <h2 className="text-textos font-semibold text-lg">Titulo</h2>
          <span className="text-textos-light font-mono w-full truncate">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            in delectus tenetur unde architecto nesciunt fugit pariatur sit.
            Officiis, blanditiis. Reiciendis doloremque incidunt velit quos,
            laboriosam a rerum. In, officiis?
          </span>
        </div>
        <div className="flex items-center justify-end w-full py-2">
          <h2 className="text-principal font-semibold text-lg">
            R$: <span>99,00</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
