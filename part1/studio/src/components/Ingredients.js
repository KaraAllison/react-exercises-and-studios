import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    let ingredients = [
        'Single crust pie dough',
        '3 cups sliced rhubarb',
        '2 cups sliced strawberries',
        '3 tablespoons cornstarch',
        '1 cup all-purpose flour',
        '1/2 cup brown sugar',
        '1/2 cup cold butter'
];
return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul className = {styles.ingredientList}>
         <li>{ingredients[0]}</li>
         <li>{ingredients[1]}</li>
         <li>{ingredients[2]}</li>
         <li>{ingredients[3]}</li>
         <li>{ingredients[4]}</li>
         <li>{ingredients[5]}</li>
         <li>{ingredients[6]}</li>
      </ul>
   </div>
)
}