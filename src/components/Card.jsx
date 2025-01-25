export default function Card({ book }) {
  return (
    <div className="p-4" style={{ width: "100%" }}>
      <div>
        <img
          src={`${import.meta.env.VITE_BOOK_IMG_URL}/${book.image}`}
          className="object-contain h-[350px] mx-auto"
          alt={book.title}
        />
      </div>
      <div>
        <h3 className="mt-1 text-3xl">{book.title}</h3>
        <h4 className="text-xl italic">{book.author}</h4>
        <p className="my-2">{book.abstract}</p>
        <button className="px-4 py-1 text-white bg-blue-600 rounded-xl">Dettagli</button>
      </div>
    </div>
  );
}
