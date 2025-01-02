import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();


    // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const PromotedResteraunt = withPromotedLabel(RestaurantCard);

  const online = useOnlineStatus();

  if (!online) return (
    <h1>Please check your internet</h1>
  )
  // return listOfRestaurants?.length === 0 || listOfRestaurants===undefined? (
  //   <Shimmer />
  // ) : (
  return (
    <div className="body">
      <div className="flex px-4 mx-4 mt-4">
        <div>
          <input
            type="text"
            className="border border-gray m-2 p-2 h-8"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-700 text-white px-2 py-1 m-2 w-32 rounded-md shadow-2xl"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-green-700 text-white px-4 py-1 m-2 rounded-md"
          onClick={() => {
            
            const filteredList = listOfRestaurants.filter(
              
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurant(
              (filteredList));            
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex p-4 m-4 flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/res/" + restaurant?.info.id}
          >
            {restaurant?.info?.type !== "F" ? <PromotedResteraunt resData={restaurant} /> : <RestaurantCard key={restaurant.info.id} resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
