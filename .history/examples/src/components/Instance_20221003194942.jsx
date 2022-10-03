import React from 'react'

export default function Instance() {

const employees = [
  { firstName: "John", lastName: "Doe", age: 32 },
  { firstName: "Anna", lastName: "Smith", age: 23 },
  { firstName: "Peter", lastName: "Jones", age: 44 },
];
 


  return (
    <div style={{minWidth: "50%"}}>
      <h1>List</h1>

      {employees.map(obj => 
        <ul class="list-group">
          <li class="list-group-item"><b>Name:</b> {obj.firstName}</li>
          <li class="list-group-item"><b>Last name: </b>{obj.lastName}</li>
          <li class="list-group-item">{obj.age}</li>
        </ul>
      )}
    </div>
  );
}
