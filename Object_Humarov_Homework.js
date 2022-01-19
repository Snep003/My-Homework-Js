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




*/



/*Классы*/


class Workers {
    #Account
    constructor(Name ='',Surname = '',Position = '',Salary =0,WorkingHours = 0,Account = '') {

        this.Name = Name;
        this.Surname = Surname;
        this.Position = Position;
        this.Salary = Salary;
        this.WorkingHours = WorkingHours;
        this.#Account = Account;
        // добавил типа учентую запись ИТР работников предприятия
        // Аккаунт учетной записи имеет шаблон имя латиницей+точка+фамилия латиницей
        // +дефиз+инициалы предприятия(DAZ Днепровский агрегатный завод)

        // метод
        this.setAccount = function (Account){
            if (/^[a-zA-Z]{2,15}.[a-zA-Z]{2,15}-DAZ$/.test(Account))
            {this.#Account = Account}
            else {throw new Error('Неверные данные входа')}

        }
        this.getAccount = function (){
            return this.#Account
        }

    }
}

/*
const person1234 = new Workers('Алексей','Алексеев','Оператор-ЧПУ',15000,72)
const person1235 = new Workers('Владимир','Табуреткин','Слесарь',14000,64);

*/

const person1234 = new Workers()
Object.freeze(person1234)


try{
    person1234.setAccount('humarov.alexandr-daz')
    console.log(person1234)
} catch (er){
    console.log('Попытка входа 1 '+er.message)
}


try{
    person1234.setAccount('humarov alexandr-daz')
    console.log(person1234)
} catch (er){
    console.log('Попытка входа 2 '+er.message)
}


try{
    person1234.setAccount('humarov.alexandr-DAZ')
    console.log(person1234)
} catch (er){
    console.log('Попытка входа 3 '+er.message)
}



/*
console.log(person1234)
console.log(person1235)
*/


