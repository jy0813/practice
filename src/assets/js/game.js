'use strict';

const canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var img2 = new Image();
img2.src = '../assets/img/dinosaur.png';

const dino = {
  x : 10,
  y: 200,
  width: 50,
  height : 50,
  draw() {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img2, this.x, this.y);
  }
}
dino.draw();



var img1 = new Image();
img1.src = '../assets/img/cactus.png';



class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = 'pink';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img1, this.x, this.y);
  }
  draw2() {
    ctx.font = '48px';
    ctx.strokeText('안녕하십니까리', this.x, this.y);
  }
}

var cactus = new Cactus();
var cactusAll = [];
var jumpTimer = 0;
var timer = 0;
var ani;

function animation() {  // 1초에 60번 x++ 해줘야함 
  ani = requestAnimationFrame(animation)
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //dino.x++; dino 이동 
  if(timer % 200 === 0) {
    var cactus = new Cactus(); //60 프레임마다 {장애물}을 생성하고
    cactusAll.push(cactus); // 장애물 array에 담기 
  }
  cactusAll.forEach( (a, i, array) => { 
    if(a.x < 0) {
      array.splice(i, 1)
    }
    a.x--;
    die(dino, a);
    a.draw();
  })
  if(jump == true) {
    dino.y--;
    jumpTimer++;
  }
  if (jump == false) {
    if (dino.y < 200) {
      dino.y++;
    }
  }
  if(jumpTimer > 100) {
    jump = false;
    jumpTimer = 0;
  }
  dino.draw();
}

animation();


//충돌

function die(dino, cactus) {
  var xMinus = cactus.x - (dino.x + dino.width);
  var YMinus = cactus.y - (dino.y + dino.height);
  if( xMinus < 0 && YMinus < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(ani);
  }
}


var jump = false;

document.addEventListener('keydown', function(e) {
  if (e.code === 'Space') {
    jump = true;
  }
});