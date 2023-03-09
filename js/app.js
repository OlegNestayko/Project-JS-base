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
        /* Вывод  информация о сотруднике в консоль */
        tellAboutYourSelf: function () {
          console.log(
            `My name is ${this.name} and I'm ${this.position}. I earn ${this.salary})))`
          );
        },
      };
      this.employees.push(employee);
    }
  },
  /*Добавляем сотруднику зп согласно его должности*/
  setSalary: function () {
    for (let i = 0; i < this.employees.length; i += 1) {
      const member = this.employees[i];
      let salary;
      if (member.position.toLowerCase().indexOf("junior") == 0) {
        salary = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
      } else if (member.position.toLowerCase().indexOf("middle") == 0) {
        salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
      } else if (member.position.toLowerCase().indexOf("senior") == 0) {
        salary = Math.floor(Math.random() * (3000 - 2500 + 1) + 2500);
      } else {
        salary = Math.floor(Math.random() * (4500 - 4000 + 1) + 4000);
      }
      member.salary = salary;
    }
  },
  /* Вывод информации о сотрудниках команды */
  showTeam: function () {
    for (let i = 0; i < this.employees.length; i += 1) {
      const member = this.employees[i];
      console.log(`${member.name}-${member.position}.Salary-${member.salary}.`);
    }
  },
};

team.createTeam();
team.setSalary();
for (let i = 0; i < team.employees.length; i += 1) {
  team.employees[i].tellAboutYourSelf();
}
team.showTeam();
