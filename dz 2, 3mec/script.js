
const button = document.getElementById('myButton');

        button.addEventListener('click', function() {
            console.log("Начало");
            
            setTimeout(() => {
                console.log("2 секунды прошло");
            }, 2000);
            
           
            setTimeout(() => {
                console.log("3 секунды прошло");
            }, 3000);

            setTimeout(() => {
                console.log("4 секунды прошло");
            }, 4000);
        });

        //доп ДЗ

         const mybutton = document.getElementById('myButton');

         let intervalId;

         button.addEventListener('click', function() {
             console.log("Начало работы");
             
             setTimeout(() => {
                 console.log("Прошла 1 секунда");
             }, 1000);
             
             intervalId = setInterval(() => {
                 console.log("Прошло еще 2 секунды");
             }, 2000);
             
             setTimeout(() => {
                 console.log("Прошло 10 секунд");
                 clearInterval(intervalId); 
             }, 10000);
            });

