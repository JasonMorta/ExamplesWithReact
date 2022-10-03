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
        <ul class="list-group">
          <li class="list-group-item">{obj.firstName}</li>
          <li class="list-group-item">{obj.lastName}</li>
          <li class="list-group-item">{obj.age}</li>
        </ul>
      ))}
    </div>
  );
}
