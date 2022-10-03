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

        <ul>
         <li>{obj.firstName}</li>
         <li>{obj.lastName}</li>
         <li>{obj.age}</li>
        </ul>

      ))}

    </div>
  );
}
