import { CDN_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";



const RestaurantCard = (props) => {
  
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    resData?.info;


  return (
    <div className="w-60 p-2 m-2 bg-gray-100 hover:bg-gray-200 rounded-md" >
   
      <img
        className="w-52 p-2 m-2 rounded-md"
        alt="res-logo"
        src = {`${CDN_URL}${cloudinaryImageId}`}

      />
      <h3 className="text-lg text-bold">{name}</h3>
      <h4 className="text-gray-700">{cuisines.join(", ")}</h4>
      <h4 className="text-gray-700">{avgRating} stars</h4>
      <h4 className="text-gray-700">{costForTwo}</h4>
      <h4 className="text-gray-700">{sla?.slaString}</h4>

    </div>
  );
};

export default RestaurantCard;

export const withPromotedLabel =()=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute m-2 p-2 bg-black">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
