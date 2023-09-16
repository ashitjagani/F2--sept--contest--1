const arr = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

  
  // 1. Print all developers from the array whose salary is above the average salary of the array.
  function printDeveloper() {
    const developers = arr.filter(person => person.profession === 'developer');

  console.log(developers)
  }


// 2. Add Data
function addData() {
  const newPerson = { name: "Alice", age: 30, profession: "developer" };
arr.push(newPerson);

console.log(arr);
}

// 3. Remove Admins
function removeAdmin() {
  const removeAdmi= arr.filter((profe)=>{return profe.profession !== "admin"});
  console.log(removeAdmi);
}

// 4. Concatenate Array
function concatenateArray() {
  const arr2=[{
    name: "jay", age: 24, profession: "developer" 
  }]

  let newarray= arr.concat(arr2);
  console.log(newarray);
}

// 5. Average Age
function averageAge() {
  const totalage= arr.reduce((acc,person)=>{return acc + person.age},0);
  var Average= totalage/arr.length;
  console.log(Average);
}

// 6. Age Check
function checkAgeAbove25() {
  const aboveage= arr.filter((above25)=>{return above25.age>25});
  console.log(aboveage);
}

// 7. Unique Professions
function uniqueProfessions() {
  const profession= arr.filter((develo)=>{ return develo.profession==='developer'});
  console.log(profession);
  const profession2 = arr.filter((admi)=>{return admi.profession==='admin'});
  console.log(profession2);
}

// 8. Sort by Age
function sortByAge() {
  arr.sort((a,b)=>a.age-b.age);
  console.log(arr);
}

// 9. Update Profession
function updateJohnsProfession() {
  const john = arr.find(person => person.name === "john");
  if (john) {
    // Update John's profession
    john.profession = "admin";
    console.log(arr); // This will display the updated array with John's new profession.
  } else {
    console.log("John not found in the array.");
  }
}
  
  // 14. Create a function that checks if there's any repeated name in the array.
  function getTotalProfessions() {
    //Write your code here, just console.log
    // let ct1=0;
    // let ct2=0;
    const repeatprofession= arr.filter((develo)=>{ return develo.profession==='developer'});
    console.log(repeatprofession.length +" "+"as a developer profession in the array");
   const repeatprofession2 = arr.filter((admi)=>{return admi.profession==='admin'})
    console.log(repeatprofession2.length +" "+ "as a admin profession in the array")
  }