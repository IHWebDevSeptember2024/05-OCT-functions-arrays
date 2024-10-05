const students = [
  "Andrea",
  "Tomas",
  "Sven",
  "Roxana",
  "Jose",
  "Marta",
  "Airam",
  "Eleni",
  "Èric",
];

const groups = [[], [], [], []];

students.forEach(() => {
  groups.forEach((group) => {
    const randomIndex = Math.floor(Math.random() * students.length);
    if (group.length < 2) {
      group.push(students[randomIndex]);
      students.splice(randomIndex, 1);
    }
  });
});
groups[0].push(students[0]);

console.log(groups);
