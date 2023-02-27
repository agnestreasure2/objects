// QUESTION 1:
function instagramPost(HandleOfAuthour, Content, imageLink, numberOfViews, numberofLikes){
    this.HandleOfAuthour = HandleOfAuthour;
    this.Content = Content;
    this.link = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberofLikes = numberofLikes;

}

//QUESTION 2:
let firstIgPost = new instagramPost('@arsenal', 'Overtly ', 'https://www.instagram.com/p/CpKUaaLIERq/', 10000, 2345);
let secondIgPost = new instagramPost('@agneytreasure', 'Overtly ', 'https://www.instagram.com/p/CjyJZM7IvYY/', 98, 10);

console.log(firstIgPost);
console.log(secondIgPost);



// QUESTION  3A.
function createPerson(name, age, location){
    return{
        name: name,
        age: age,
        location: location,
    }
}
const personMusa = createPerson('Musa', '19', 'Lekki, Lagos State');
console.log({personMusa});

// QUESTION 3B.
function createJambScores(eng, govt, lit, crk){
    return{
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
    }
}

const musaJambScore = createJambScores(89, 97, 70, 90);
console.log({musaJambScore});

personMusa.jambScores = musaJambScore;
console.log({personMusa});

// QUESTION 4:
/* 
*The object 'house' will be cloned using the different method listed below:
* JSON parsing
* structuredClone() function
* Object.assign() function
* spread operator
* 'for in' loop 
*/
const house = new Object();
house.type = 'Bungalow';
house.floor = '1';
house.numberOfRoom = '3';
house.roofType = 'Aluminium';
house.color = 'White';

console.log({house});

//I. Cloning object Using JSON parsing.
const cloneHouseTwo = JSON.parse(JSON.stringify(house))
console.log({cloneHouseTwo});

//II. Cloning object Using the structuredClone() function.
const cloneHouseThree = structuredClone(house);
console.log({cloneHouseThree});
// cloneHouseThree.landArea ="18 x 20";
//console.log({cloneHouseThree});

//II. Cloning object calling the Object.assign() function.
const cloneHouseFour = Object.assign({}, house);
console.log({cloneHouseFour});

//IV. Cloning object Using the spread operator.
const houseFive = {...house};
console.log({houseFive});

//V. Cloning object Using the 'For in' loop.
const houseSix = {};
for (let index in house){
    houseSix[index] = house[index];
}
console.log({houseSix})

// Answer to question 5.
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}

//’Omoyele Sowore is the presidential candidate of AAC’
for(party in presidentialCandidates){
    console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
}
