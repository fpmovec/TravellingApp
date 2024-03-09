import { Skeleton } from "@mui/material";
import "../styles/components/card.scss";
import cardImage from "./1.png";

interface Props {
  id?: string;
  title?: string;
  description?: string;
  photo?: string;
}

const CardItem = ({
  id = "0",
  title = "Lucca Bike Tour",
  description = "A tour of the city and its surroundings led by ...",
  photo = "./1.jpeg",
}: Props) => {
  const isContentLoaded =
    title.length > 0 && description.length > 0 && photo.length > 0;

  return (
    <div className="card-container">
      <div className="image">
        <img src={cardImage} alt="Card photo" />
      </div>
      <h3>{title}</h3>
      <h4 style={{fontWeight:300}}>
        from <span>34€</span>
      </h4>
      <div className="card-brief-panel">
        <span className="card-brief-panel-item">
          <i className="fa fa-calendar" aria-hidden="true"></i> Every day
        </span>
        <span className="card-brief-panel-item">
          <i className="fa fa-users" aria-hidden="true"></i> 3-10 PP
        </span>
      </div>
      <div className="description">{description}</div>
    </div>
  );
};

export default CardItem;
