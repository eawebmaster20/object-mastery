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
