import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadDetails } from "../actions/detailAction";
import smallImage from "../util";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animations";

const Game = ({ name, released, image, id }) => {
  const stringId = id.toString();
  //Load Details Handler

  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetails(id));
  };

  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringId}
      onClick={loadDetailsHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
