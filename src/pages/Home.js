import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import { useLocation } from "react-router-dom";
//Components
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";
//Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../animations";

const Home = () => {
  //Get the current Location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //GET DATA
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameListStyle variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetails pathId={pathId} />}
        </AnimatePresence>
        {searched.length && (
          <div className="searched">
            <h2>Searched Games</h2>
            <GamesStyle>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  key={game.id}
                  id={game.id}
                  image={game.background_image}
                />
              ))}
            </GamesStyle>
          </div>
        )}
        <h2>Popular Games</h2>
        <GamesStyle>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              key={game.id}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </GamesStyle>
        <h2>Upcoming Games</h2>
        <GamesStyle>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              key={game.id}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </GamesStyle>
        <h2>New Games</h2>
        <GamesStyle>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              key={game.id}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </GamesStyle>
      </AnimateSharedLayout>
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
