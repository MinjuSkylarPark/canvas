// html에서 캔버스를 그렸고 
const canvas = document.querySelector("canvas")
//html에서 그린캔버스내부를 컨텍스트로 채워준다
// 자바스크립트 캔버스 2d구현을위해 필요한 기능
// 여기서 context는 '붓'이다 
const context = canvas.getContext("2d")

// css에서 설정해줬던 사각형의 크기를 자바스크립트에서도 설정해준다 
canvas.width=800;
canvas.height=800;

//캔버스위에서 움직일 페인팅브러쉬를 만들어줄 것이다 
//x y로부터 페인팅브러쉬를 움직여 캔버스위에 선을 긋는 것이다 
context.moveTo(50,50)
// x좌표로부터 150떨어진지점으로 이동하고 y축은 그대로 두어 선을 그려보자 
context.lineTo(150,50)
context.stroke();



