import React, { useState } from "react";
import FoodForList from "./FoodForList";
import allTheFood from "../data/allFoodForList.json";


function List() {
  const [foodItems, setFoodItems] = useState(allTheFood);
  const [newFoodName, setNewFoodName] = useState("");
  const [newFoodType, setNewFoodType] = useState("");
  const [timeToCookInput, setTimeToCookInput] = useState("");
  const [stepsInput, setStepsInput] = useState("");
  
  const deleteItem = (foodId) => {
    const filteredFood = foodItems.filter((food) => {
      return food.id !== foodId;
    });
    setFoodItems(filteredFood);
  };

  
  const addItem = () => {
    const newFoodItem = {
      id: foodItems.length + 1,
      name: newFoodName,
      type: newFoodType,
      timeToCook: timeToCookInput.trim(),
      steps: [],
    };
    setFoodItems([...foodItems, newFoodItem]);
    setNewFoodName("");
    setNewFoodType("");
    setTimeToCookInput("");
    setStepsInput("");
  };
  
  return (
    <div className="foodList">

      {/* <div>
        <Steps food = {food} stepsItem={showSteps}/>
      </div> */}
      {foodItems.map((food) => (
        <div key={food.id}>
          <FoodForList food={food} deleteItem={deleteItem}/>
        </div>
        
      ))}
      <div className="form">
        <input
          type="text"
          required
          value={newFoodName}
          onChange={(e) => setNewFoodName(e.target.value)}
          placeholder="Enter food name"
        />
        <input
          type="text"
          required
          value={newFoodType}
          onChange={(e) => setNewFoodType(e.target.value)}
          placeholder="Enter food type"
        />
        <input
          type="number" // Set type to number
          required
          value={timeToCookInput}
          onChange={(e) => setTimeToCookInput(e.target.value)}
          placeholder="Enter time to cook"
        />
        <input
          type="text" // Keep the input type as "text" for steps
          required
          value={stepsInput}
          onChange={(e) => setStepsInput(e.target.value)}
          placeholder="Enter ingredients"
        />
        <button onClick={addItem}>Add Food</button>
      </div>
      
    </div>
  );
}
export default List;