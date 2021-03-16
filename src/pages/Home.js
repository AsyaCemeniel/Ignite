import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //GET DATA
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameListStyle>
      <h2>Upcoming Games</h2>
      <GamesStyle>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            key={game.id}
            image={game.background_image}
          />
        ))}
      </GamesStyle>
    </GameListStyle>
  );
};

const GameListStyle = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const GamesStyle = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
