export default function Card() {
  return (
    <div className="flex flex-col gap-2 w-full rounded-md bg-gray-300">
      <div className="w-full h-32">
        <img
          src="/public/lanchonete.jpg"
          alt=""
          className="w-full h-full object-cover rounded-t-lg
        "
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-2 w-full p-2">
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <h2>Titulo</h2>
           <span></span>
        </div>
        preço
      </div>
    </div>
  );
}
