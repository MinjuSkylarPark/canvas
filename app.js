// html에서 캔버스를 그렸고 

const canvas = document.querySelector("canvas")

// 자바스크립트 캔버스 2d구현을위해 필요한 기능
// 여기서 context는 '붓'이다 
const context = canvas.getContext("2d")

// css에서 설정해줬던 사각형의 크기를 자바스크립트에서도 설정해준다 

canvas.width=800;
canvas.height=800;

//그림판위에그린 사각형의 축을기준으로 사각형내의 색깔을 채운다 

//이게 무슨뜻이냐면 캔버스의 사각형크기를 기준으로 x축과 y축을 기준으로 
//각각 50씩 이동하라는 뜻이고 그 안에 가로길이 100 세로길이 200의
//사각형을 그려라 - 라고 오더를 내려준거다 


context.fillRect(50,50,100,200);


