import styles from './Description.module.css';
import React from 'react';

class RecipeDescription extends React.Component {
    render() {
        return(
            <div> 
      <div>
         <h1>Strawberry Rhubarb Pie</h1>
         <p>This best-ever strawberry rhubarb pie is filled to brimming with juicy, sweet strawberries, tart rhubarb, and the most delectable, buttery streusel topping.</p>
      </div>
      <RecipeAuthor />
   </div>
        )
    }
}
function RecipeAuthor() {
    let authorLink = 'https://www.melskitchencafe.com';
    let authorPhoto = 'https://www.melskitchencafe.com/wp-content/uploads/DSC_8968editedsquaresmall.jpg';
    let authorName = 'Mel';

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Mel, author of mel's Kitchen Cafe" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>mel's Kitchen Cafe</a> 
           </div>
        </div>
     );
}

export default RecipeDescription;