const dog = {
    name: "Fang",
    species: "boarhound",
    size: 75,    
    describe(){
        return `${this.name} is a ${this.species} dog measuring ${this.size}`;
    },
    bark(){
        return  "Grrr! Grrr!";
    }
}

console.log(dog.describe());
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);