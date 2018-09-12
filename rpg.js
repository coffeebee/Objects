const aurora ={
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
    describe(){
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
    }
};

console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} strength`);
console.log();

//AURORA IS HARMED BY AN ARROW - REDUCE HEALTH BY 20
aurora.health -=20;
//AURORA EQUIPS A STRENGTH NECKLACE - INCREASING STRENGTH BY 10
aurora.health +=10;
//AURORA LEARN A NEW SKILL
aurora.xp +=15;

console.log(aurora.describe());



