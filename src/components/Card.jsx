export default function Card({ book }) {
  return (
    <div className="p-4 bg-blue-300" style={{ width: "100%" }}>
      <img
        src={book.image}
        className="card-img-top"
        alt={book.title}
        style={{ objectFit: "cover", height: "350px" }}
      />
      <div>
        <h5 className="text-3xl">{book.title}</h5>
        <p className="text-xl italic">{book.author}</p>
        <p className="card-text">{book.abstract}</p>
        <button className="px-4 py-1 text-white bg-blue-600 rounded-xl">Dettagli</button>
      </div>
    </div>
  );
}
