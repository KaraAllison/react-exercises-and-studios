import recipedata from "./recipe.json";
function IngredientList() {
  return (
    <div>
      <h3>Ingredients</h3>
      {recipedata.map((data) => {
        return (
          <div key={data.name}>
            {data.ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>
            })}
            </div>
        )
      })}
    </div>
  )

}

  // return (
  //   <div>
  //     <h3>Ingredients</h3>
  //     {recipedata.map((data) => {
  //       return (
  //         <div key={data.name}>
  //           {data.ingredients.map((ingredient, index) => {
  //             return <li key={index}>{ingredient}</li>;
  //           })}
            
  //     })}
  //   </div>
  // )

  //  return (
  //   <div key={recipedata.name}>
  //     {recipedata.ingredients.map((ingredient, index) => {
  //       return <li key={index}>{ingredient}</li>
  //     })}
  //   </div>
  //  )

  

  // const recipeImage = recipedata.map((data) => (
  //   <div key={data.name}>
  //     <img src={data.recipeImage} alt={data.name}
  //     className="recipeImage" />
  //   </div>
  // ))
  //  return recipeImage;
 
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 