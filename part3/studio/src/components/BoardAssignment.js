import { useState } from 'react';

export default function BoardAssignment () {
   const [boardName, setName] = useState('no boards yet!');

   const boards = [
      {
         label: 'Picnic Recipes',
         value: 'picnic recipes'
      },
      {
         label: 'Desserts',
         value: 'desserts'
      },
      {
         label: 'Baked Goods',
         value: 'baked goods'
      }
   ];



   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         <option></option>
         {boards.map((item) => {
            return (
               <option value={item.value}>{item.label}</option>
            )
         })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}