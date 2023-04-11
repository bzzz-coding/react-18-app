const Boardgame = ({ img, title, author, rating }) => {
  return (
    <div className="game">
      <img src={img} alt={title} />
      <h2>{title.toUpperCase()}</h2>
      <h4>{author}</h4>
      <p>{rating}</p>
      <button>Log Message</button>
    </div>
  );
};
export default Boardgame;