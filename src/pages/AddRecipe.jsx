import { useState } from "react";
import FoodForList from "../components/FoodForList";
import allTheFood from "../data/allFoodForList.json"


function AddRecipe() {
    const [foodItems, setFoodItems] = useState(allTheFood);
    const [newFoodName, setNewFoodName] = useState("");
    const [newFoodType, setNewFoodType] = useState("");
    const [timeToCookInput, setTimeToCookInput] = useState("");
    const [stepsInput, setStepsInput] = useState("");

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
            {foodItems.map((food) => (
                <div key={food.id}>
                    <FoodForList food={food} />
                    <button onClick={() => deleteItem(food.id)} className="deleteBtn">remove</button>
                </div>
            ))}
            <div className="form">
                <input
                    type="text"
                    value={newFoodName}
                    onChange={(e) => setNewFoodName(e.target.value)}
                    placeholder="Enter food name"
                />
                <input
                    type="text"
                    value={newFoodType}
                    onChange={(e) => setNewFoodType(e.target.value)}
                    placeholder="Enter food type"
                />
                <input
                    type="number" // Set type to number
                    value={timeToCookInput}
                    onChange={(e) => setTimeToCookInput(e.target.value)}
                    placeholder="Enter time to cook"
                />
                <input
                    type="text" // Keep the input type as "text" for steps
                    value={stepsInput}
                    onChange={(e) => setStepsInput(e.target.value)}
                    placeholder="Enter steps"
                />
                <button onClick={addItem}>Add Food</button>
            </div>
        </div>
    );
};

export default AddRecipe;






