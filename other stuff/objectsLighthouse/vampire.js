class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let counter = 0;
    let Vamp = this;
    while (Vamp.creator) {
      ++counter;
      Vamp = Vamp.creator;
    }
    return counter;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (
      this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal
    ) {
      return true;
    }
    return false;
  }

  // 1. base case, the smallest case SHOULD NOT BE IN YOUR FOR LOOP. (ie. our vampire is the name).
  // When we hit the base case we start resolving the callbacks in reverse order
  // 1. OR initialization of the initial state of of an output that we will return at the end.
  // 2. loop that calls the function inside itself.
  // when we call it we hope back to the top of the function and we've added another function to the stack
  // If we have a counter(initial state), we make it equal to the result of us calling the function(with the same argument) on our iterator(element) of the for loop
  //we can either update the output state to one thing or add the output of the callback function to it to what it was originally with += or .concat() for arrays.
  // 3. return statement
  // Implement each method using Depth First Traversal.

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    let output = null; //initial state
    if (this.name === name) {
      //base case
      return (output = this);
    }
    for (let vampire of this.offspring) {
      //loop
      if (vampire.vampireWithName(name)) {
        output = vampire.vampireWithName(name); //recursion
      }
    }
    return output; //return statement
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let total = this.offspring.length;
    for (let decendent of this.offspring) {
      total += decendent.totalDescendents;
    }
    return total;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let output = [];
    if (this.yearConverted > 1980) {
      output.push(this);
    }
    for (let decendent of this.offspring) {
      output = output.concat(decendent.allMillennialVampires);
    }
    return output;
  }
  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  //upwards recursion
  closestCommonAncestor(vampire) {
    //If the vampire has no creator
    if (!vampire.creator) {
      return vampire;
    }
    //If we have no creator
    if (!this.creator) {
      return this;
    }
    //If we are the vampire
    if (vampire === this) {
      return this;
    }
    //If we have the same creator
    if (vampire.creator === this.creator) {
      return this.creator;
    }
    //If my creator is the vampire
    if (this.creator === vampire) {
      return vampire;
    }
    //If the vampire's creator is me
    if (vampire.creator === this) {
      return this;
    }
    if (this.isMoreSeniorThan(vampire)) {
      return vampire.creator.closestCommonAncestor(this);
    }
    return this.creator.closestCommonAncestor(vampire);

    //   let myAnscestors = [];
    //   let theirAncestors = [];
    //   let myCreator = this.creator;
    //   let theirCreator = vampire.creator;
    //   while (myCreator) {
    //     myAnscestors.push(myCreator);
    //     myCreator = myCreator.creator;
    //   }
    //   while (theirCreator) {
    //     theirAnscestors.push(theirCreator);
    //     theirCreator = theirCreator.creator;
    //   }
    //   for (let mine of myAnscestors) {
    //     for (let theirs of theirAncestors) {
    //       if (mine === theirs) {
    //         return mine;
    //       }
    //     }
    //   }
  }
}

const Jenny = new Vampire("Jenny", 1988);
console.log(Jenny.name);
