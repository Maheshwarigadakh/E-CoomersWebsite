const sliderImg = [
    "./images/main1.jpg",
    "./images/main2.jpg",
    "./images/main3.jpg",
    "./images/main4.jpg"
];
let imgIndx = 0;

function prev(){
    if(imgIndx == 0){
        imgIndx = sliderImg.length - 1;
    }
    else{
        imgIndx--;
    }
    const imgElement = document.getElementById('img');
    imgElement.src = sliderImg[imgIndx]
}

function next(){
    if(imgIndx == sliderImg.length - 1){
        imgIndx = 0;
    }
    else{
        imgIndx++;
    }
    const imgElement = document.getElementById('img');
    imgElement.src = sliderImg[imgIndx]
}
setInterval(next , 1500);