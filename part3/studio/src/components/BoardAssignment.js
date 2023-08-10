import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         label: 'Picnic Recipes',
         value: 'Great recipes to bring to a summer picnic'
      },
      {
         label: 'Desserts',
         value: 'Delectable desserts'
      },
      {
         label: 'Baked Goods',
         value: 'Things that go in the oven'
      }
   ];

   const handleChange = (event) => {
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}