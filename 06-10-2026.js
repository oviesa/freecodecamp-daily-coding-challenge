function getRoommates(people) {
  const groups = {};
  const completedRooms = [];

  // Pair up roommates
  for (const person of people)  {
    const {name, group} = person;

    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(name);

    if (groups[group].length === 2) {
      completedRooms.push(`${groups[group][0]} and ${groups[group][1]}`);
      groups[group] = [];
    }
  }

  // Grab the solo leftovers
  for (const person of people)  {
    const {name, group} = person;

    if (groups[group] && groups[group].includes(name)) {
      completedRooms.push(name);
      groups[group] = groups[group].filter(n => n !== name);
    }
  } 
  return completedRooms;
}

const testPeople = [
  { "name": "Alice", "group": "A" },
  { "name": "Bob", "group": "B" },
  { "name": "Carol", "group": "A" }
];

console.log(getRoommates(testPeople)); 
