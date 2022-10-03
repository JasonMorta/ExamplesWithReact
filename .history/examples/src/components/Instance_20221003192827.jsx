import React from 'react'

export default function Instance() {

const employees = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Anna", lastName: "Smith" },
  { firstName: "Peter", lastName: "Jones" },
];
 

employees.forEach(imp =>{
 console.log(imp)
})



  return (
    <div>Instance</div>
  )
}
