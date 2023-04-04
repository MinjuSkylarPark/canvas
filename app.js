// html에서 캔버스를 그렸고 
const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")
// css에서 설정해줬던 사각형의 크기를 자바스크립트에서도 설정해준다 
canvas.width=800;
canvas.height=800;

context.lineWidth=2

const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
    "#7d5fff"
]


function onClick(event){
     context.beginPath();
     context.moveTo(10,10)
    //  상단에서 지정해준 컬러색깔을 무작위로 뽑아낸다음 Math.floor로 묶어 반올림시켬
     const color = colors[Math.floor(Math.random()*colors.length)]
     context.strokeStyle= color;
     context.lineTo(event.offsetX, event.offsetY)
     context.stroke();
}
canvas.addEventListener("mousemove",onClick)

