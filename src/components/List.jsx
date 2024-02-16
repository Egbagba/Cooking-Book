import React, { useState } from "react";
import FoodForList from "./FoodForList";
import allTheFood from "../data/allFoodForList.json";


function List() {
  const [foodItems, setFoodItems] = useState(allTheFood);
  const [newFoodName, setNewFoodName] = useState("");
  const [newFoodItems, setNewFoodItems] = useState("");
  const [stepsInput, setStepsInput] = useState("");
  
  const deleteItem = (foodId) => {
    const filteredFood = foodItems.filter((food) => {
      return food.id !== foodId;
    });
    setFoodItems(filteredFood);
  };

  
  const addItem = () => {

    //e.preventDefault()
    
    const newFoodItem = {
      id: foodItems.length,
      name:newFoodName,
      items:newFoodItems,
      steps: [],
    };
    setFoodItems([...foodItems, newFoodItem]);
    setNewFoodName("");
    setNewFoodItems("");
   setStepsInput("");
  };
  
  return (
    <div className="foodList">

      <div className="form">
        <form onSubmit= {addItem}>
        <input
          className="foodBar"
          type="text"
          required
          value={newFoodName}
          onChange={(e) => setNewFoodName(e.target.value)}
          placeholder="Enter food name"
        />
        <input
          className="foodBar"
          type="text"
          required
          value={newFoodItems}
          onChange={(e) => setNewFoodItems(e.target.value)}
          placeholder="Enter food type"
        />
         <input
          className="foodBar"
          type="text" // Keep the input type as "text" for steps
          required
          value={stepsInput}
          onChange={(e) => setStepsInput(e.target.value)}
          placeholder="Enter Steps"
        /> 
        <button type="submit" >Add Food</button>
        </form>
      </div>


      {foodItems.map((food) => (
        <div key={food.id}>
          <FoodForList food={food} deleteItem={deleteItem}/>
        </div>
        
      ))}
      
      
    </div>
  );
}
export default List;