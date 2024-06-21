/******************************************************************
 * TASK 1 & 2
 *****************************************************************/
let superHeroObject = {
    name:'Benjamin',
    secretIdentity: 'fire',
    powers:['fire','wind'],
    weekness:'water',
    usePower(powerName){console.log(`hero ${this.name} is using the ${powerName} power`)},
    revealIdentity(){console.log(`hero's secret identity is ${this.secretIdentity}`)}
}
superHeroObject.usePower('flying');
superHeroObject.revealIdentity();

/************************************************************************
 * TASK 3 & 4
 ***********************************************************************/
function SuperHero (name, secretIdentity, powers){
    this.name=name;
    this.secretIdentity= secretIdentity;
    this.powers=powers;
}

SuperHero.prototype.usePower = function(powerName){console.log(`hero ${this.name} is using his ${powerName} power`)}
SuperHero.prototype.revealIdentity = function(){console.log(`hero's secret identity is ${this.secretIdentity}`)}

const heroOne= new SuperHero('Benjamin', 'fire', ['fire','fuel'])
heroOne.usePower('dk');
heroOne.revealIdentity();


/************************************************************************
 * TASK 5 & 6
 ***********************************************************************/

let characters=[ {  name: 'Mr. Nice', secretIdentity:'hero', powers:['magnet'],weakness:'' },
  { name: 'Narco', secretIdentity:'hero', powers:['vision'],weakness:'' },
  { name: 'Bombasto', secretIdentity:'villian', powers:['happiness'],weakness:'' },
  { name: 'Celeritas', secretIdentity:'hero', powers:['wickedness'],weakness:'' },
  { name: 'Magneta', secretIdentity:'villian', powers:['murder'],weakness:'' },
  { name: 'RubberMan', secretIdentity:'villian', powers:['anger'],weakness:'' },
  { name: 'Dynama', secretIdentity:'villian', powers:['rigidness'],weakness:'' },
  { name: 'Dr IQ', secretIdentity:'hero', powers:['comfort'],weakness:'' },
  { name: 'Magma', secretIdentity:'villian', powers:['disguise'],weakness: ''},
  { name: 'Tornado', secretIdentity:'hero', powers:['expert chemist'],weakness:'intellect' }]
// for each
characters.forEach(el=>{
    if (el.secretIdentity === 'hero') {
        el.weakness = 'passion'
    }
})
console.log(characters);

// map
characters.map(char=>char.weakness =char.powers[0])
console.log(characters);

// filter
console.log(characters.filter(char=> char.secretIdentity === 'villian'));