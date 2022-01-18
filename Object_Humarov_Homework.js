/*

function Worker(Name,Surname,Salary,WorkingHours){
if(!new.target){
return new Worker()
}
this.Name = 'Имя',
this.Surname = 'Фамилия',
this.Position = 'Должность',
this.Salary = 0,
this.WorkingHours = 0
}



const WorkerNumber1863 = new Worker(/!*'Александр','Петров','Инженер-технолог',15000,40*!/)
WorkerNumber1863.Name = 'Александр'
WorkerNumber1863.Surname = 'Петров'
WorkerNumber1863.Position = 'Инженер-технолог'
WorkerNumber1863.Salary = 15000
WorkerNumber1863.WorkingHours = 40

const WorkerNumber1864 = new Worker(/!*'Владимир','Дубов','Инженер-конструктор',15000,40*!/)
WorkerNumber1864.Name = 'Владимир'
WorkerNumber1864.Surname = 'Дубов'
WorkerNumber1864.Position = 'Инженер-конструктор'
WorkerNumber1864.Salary = 15000
WorkerNumber1864.WorkingHours = 40


const WorkerNumber1865 = new Worker(/!*'Виталий','Зенцов','Мастер сборочного участка',13000,50*!/)
WorkerNumber1865.Name = 'Виталий'
WorkerNumber1865.Surname = 'Зенцов'
WorkerNumber1865.Position = 'Мастер сборочного участка'
WorkerNumber1865.Salary = 13000
WorkerNumber1865.WorkingHours = 50


const WorkerNumber1866 = new Worker(/!*'Юрий','Краснов','Главный-механик',17000,72*!/)
WorkerNumber1866.Name = 'Юрий'
WorkerNumber1866.Surname = 'Краснов'
WorkerNumber1866.Position = 'Главный-механик'
WorkerNumber1866.Salary = 17000
WorkerNumber1866.WorkingHours = 72

*/



/*Классы*/


class Workers {
    constructor(Name,Surname,Position,Salary,WorkingHours) {
        this.Name = Name;
        this.Surname = Surname;
        this.Position = Position;
        this.Salary = Salary;
        this.WorkingHours = WorkingHours;
    }
}

const person1234 = new Workers('Алексей','Алексеев','Оператор-ЧПУ',15000,72)
const person1235 = new Workers('Владимир','Табуреткин','Слесарь',14000,64);






console.log(person1234)
console.log(person1235)


