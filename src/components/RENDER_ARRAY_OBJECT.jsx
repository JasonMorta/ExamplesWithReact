import React from 'react'

export default function RENDER_ARRAY_OBJECT() {

const employees = [
  { firstName: "John", lastName: "Doe", age: 32 },
  { firstName: "Anna", lastName: "Smith", age: 23 },
  { firstName: "Peter", lastName: "Jones", age: 44 },
];
 


  return (
    <div style={{minWidth: "50%"}}>
      <h1>List</h1>

      {employees.map((obj, index) => 
        <ul className="list-group" key={index}>
          <li className="list-group-item"><b>Name:</b> {obj.firstName}</li>
          <li className="list-group-item"><b>Surname: </b>{obj.lastName}</li>
          <li className="list-group-item"><b>Age: </b>{obj.age}</li>
        </ul>
      )}
    </div>
  );
}
