import React from 'react'

export default function Instance() {

const employees = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Anna", lastName: "Smith" },
  { firstName: "Peter", lastName: "Jones" },
];
 





  return (
    <div>
      <h1>List</h1>

      {employees.map((obj, index) => (

        <ul>
         <li>{obj.firstName}</li>
        </ul>

      ))}

    </div>
  );
}
