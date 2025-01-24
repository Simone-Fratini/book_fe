export default function Card({ book }) {
  return (
    <div className="card" style={{ width: "100%" }}>
      <img
        src={book.image}
        className="card-img-top"
        alt={book.title}
        style={{ objectFit: "cover", height: "350px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text fst-italic">{book.author}</p>
        <p className="card-text">{book.abstract}</p>
        <button className="btn btn-primary">Dettagli</button>
      </div>
    </div>
  );
}
