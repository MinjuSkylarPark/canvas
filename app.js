// html에서 캔버스를 그렸고 
const canvas = document.querySelector("canvas")
//html에서 그린캔버스내부를 컨텍스트로 채워준다
// 자바스크립트 캔버스 2d구현을위해 필요한 기능
// 여기서 context는 '붓'이다 
const context = canvas.getContext("2d")

// css에서 설정해줬던 사각형의 크기를 자바스크립트에서도 설정해준다 
canvas.width=900;
canvas.height=900;

// context.beginPath();
context.rect(50,50,100,100);
context.rect(150,150,100,100)
context.rect(250,250,100,100)
context.fillStyle="blue";
context.fill();
// context.beginPath();
context.rect(350,350,100,100)
context.fillStyle="pink"
// context.fill();

setTimeout(() => {
    context.fill();
}, 5000);


