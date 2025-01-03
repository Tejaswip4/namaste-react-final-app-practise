import RestaurantCards from "./RestaurantCards"

import resList from "../utils/mockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"

const Body = () => {
const [listOfRestaurant, setListOfRestaurant] = useState(resList)

useEffect(() => {
    fetchData();
}, []);

const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

    const json = await data.json();

    console.log(json);

    setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    
}

// if(listOfRestaurant.length === 0){
//     return (
//         <div>
//             <Shimmer />
//         </div>
//     )
// }

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
               <button className="filter-btn" onClick={() => {
                const filteredList = listOfRestaurant.filter((res) => res.info.avgRating >= 4.5)
                setListOfRestaurant(filteredList)
                
               }}>Top rated restaurant</button>
            </div>

            <div className="res-container">
            {listOfRestaurant.map((res) => <RestaurantCards key={res.info.id} resData={res} />)}

            
            </div>
        </div>
    )
}

export default Body