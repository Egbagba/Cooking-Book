import React, { useState } from "react";
import FoodForList from "./FoodForList";
import allTheFood from "../data/allFoodForList.json";


function List() {
  const [foodItems, setFoodItems] = useState(allTheFood);
  const [newFoodName, setNewFoodName] = useState("");
  const [newFoodItems, setNewFoodItems] = useState("");
  const [newSeasoning , setNewSeasoning] = useState("");
  const [steps, setSteps] = useState("");
  
  const deleteItem = (foodId) => {
    const filteredFood = foodItems.filter((food) => {
      return food.id !== foodId;
    });
    setFoodItems(filteredFood);
  };

  
  const addItem = () => {
    const newFoodItem = {
      id: foodItems.length,
      name: newFoodName,
      items: newFoodItems,
      seasoning: newSeasoning, 
      steps: [],
    };
    setFoodItems([...foodItems, newFoodItem]);
    setNewFoodName("");
    setNewFoodItems("");
    setNewSeasoning("");
    setSteps("");
  };
  
  return (
    <div className="foodList">

      <div className="form">
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
          type="text" 
          required
          value={newSeasoning}
          onChange={(e) => setNewSeasoning(e.target.value)}
          placeholder="Enter Seasoning"
        />

        <input
          className="foodBar"
          type="text" // Keep the input type as "text" for steps
          required
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          placeholder="Enter Steps"
        />
        <button className="addButton" onClick={addItem}>Add Food</button>
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