function Rating({ stars, onRate }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <i
          key={i}
          className={`text-yellow-500 cursor-pointer fa-${
            stars >= i ? "solid" : "regular"
          } fa-star`}
          onClick={() => onRate(i)}
        ></i>
      ))}
    </div>
  );
}

export default Rating;
