import data from "../data.json";
import { useState } from "react";

export default function MyProjects() {
    const [index, setIndex] = useState(0);

    const list = data;
    let item =list[0];

    function handleClick() {
        if (index < data.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }

    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <ul>
                <li>{data[index].thing1}</li>
                <li>{data[index].thing2}</li>
                <li>{data[index].thing3}</li>
                <li>{data[index].thing4}</li>
            </ul>
        </div>
    )

}

// {recipedata.map((data) => {
//     return (
//       <div key={data.name}>
//         {data.ingredients.map((ingredient, index) => {
//           return <li key={index}>{ingredient}</li>
//         })}
//         </div>
//     )
//   })}