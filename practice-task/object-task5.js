let myObject ={
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}

const keys = Object.keys(myObject);
//Get the myObject property using keys method
for(const key of keys) {
    console.log(`key: ${key} | type: ${typeof myObject[key]}`)
    //key help us to get the property and typeof myObject[key] help us to get the type of the values
}