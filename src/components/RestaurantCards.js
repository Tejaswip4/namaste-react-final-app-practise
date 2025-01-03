import { CDN_URL } from "../utils/constant";

const RestaurantCards = (props) => {
const {resData} = props;
const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info


    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" 
                  alt="res-logo" 
                  src={CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{avgRating}</h3>
            <h4>{costForTwo}</h4>
        </div>

    )
}

export default RestaurantCards;