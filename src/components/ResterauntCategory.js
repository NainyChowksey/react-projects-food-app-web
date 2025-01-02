import { useState } from "react"
import ItemList from "./ItemList"

const ResterauntCategory = ({data})=>{
    console.log(data, "DATA")

    const categoryItems = data?.itemCards
    const [open, setOpen]= useState(false)

    const handleClick = () =>{
        setOpen(!open)
    }
    return (

        <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {open && <ItemList items={data.itemCards}/>}
      </div>
    </div>
    )
}

export default ResterauntCategory;


