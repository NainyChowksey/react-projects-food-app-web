// 
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useResterauntMenu from "../utils/useResterauntMenu.js";

import { useState } from "react";
import ResterauntCategory from "./ResterauntCategory.js";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dummy = "Dummy Data";

  const resInfo = useResterauntMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;


  //console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card)
  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;


  const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  //console.log(categories, resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards, "cat")
  // const categories =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (c) =>
  //       c.card?.["card"]?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   );
  // console.log(categories);

  return (
    <div className="justify-center m-6 p-6">
      {/* <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p> */}
      {/* {itemCards?.map((item , key=item?.card?.info?.id)=>{
      console.log(item?.card, "item:")
      return <li>{item?.card?.info?.name}</li>})} */}


      {/* categories accordions */}
      {/* {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))} */}

      {categories?.map((c) => <ResterauntCategory key={c?.card?.card?.title} data={c?.card?.card}/>)}
    </div>
  );
};

export default RestaurantMenu;