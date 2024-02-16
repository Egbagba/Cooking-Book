import React from "react";


function FoodForList({ food , deleteItem }) {
  return (
    <div className = "listElement" key={food.id}>
      <div>
        <h3>Name of the Food: {food.name}</h3>
        <h4>Items to cook: {food.items}</h4>
        <h4>Seasoning: {food.seasoning}</h4>
        <p>Steps:</p>
        
        {food.steps && food.steps.length > 0 && (
          <ul>
            {food.steps.map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient}
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => deleteItem(food.id)} className="deleteBtn" delete={deleteItem}>Delete</button>
      </div>
    </div>
  );
}

export default FoodForList;