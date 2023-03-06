/* Массив должностей */
let positions = [
  "Junior developer",
  "Middle developer",
  "Senior developer",
  "Junior QA",
  "Middle QA",
  "Senior QA",
  "Project manager",
];
/* Массив имен сотрудников */
let names = [];

/* Получаем имя сотрудника*/
function getNames() {
  let name = names.push(prompt("Enter your name"));
  if (names.length == 7) return;
  getNames();
}
getNames();
console.log(names);

/* Создаем обьект team и добавляем в него сотрудников*/
const team = {
  employees: [],
  createTeam: function () {
    for (i = 0; i < positions.length; i += 1) {
      let name = names[i];
      let position = positions[i];
      const employee = {
        name: name,
        position: position,
        salary: 0,
      };
      this.employees.push(employee);
    }
  },
  /*Добавляем сотруднику зп согласно его должности*/
};
team.createTeam();
console.log(team);
