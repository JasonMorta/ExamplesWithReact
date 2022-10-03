import React from 'react'

export default function Instance() {

const employees = [
  { firstName: "John", lastName: "Doe", age: 32 },
  { firstName: "Anna", lastName: "Smith", age: 23 },
  { firstName: "Peter", lastName: "Jones", age: 44 },
];
 


  return (
    <div>
      <h1>List</h1>

      {employees.map((obj, index) => (

        <>
         <p>{obj.firstName}</p>
         <p>{obj.lastName}</p>
         <p>{obj.age}</p>
         <ul class="list-group">
    <li class="list-group-item">First item</li>
    <li class="list-group-item">Second item</li>
    <li class="list-group-item">Third item</li>
  </ul>
        </>

      ))}

    </div>
  );
}
