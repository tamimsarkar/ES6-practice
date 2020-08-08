// getting names by through for loop
const students = [
    {id : 43 , name : 'Shahnaz' },
    {id : 33 , name : 'shahanshah' },
    {id : 23 , name : 'shahnewaz' },
    {id : 13 , name : 'shahPran' },
]

const newAdded = [];

for (let i = 0; i < students.length; i++) {
    const element = students[i].name;
    newAdded.push(element);
    
}
console.log(newAdded);

// getting names from array by map

const getFromMap = students.map(student => student.name ) 
console.log(getFromMap);

//get Ids from array by map

const ids = students.map(student => student.id);
console.log(ids)

// getting larger id than 22

const gettingLarge = students.filter( x => x.id>22)
console.log(gettingLarge);

// getting large id than 23
const getLarge = students.find( x => x.id>23);
console.log(getLarge);