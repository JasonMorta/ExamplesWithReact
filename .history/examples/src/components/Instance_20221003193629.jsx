import React from 'react'

export default function Instance() {

const employees = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Anna", lastName: "Smith" },
  { firstName: "Peter", lastName: "Jones" },
];
 

let list = employees.forEach((obj, index) =>
 <p>{obj.firstName}</p>
);



  return (
    <div>
     <h1>List</h1>
     {list}
     
     </div>
  )
}
