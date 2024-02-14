import React from "react";


function FoodForList({ food, deleteItem, stepsItem}) {
  return (
    <div className = "listElement" key={food.id}>
      <div>
        <h3>{food.name}</h3>
        <h4>Time to prepare and cook: {food.timeToCook} minutes.</h4>
        {food.ingredients && food.ingredients.length > 0 && (
          <ul>
            {food.ingredients.map((ingredient) => (
              <li key={ingredient.name}>
                {ingredient.quantity} {ingredient.name}
              </li>
            ))}
          </ul>
        )}
        {food.timeToCook < 60 && <p>ready in a jiffy</p>}
        {food.timeToCook >= 60 && food.timeToCook < 120 && <p>put some time aside</p>}
        {food.timeToCook >= 120 && <p>best to plan ahead</p>}
        <button onClick={() => deleteItem(food.id)} className="deleteBtn" delete={deleteItem}>remove</button>
        <button onClick={() => showSteps(food.id)} className="stepsBtn" steps={stepsItem}>steps</button>
      </div>
    </div>
  );
}

export default FoodForList;