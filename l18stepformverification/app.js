var getdots = document.getElementsByClassName('dot');
var getpages = document.getElementsByClassName('page');
// console.log(getpages); //HTMLCollection
var getform = document.getElementById('form');
var getprevbtn = document.getElementById('prevbtn');
var getnextbtn = document.getElementById('nextbtn');

const getresultcontainer = document.querySelector('.result-container');
var objkeys = ["email","password","firstname","lastname","dob","phone","email"];
var datas = [];

var curridx = 0;  

showpage(curridx);

function showpage(num){
    // console.log(num);

    getpages[num].style.display = "block";

    num === 0 ? getprevbtn.style.display = "none" : getprevbtn.style.display = "block";

    num === getpages.length - 1 ? getnextbtn.textContent = "Submit"  : getnextbtn.textContent = "Next";

    dotindicator(num);
}

function dotindicator(num){
    // console.log(num);

    for(var x = 0; x<getdots.length; x++){
        getdots[x].classList.remove("active");
    }


    getdots[num].classList.add("active");
}

function gonow(num){
    // console.log(num);

    // console.log(curridx);

    // if(formvalidation()){
    //     getpages[curridx].style.display = "none";

    //     curridx = curridx + num;
    //     // console.log(curridx);

    //     if(curridx >= getpages.length){
    //         getform.submit();
    //     }

    //     showpage(curridx);
    // }
    
    if(num === 1 && !formvalidation()){
        return false;
    }

    getpages[curridx].style.display = "none";

    curridx = curridx + num;
    // console.log(curridx);

    if(curridx >= getpages.length){
        // getform.submit();

        getform.style.display = "none";
        getresultcontainer.style.display = "block";

        result(datas);

        return false;
    }

    showpage(curridx);

}

function* genfun(){
    var index = 0;

    while(index < objkeys.length){
        yield index++;
    }
}

// console.log(genfun().next().value());

let gen = genfun();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

function formvalidation(){

    var valid = true;

    var getcurrinput = getpages[curridx].getElementsByTagName("input");
    // console.log(getcurrinput);
    // console.log(getcurrinput[0].value);

    for(var x=0; x < getcurrinput.length; x++){
        // console.log(getcurrinput[x].value);


        if(getcurrinput[x].value === ''){

            getcurrinput[x].classList.add('invalid');
            valid = false;

        }else{
            // getcurrinput[x].classList.remove('invalid');
            // console.log(getcurrinput[x].value);

            // console.log("gen value is = ", gen.next().value);

            // // Method 1
            // const keys = objkeys[gen.next().value];
            // // console.log(keys);

            // const values = getcurrinput[x].value;
            // const obj = {
            //     [keys] : values
            // }

            //Method 2
            // const keys = objkeys[gen.next().value];
            // const values = getcurrinput[x].value;
            // var obj = {};
            // obj[keys]  = values;

            // Method 3
            const keys = objkeys[gen.next().value];
            const values = getcurrinput[x].value;
            datas.push({[keys] : values});

            // datas.push(obj);

        }
    }


    if(valid){
        getdots[curridx].className += " done";
    }

    return valid;
}


function result(datas){
    // console.log(datas);

    getresultcontainer.innerHTML = `
        <ul>
            <li>Name : ${datas[2].firstname} ${datas[3].lastname} </li> 
            <li>Email : ${datas[0].email} </li> 
            <li>Date Of Birth : ${datas[4].dob} </li> 
            <li>Phone Number : ${datas[5].phone} </li> 
            <li>Address : ${datas[6].phone} </li> 
        </ul>

        <button type="submit" class="submit-btn" onclick="submitbtn()">Apply Now</button>
    `;
}

function submitbtn(){
    getform.submit();
}
