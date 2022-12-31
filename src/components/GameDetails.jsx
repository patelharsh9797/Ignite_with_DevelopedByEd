import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { smallImage } from "../utils";

// TODO images
import playstation from "../assets/img/playstation.svg";
import steam from "../assets/img/steam.svg";
import xbox from "../assets/img/xbox.svg";
import nintendo from "../assets/img/nintendo.svg";
import apple from "../assets/img/apple.svg";
import gamepad from "../assets/img/gamepad.svg";

// star images
import starEmpty from "../assets/img/star-empty.png";
import starFull from "../assets/img/star-full.png";

const GameDetails = ({ pathID }) => {
  const history = useNavigate();

  // Data
  const { game, screen, isLoading } = useSelector((state) => state.detail);

  // exit handler for scrollBar and close detail box
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("dropShadow")) {
      document.body.style.overflow = "auto";
      history("/");
    }
  };

  // TODO rating stars
  const getStars = () => {
    let stars = [];
    const rating = Math.floor(game.rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img src={starFull} key={i} alt="star Full"></img>);
      } else {
        stars.push(<img src={starEmpty} key={i} alt="star empty"></img>);
      }
    }
    return stars;
  };

  // TODO Platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="dropShadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathID}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathID}`}>{game.name}</motion.h3>
                <p>Ratings : </p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathID}`}
                src={smallImage(game.background_image, 1280)}
                alt="image"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  key={screen.id}
                  src={smallImage(screen.image, 1280)}
                  alt=""
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgb(0 0 0 /0.5);
  position: fixed;
  top: 0;
  left: 0;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }

  .gallery {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      border-radius: 1rem;
      box-shadow: 0 0 10px rgb(0 0 0/0.2);
    }
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: #fff;
  position: absolute;
  left: 10%;
  color: black;

  img {
    width: 100%;
  }

  @media (max-width: 50em) {
    width: min(100%, 90vw);
    padding: 1rem;
    left: 5%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }

  @media (max-width: 50em) {
    flex-direction: column;
    text-align: center;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 3rem;
  }

  @media (max-width: 50em) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    img {
      margin: 0;
    }
  }
`;

const Media = styled(motion.div)`
  margin-top: 3rem;

  img {
    width: 100%;
    border-radius: 3rem;
  }

  @media (max-width: 50em) {
    img {
      border-radius: 1.5rem;
    }
  }
`;

const Description = styled(motion.div)`
  margin-block: 5rem;
`;

export default GameDetails;
