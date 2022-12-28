const getdisplay = document.querySelector('.display');
const getstartbtn = document.querySelector('.start');
const getpausebtn = document.querySelector('.pause');
const getresetbtn = document.querySelector('.reset');

// var hours = 0,
//     minutes = 0,
//     seconds = 0,
//     milliseconds = 0;

var [hours, minutes, seconds, milliseconds] = [0,0,0,0]; 
// console.log(milliseconds);

var setinvdisplay;

getstartbtn.addEventListener('click',starttime);
getpausebtn.addEventListener('click',pausetime);
getresetbtn.addEventListener('click',resettime);

function starttime(){
    // console.log('hay i am start time');

    // showdisplay();

    setinvdisplay = setInterval(showdisplay,100);
}

function pausetime(){
    // console.log('hay i am pause time');

    clearInterval(setinvdisplay);
}

function resettime(){
    // console.log('hay i am reset time');
}

function showdisplay(){
    // console.log('hay hay hay');

    milliseconds += 10;
    
    // console.log(milliseconds);

    if(milliseconds === 1000){
        milliseconds = 0;
        seconds++;

        if(seconds === 60){
            seconds = 0;
            minutes++;

            if(minutes == 60){
                minutes = 0;

                hours++;
            }
        }
    }
}