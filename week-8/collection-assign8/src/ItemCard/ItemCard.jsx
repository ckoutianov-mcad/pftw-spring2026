import PropTypes from "prop-types";
import "./Itemcard.css";
export default function ItemCard({
    name,
    fragranceFamily,
    scentType,
    notes,
    description,
    isLayerable,
    image,
    id
}){
    return (
        <div className="fragranceCard">hello</div>
    )}
    ItemCard.propTypes = {
      name: PropTypes.string,
      fragranceFamily: PropTypes.string,
      scentType: PropTypes.string,
      notes: PropTypes.string,
      description: PropTypes.string,
      isLayerable: PropTypes.bool,
      image: PropTypes.string,
      id: PropTypes.string
    };
