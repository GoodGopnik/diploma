// $(function(){



  
// });
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

    const key = []
    const key1 = []
    for (let i = 0; i < resault.length; i++) {
    if (resault[i].id === "1") {
        key.push(resault[i].title) 
    }
}
    for (let i = 0; i < resault.length; i++) {
        if (resault[i].id === "1") {
            key1.push(resault[i].budget)
        }
    }
    let newElem = document.createElement ('div')
    newElem.innerHTML = `
        <a data-fancybox="gallery" href="/img/season/620501.png">
        <img src="./img/season/620501.png" alt="" id="img1"></a>
        <p>${key}</p>
        <p>${key1}</p>
        `
        text1.insertAdjacentElement('afterend', newElem)
        text2.insertAdjacentElement('afterend', newElem)
     
     {  
        let newElem = document.createElement ('div')    
        newElem.innerHTML = `
        <a data-fancybox="gallery" href="/img/season/620501.png">
        <img src="./img/season/620501.png" alt="" id="img1"></a>
        <p>${key}</p>
        <p>${key1}</p>
            `
        text3.insertAdjacentElement('afterend', newElem)
        text4.insertAdjacentElement('afterend', newElem)
        }  
        {  
        let newElem = document.createElement ('div')
                
        newElem.innerHTML = `
        <a data-fancybox="gallery" href="/img/season/620501.png">
        <img src="./img/season/620501.png" alt="" id="img1"></a>
        <p>${key}</p>
        <p>${key1}</p>
            `
        text5.insertAdjacentElement('afterend', newElem)
        text6.insertAdjacentElement('afterend', newElem)
            }  
    button.onclick = function () {
        {  
        let newElem = document.createElement ('div')
                
        newElem.innerHTML = `
        <a data-fancybox="gallery" href="/img/season/620501.png">
        <img src="./img/season/620501.png" alt="" id="img1"></a>
        <p>${key}</p>
        <p>${key1}</p>
            `
        text7.insertAdjacentElement('afterend', newElem)
        text8.insertAdjacentElement('afterend', newElem)
            }  
            {  
        let newElem = document.createElement ('div')
                    
        newElem.innerHTML = `
        <a data-fancybox="gallery" href="/img/season/620501.png">
        <img src="./img/season/620501.png" alt="" id="img1"></a>
        <p>${key}</p>
        <p>${key1}</p>
            `
        text9.insertAdjacentElement('afterend', newElem)
        text10.insertAdjacentElement('afterend', newElem)
                } 
                {  

        let newElem = document.createElement ('div')
                        
        newElem.innerHTML = `
        <a data-fancybox="gallery" href="/img/season/620501.png">
        <img src="./img/season/620501.png" alt="" id="img1"></a>
        <p>${key}</p>
        <p>${key1}</p>
            `
        text11.insertAdjacentElement('afterend', newElem)
        text12.insertAdjacentElement('afterend', newElem)
                    } 
                    {  
        let newElem = document.createElement ('div')      
        newElem.innerHTML = `
        <a data-fancybox="gallery" href="/img/season/620501.png">
        <img src="./img/season/620501.png" alt="" id="img1"></a>
        <p>${key}</p>
        <p>${key1}</p>
            `
        text13.insertAdjacentElement('afterend', newElem)
        text14.insertAdjacentElement('afterend', newElem)
                        } 
    }
}      
dataAdd() 