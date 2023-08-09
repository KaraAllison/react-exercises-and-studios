let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {

  function GiveRating(props) {
    return <h3>{stars[props.rating - 1]}</h3>;
  }
  // if (props.rating > 0 && props.rating < 6 && props.rating%1 === 0) {
  //   return GiveRating(props);
  // } else {
  //   return null;
  // }

  return (props.rating > 0 && props.rating < 6 && props.rating%1 === 0) ?
  GiveRating(props) : null;

}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
