// TODO REDUX
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

// TODO Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 0 5px rgb(0 0 0 /0.2);
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    object-position: center;
  }
`;

export default Game;
