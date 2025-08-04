
//JS for assignment 2


//audio

let audiowhenclicked = new Audio("audio/insect-buzz-mic-close-ambient-house-317411.mp3");


//Button for sub-topics
//assign variables to affected content
const main1 = document.querySelector('#MTB1'); //1st btn
const main2 = document.querySelector('#MTB2'); //2nd btn
const main3 = document.querySelector('#MTB3'); //3rd btn


//link the content to the buttons


function hideall(){ //function to hide all pages
// for(let onepage of allpages){ //go through all subtopic pages
// onepage.style.display="none"; //hide it
// }

//manually key in to hide all pages
document.querySelector('#BIntro').style.display = "none";
document.querySelector('#BSpeciesRoles').style.display = "none";
document.querySelector('#BEcosystem').style.display = "none";

}


// function show(pgno){ //function to show selected page no
// hideall();
// //select the page based on the parameter passed in
// let onepage=document.querySelector("#BText"+pgno);
// onepage.style.display="block"; //show the page
// }
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
main1.addEventListener("click", function() {
    hideall();
    
    audiowhenclicked.play();
    document.querySelector('#BIntro').style.display = "block";
});
main2.addEventListener("click", function () {
    hideall();

    audiowhenclicked.play();
    document.querySelector('#BSpeciesRoles').style.display = "block";
});
main3.addEventListener("click", function () {
    hideall();

    audiowhenclicked.play();
   document.querySelector('#BEcosystem').style.display = "block";
});
hideall();


//button for facts


function Facthide(){
    document.querySelector('#F1T').style.display = "none";
    document.querySelector('#F2T').style.display = "none";
    document.querySelector('#F3T').style.display = "none";

}



let Fact1 = document.querySelector('#FCT1');
let Fact2 = document.querySelector('#FCT2');
let Fact3 = document.querySelector('#FCT3');



Fact1.addEventListener("click", function() {
    Facthide();
    document.querySelector('#F1T').style.display = "block";

    //change color
    document.querySelector('#FCT1').classList.add("ChangeBg");
    document.querySelector('#FCT2').classList.remove("ChangeBg");
    document.querySelector('#FCT3').classList.remove("ChangeBg");
});


Fact2.addEventListener("click", function () {
    Facthide();
    document.querySelector('#F2T').style.display = "block";

    document.querySelector('#FCT2').classList.add("ChangeBg");
    document.querySelector('#FCT1').classList.remove("ChangeBg");
    document.querySelector('#FCT3').classList.remove("ChangeBg");
});


Fact3.addEventListener("click", function () {
    Facthide();
   document.querySelector('#F3T').style.display = "block";

    document.querySelector('#FCT3').classList.add("ChangeBg");
    document.querySelector('#FCT2').classList.remove("ChangeBg");
    document.querySelector('#FCT1').classList.remove("ChangeBg");
});
Facthide();




//Mini game


//Get variables first


let BEE=document.querySelector('#beeingame');
let FLOWER=document.querySelector('#flower');

let btnleft = document.querySelector('#Left');
let btnright = document.querySelector('#Right');

//Position of the images

//Bee
let BX;


//Flower
var FX;


//set X only for bee
BX=100;

//set location
BEE.style.left=BX+"px";

//button to go left
btnleft.disabled = true;
btnright.disabled = true;

btnleft.addEventListener("click",function(){
    BX=BX-30;

    BEE.style.left=BX+"px";

    if(BX<0){
        BX=0;
        BEE.style.left=BX+"px";
    }

    collision();
});
//flower 12.5
//bee 19

//button to go right
btnright.addEventListener("click",function(){
    BX=BX+30;

    BEE.style.left=BX+"px";
    if(BX>400){
        BX=400;
        BEE.style.left=BX+"px";
    }


    collision();
    
});


let flowerbutton = document.querySelector("#spawnflower");
let points=0;

var checkifgamestart = false;

//start buttons
flowerbutton.addEventListener("click", function(){
    if(checkifgamestart === false){
        btnleft.disabled = false;
        btnright.disabled = false;

        checkifgamestart = true;
        spawnflower();

        flowerbutton.innerHTML = "Restart"; 
    }

    else{ //restart logic
        points = 0;
        flowerbutton.innerHTML = "Start";
        BX=100;

        document.querySelector("#scorecount").innerHTML='';

         btnleft.disabled = true;
        btnright.disabled = true;

        checkifgamestart = false;

    }
    
});




function collision(){

    var flowerleft = parseInt(FLOWER.style.left); //Read the left position of the flower mathematically

    var beeleft = parseInt(BEE.style.left); //Read the left position of the bee mathematically

    let FlowerWidth = 25; //Width of the flower image in px
    let BeeWidth = 38; //Width of the bee image in px

    let Flowerright = FlowerWidth+flowerleft; //right position of the flower image
    let Beeright = BeeWidth+beeleft; //right position of the bee image

    if(Flowerright>beeleft && flowerleft<Beeright){ //check for collision between the images
        points=points+1;

        let Scorecounter = document.querySelector("#scorecount");
        Scorecounter.innerHTML = "Score:" + points;

        spawnflower(); //respawn flower

    
        if(points === 10){
            Scorecounter.innerHTML= "Nice!";
         
        }

        if(points === 20){
            Scorecounter.innerHTML = "Great!";
        }

        if(points === 30){
            Scorecounter.innerHTML = "Excellent!";
        }
    }

    

    
}


function GetFlowerX(min,max){ //rand location 
    return Math.round(Math.random() * (max-min))+min;
}




function spawnflower(){ //apply rand location to flower
    FX=GetFlowerX(0,400);

    
    FLOWER.style.left=FX+"px";

   
}







//submitting
//variables for user inputs in the feedback
let usersname = document.getElementById("username");
let radiocheck = document.querySelectorAll('.radiochecklist');
let improve = document.getElementById("Improve");

//variables for submit button and ty print
let thankuser = document.querySelector("#thankyou");
let submitbutton=document.querySelector("#submit");

submitbutton.addEventListener("click",function(){

    usersname.value = '';
    improve.value = '';

    var a = 0;
    for(a = 0; a<5; a++){
        radiocheck[a].checked = false;
    }
    
    thankuser.innerHTML = "Thanks for your feedback!";



});



// console.log("player:",beeleft, "-", Beeright);
// console.log("enemy:", flowerleft, "-", Flowerright);
// console.log("Flower.style.left:", FLOWER.style.left)






