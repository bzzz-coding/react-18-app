import React from "react";
import ReactDOM from "react-dom/client";
import './css/index.css';


const games = [
  {
    id: 1,
    title: 'Dominion',
    img: 'https://cf.geekdo-images.com/j6iQpZ4XkemZP07HNCODBA__itemrep/img/_QiaiFj-LGZoqdatE-wVqNaYWx8=/fit-in/246x300/filters:strip_icc()/pic394356.jpg',
    author: 'Donald X. Vaccarino',
    rating: '7.6'
  },
  {
    id: 2,
    title: 'Dominion: Intrigue',
    img: 'https://cf.geekdo-images.com/OGOmpi0GgwOwH2y28QgkuA__itemrep/img/BUiLGjf1tVpnUsg9WEyRq1HXAL4=/fit-in/246x300/filters:strip_icc()/pic460011.jpg',
    author: 'Donald X. Vaccarino',
    rating: '7.7'
  },
  {
    id: 3,
    title: 'Dominion: Seaside',
    img: 'https://cf.geekdo-images.com/n1_bOankhLYghTFscRAG8A__itemrep/img/wBuYKmIc3CXprCMdK2UjqDNfsyA=/fit-in/246x300/filters:strip_icc()/pic543471.jpg',
    author: 'Donald X. Vaccarino',
    rating: '8.0'
  }
];

const BoardgameList = () => {
  const getGame = (id) => games.find(game => game.id === id); // returns the game object that meets this condition
  // console.log(getGame(1));

  return (
    <section className='gamelist'>
      {games.map(game => <Boardgame {...game} key={game.id} getGame={getGame} />)}
    </section>
  );
};


const Boardgame = ({ img, title, author, rating, id, getGame }) => {
  // wrapper function:
  const logGameInfo = () => {
    console.log(getGame(id));
  };

  return (
    <div className="game">
      <img src={img} alt={title} />
      <h2>{title.toUpperCase()}</h2>
      <h4>{author}</h4>
      <p>{rating}</p>
      <button onClick={logGameInfo}>Log Game</button>
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BoardgameList />);

