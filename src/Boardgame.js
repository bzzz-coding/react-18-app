const Boardgame = ({ img, title, author, rating, order }) => {
  return (
    <div className="game">
      <p className="order">#{order}</p>
      <section className="details">
        <img src={img} alt={title} />
        <h2>{title.toUpperCase()}</h2>
        <h4>{author}</h4>
        <p>{rating}</p>
      </section>
    </div>
  );
};
export default Boardgame;
