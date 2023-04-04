// html에서 캔버스를 그렸고 
const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")
// css에서 설정해줬던 사각형의 크기를 자바스크립트에서도 설정해준다 
canvas.width=800;
canvas.height=800;

context.lineWidth=2
let isPainting = false;

function Moveto(event){
    if(isPainting){
        context.lineTo(event.offsetX, event.offsetY);
        context.stroke();
        return;   
    }
    //유저가 마우스를 캔버스에 올리면 자스는 곧장 마우스가 있는 곳으로 브러쉬를 옮긴다 
    context.moveTo(event.offsetX,event.offsetY)
}

//유저가 마우스를 움직이고 isPainting이 True일 때 그리도록 한다 
function Mdown(){
    isPainting = true
}

//isPainting이 false이면 캔버스에서 연필을 움직이기만할거고 
//여기서 트랙패드에서 손가락 왔다갔다 - 클릭감지 구분한단거 
function Mup(){
    isPainting = false
}

canvas.addEventListener("mousemove",Moveto)
canvas.addEventListener("mousedown",Mdown)
canvas.addEventListener("mouseup",Mup)