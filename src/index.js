import React from "react";
import ReactDOM from "react-dom/client";

import './css/index.css';
import { games } from './games';
import Boardgame from './Boardgame';



const BoardgameList = () => {

  return (
    <>
      {/* <EventComponent /> */}
      <h1 className="pageTitle">My Favorite Board Games</h1>
      <section className='gamelist'>
        {games.map((game, index) => <Boardgame {...game} key={game.id} order={index + 1} />)}
      </section>
    </>
  );
};

const EventComponent = () => {
  const handleInputChange = (e) => {
    console.log(e.target);
    console.log(`Input: ${e.target.value}`);
  };

  // const handleClick = () => {
  //   alert('Clicked!');
  // };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  }

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h1>Add Game</h1>
        <input type="text" name="title" placeholder="Game Title" onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form>
      <button type='button' onClick={(e) => {alert(`${e.target.type} got clicked!`);}}>Click Me</button>
    </section>
  );
};





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BoardgameList />);

