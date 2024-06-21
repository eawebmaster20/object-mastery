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