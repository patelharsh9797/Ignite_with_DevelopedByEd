import { Link } from "react-router-dom";
import { smallImage } from "../utils";

// TODO REDUX
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

// TODO Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { popUp } from "../animation";

const Game = ({ name, released, image, id }) => {
  // const stringPathID = id.toString();  //sometimes id gives value in number

  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      variants={popUp}
      initial="hidden"
      animate="show"
      layoutId={id}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${id}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${id}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 0 5px rgb(0 0 0 /0.2);
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    object-position: center;
  }
`;

export default Game;
