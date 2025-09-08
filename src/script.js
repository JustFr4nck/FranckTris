let arr = [];

let p1 = true;
let p2 = false;

const p1Img = `<img class="pImgStyle" src="../public/images/cat.png"></img>`;
const p2Img = `<img src="../public/images/dog.png"></img>`;

for(let i = 0; i < 9; i++){

    arr[i] = document.getElementById("cel" + (i + 1));
}


function putOnClick(){

    if(p1 === true){

        arr[1].innerHTML = p1Img;

    }
    else{

    }

}

putOnClick();