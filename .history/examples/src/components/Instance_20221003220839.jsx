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
          <li class="list-group-item"><b>1:</b> {obj.firstName}</li>
          <li class="list-group-item"><b>2: </b>{obj.lastName}</li>
          <li class="list-group-item"><b>3: </b>{obj.age}</li>
        </ul>
      )}
    </div>
  );
}
