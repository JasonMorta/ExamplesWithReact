import React from 'react'

export default function Instance() {

const employees = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Anna", lastName: "Smith" },
  { firstName: "Peter", lastName: "Jones" },
];
 





  return (
    <div>
     {employees.forEach(imp =>

       (<p>{imp.firstName}</p>)
 
     )}
    </div>
  )
}
