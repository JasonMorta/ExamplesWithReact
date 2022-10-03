import React from 'react'

export default function Instance() {

const employees = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Anna", lastName: "Smith" },
  { firstName: "Peter", lastName: "Jones" },
];
 

const list = employees.forEach((imp) =>{

<p>{imp.firstName}</p>
}
)



  return (
    <div>
     {list}
    </div>
  )
}
