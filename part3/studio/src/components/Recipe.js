const RecipeAuthor = () => {
   let authorLink = 'https://www.melskitchencafe.com';
   let authorPhoto = 'https://www.melskitchencafe.com/wp-content/uploads/DSC_8968editedsquaresmall.jpg';
   let authorName = 'Mel';

   return (
      <div>
         <img src={authorPhoto} alt = "Mel, author of mel's Kitchen Cafe" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      'Single crust pie dough',
        '3 cups sliced rhubarb',
        '2 cups sliced strawberries',
        '3 tablespoons cornstarch',
        '1 cup all-purpose flour',
        '1/2 cup brown sugar',
        '1/2 cup cold butter'
   ];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
            <li>{ingredients[6]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Strawberry Rhubarb Pie</h1>
            <p>This best-ever strawberry rhubarb pie is filled to brimming with juicy, sweet strawberries, tart rhubarb, and the most delectable, buttery streusel topping.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.melskitchencafe.com/wp-content/uploads/the-best-strawberry-rhubarb-pie6.jpg"
       alt="Strawberry Rhubarb Pie" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}