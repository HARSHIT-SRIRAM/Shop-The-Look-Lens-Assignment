function lastManStanding(peopleInCircle) {
  let currentIndex = 0;

  // iterating until the array holds only one person
  while (peopleInCircle.length > 1) {
    // calculating the next index positon to be kept
    const nextIndex = (currentIndex + 1) % peopleInCircle.length;
    // removing the peron
    peopleInCircle.splice(nextIndex, 1);
    // updating current index postion to move forward
    currentIndex = nextIndex % peopleInCircle.length;
  }
  //returning the sinngle person standing
  return peopleInCircle[0];
}

// can be used to generate array upto n persons
let n=100 //you can change n as yout wish
const peopleInCircle = [];
for (let i = 1; i <= n; i++) {
  peopleInCircle.push(i);
}

const survivor = lastManStanding(peopleInCircle);
console.log("The Last Man Standing is:", survivor);
