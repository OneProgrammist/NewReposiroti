// console.log("Тестовое сообщение")
// alert() сообщение
// confirm() вопрос с выбором варианта ответа 
// prompt() Вопрос с водом данных  
// typeof() тип
// вид конкотенации только с косыми ковычками 'Тест/${Переменная}/продолжение текста';
// вид конкотенации  Тест/"+"Переменная"+"/продолжение текста;
// Коментарий на Ctr+/ 
// let test = 3; test++; test = 4 иди test--; test = 2;
// оперратор и = && , оператор или = || , оператор не = !
// Не равенство <> или !=

////////////////////////////GIT//////////////////
//Инициализация GIT            ----- git init
//Установка локальных данных ------- git config --local user.name "Andrei"
//Установка глобальных данных ------ git config --global user.name "Andrei"
/////////Статусы GIT////////////////
// 1 - фиксация созданного файла 
// 2 - фиксация за определенными файлами
// 3 - фиксация контрольной точки или коммит
// Проверка статуса ----------git status
// добавить файлы в git ------git add -A
// Перевод файлов в статус 3 -----git commit -a -m"Name failes"
// список коммитов (статус 3) ----git log
// создание связи репозитория с Visual через команду на сайте git hub ---
//--git remote add origin https://github.com/OneProgrammist/project.git
//добавление данных в репозиторий ---git push -u origin master

//alert("тестовый текст");

// let rezul = "";

// first: for ( let i = 1;i<7;i++){
//     console.log(`Первый уровень: ${i}`);
//     for (let j = 1;j<i;j++){
//         rezul += "*";
//         if (j ===2) continue first;
//         console.log(`Второй уровень: ${j}`);
//     }
//     rezul += "\n";
// }

// console.log(rezul);


// const calc = (a,b) => {return a+b} ;

let bak = {
    name: 'test',
    lang: 23,
    colors: {
        one: 'back',
        two: 'red'
    }
};

for (let key in bak){

    if (typeof(bak[key]) === 'object'){
        for (let i in bak[key]){
            console.log(`это ключ ${i} и его значение ${bak[key][i]}`);
        }
    } else {
    console.log(`это ключ ${key} и значение ${bak[key]}`);
    }
}

console.log(bak);