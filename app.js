// html에서 캔버스를 그렸고 
const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")
// css에서 설정해줬던 사각형의 크기를 자바스크립트에서도 설정해준다 
canvas.width=800;
canvas.height=800;

context.lineWidth=2

function onClick(event){
     context.lineTo(event.offsetX, event.offsetY)
     context.stroke();
}
canvas.addEventListener("click",onClick)

