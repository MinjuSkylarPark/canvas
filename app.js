// html에서 캔버스를 그렸고 
const canvas = document.querySelector("canvas")
//html에서 그린캔버스내부를 컨텍스트로 채워준다
// 자바스크립트 캔버스 2d구현을위해 필요한 기능
// 여기서 context는 '붓'이다 
const context = canvas.getContext("2d")

// css에서 설정해줬던 사각형의 크기를 자바스크립트에서도 설정해준다 
canvas.width=800;
canvas.height=800;

// 자 이제 사람몸뜡이를 만들어 보자
//팔1 200/200= xy축으로부터 길이 /15 굵기/ 100 길이
context.fillRect(230,200,15,100)
//팔2
context.fillRect(333,200,15,100)
//몸통-상체
context.fillRect(260,200,60,200)

// 50 50은 x축 y축 20은 대가리..사람머리의 반지름 
//작은 머리통을 만들어보자
//arc은 원을 만드는 공식같은 것이다  
//0은 원의 starting angle 2*Math.PI는 원을 끝내는 angle인 것이다 
// 2 *Math.PI는 완벽한 원을 만드는 공식같은 것인데
//이런원들 덕분에 우리는 완벽한 원을 만드는 것에 집착할 필요가 없다
//2->1.5로 바꾸면 누가 조각낸 원같이 생겨버 리게된다,,
context.arc(290,160,35,0, 2*Math.PI);
context.fill()

//사람의 눈알을 만들어볼것이다
//beginPath를 여기에 쓰는 이유는 안쓰면 원찌그러지고 난리나기때문에
//경로를 새로 설정해줘야 눈이 제대로된곳에 위치하게된다 

context.beginPath();
context.fillStyle="white"
// x y = 270 155 / 5 = 눈알크기 / 0 = 눈알모양 / 2*Math.PI 동그란 모양만드는식 
context.arc(270,155,10,1*Math.PI,2*Math.PI)
context.arc(310,155,10,1*Math.PI,2*Math.PI)
context.fill()

