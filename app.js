// html에서 캔버스를 그렸고 
const canvas = document.querySelector("canvas")
//html에서 그린캔버스내부를 컨텍스트로 채워준다
// 자바스크립트 캔버스 2d구현을위해 필요한 기능
// 여기서 context는 '붓'이다 
const context = canvas.getContext("2d")

// css에서 설정해줬던 사각형의 크기를 자바스크립트에서도 설정해준다 
canvas.width=800;
canvas.height=800;

// 여기다가는 집짓기를 할건데 천장하고 문짝을 만들어보자 
// 이제 여기에 문짝을 하나 만들어보자 
context.fillRect(200,200,50,200);
context.fillRect(400,200,50,200)
// 여기서 linewidth는 지붕과 문에 적용된다 
context.lineWidth = 3

// 문짝
context.fillRect(300,300,50,100)
//지붕
context.fillRect(200,200,200,10)
// 이제 우리의 연필은 xy축에서 200 200씩 떨어진 지점에 있을 것이다 
context.moveTo(200,200)
//그리고 이제 우린 여기에 엄청 높은지붕을 만들것이다 
// x y축과 적절하게 떨어진 지점을 계산해서 지붕을 만들었다
context.lineTo(325,100);
context.lineTo(450,200)
//엄청 강력한 집이가 생성되었다 뙇 
context.fill();


