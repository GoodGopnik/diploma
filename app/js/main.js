// $(function(){



  
// });
// document.querySelector('#elastic').oninput = function () {
//     let val = this.value.trim();
//     let elasticItems = document.querySelectorAll('.img-Admission p');
//     if (val != '') {
//         elasticItems.forEach(function (elem) {
//             if (elem.innerText.search(val) == -1) {
//                 elem.classList.add('hide');
//                 elem.innerHTML = elem.innerText;
//             }
//             else {
//                 elem.classList.remove('hide');
//                 let str = elem.innerText;
//                 elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
//             }
//         });
//     }
//     else {
//         elasticItems.forEach(function (elem) {
//             elem.classList.remove('hide');
//             elem.innerHTML = elem.innerText;
//         });
//     }
// }

// function insertMark(string, pos, len) {
//     // hello world
//     // hello <mark>wo</mark>rld
//     // hello+<mark>+wo+</mark>+rld
//     return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
// }
async function dataAdd () {
    const url = `http://127.0.0.1:3005/new` //Получаем имя сервера
    const response = await fetch(url) //Вызываем асинхронний заспрос
    const resault = await response.json() //Переабразовываем в формат json
    const text1 = document.getElementById ('text1')
    const text2 = document.getElementById ('text2')
    const text3 = document.getElementById ('text3')
    const text4 = document.getElementById ('text4')
    const text5 = document.getElementById ('text5')
    const text6 = document.getElementById ('text6')
    const text7 = document.getElementById ('text7')
    const text8 = document.getElementById ('text8')
    const text9 = document.getElementById ('text9')
    const text10 = document.getElementById ('text10')
    const text11 = document.getElementById ('text11')
    const text12 = document.getElementById ('text12')
    const text13 = document.getElementById ('text13')
    const text14 = document.getElementById ('text14')
    const button = document.getElementById ('button')

    let key //создание переменной для цикла
    for(key in resault) {  //создали цикл и вставили туда объект по чьим свойствам мы пройдемся. Сам цикл for..in

    let newElem = document.createElement ('div')
        
    newElem.innerHTML = `
        <a data-fancybox="gallery" href="/img/season/620501.png">
        <img src="./img/season/620501.png" alt="" id="img1"></a>
        <p>${resault[key].title}</p>
        <p>${resault[key].id}</p>
        `
        text1.insertAdjacentElement('afterend', newElem)
        text2.insertAdjacentElement('afterend', newElem)
    }  
    for(key in resault) {  //создали цикл и вставили туда объект по чьим свойствам мы пройдемся. Сам цикл for..in

        let newElem = document.createElement ('div')
            
        newElem.innerHTML = `
            <a data-fancybox="gallery" href="/img/season/620501.png">
            <img src="./img/season/620501.png" alt="" id="img1"></a>
            <p>${resault[key].title}</p>
            <p>${resault[key].id}</p>
            `
            text3.insertAdjacentElement('afterend', newElem)
            text4.insertAdjacentElement('afterend', newElem)
        }  
        for(key in resault) {  //создали цикл и вставили туда объект по чьим свойствам мы пройдемся. Сам цикл for..in

            let newElem = document.createElement ('div')
                
            newElem.innerHTML = `
                <a data-fancybox="gallery" href="/img/season/620501.png">
                <img src="./img/season/620501.png" alt="" id="img1"></a>
                <p>${resault[key].title}</p>
                <p>${resault[key].id}</p>
                `
                text5.insertAdjacentElement('afterend', newElem)
                text6.insertAdjacentElement('afterend', newElem)
            }  
    button.onclick = function () {
        for(key in resault) {  //создали цикл и вставили туда объект по чьим свойствам мы пройдемся. Сам цикл for..in

            let newElem = document.createElement ('div')
                
            newElem.innerHTML = `
                <a data-fancybox="gallery" href="/img/season/620501.png">
                <img src="./img/season/620501.png" alt="" id="img1"></a>
                <p>${resault[key].title}</p>
                <p>${resault[key].id}</p>
                `
                text7.insertAdjacentElement('afterend', newElem)
                text8.insertAdjacentElement('afterend', newElem)
            }  
            for(key in resault) {  //создали цикл и вставили туда объект по чьим свойствам мы пройдемся. Сам цикл for..in

                let newElem = document.createElement ('div')
                    
                newElem.innerHTML = `
                    <a data-fancybox="gallery" href="/img/season/620501.png">
                    <img src="./img/season/620501.png" alt="" id="img1"></a>
                    <p>${resault[key].title}</p>
                    <p>${resault[key].id}</p>
                    `
                    text9.insertAdjacentElement('afterend', newElem)
                    text10.insertAdjacentElement('afterend', newElem)
                } 
                for(key in resault) {  //создали цикл и вставили туда объект по чьим свойствам мы пройдемся. Сам цикл for..in

                    let newElem = document.createElement ('div')
                        
                    newElem.innerHTML = `
                        <a data-fancybox="gallery" href="/img/season/620501.png">
                        <img src="./img/season/620501.png" alt="" id="img1"></a>
                        <p>${resault[key].title}</p>
                        <p>${resault[key].id}</p>
                        `
                        text11.insertAdjacentElement('afterend', newElem)
                        text12.insertAdjacentElement('afterend', newElem)
                    } 
                    for(key in resault) {  //создали цикл и вставили туда объект по чьим свойствам мы пройдемся. Сам цикл for..in

                        let newElem = document.createElement ('div')
                            
                        newElem.innerHTML = `
                            <a data-fancybox="gallery" href="/img/season/620501.png">
                            <img src="./img/season/620501.png" alt="" id="img1"></a>
                            <p>${resault[key].title}</p>
                            <p>${resault[key].id}</p>
                            `
                            text13.insertAdjacentElement('afterend', newElem)
                            text14.insertAdjacentElement('afterend', newElem)
                        } 
    }

}      
dataAdd() 