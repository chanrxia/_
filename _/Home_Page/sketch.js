function drop() {
	document.getElementById("dropdown-contents").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches('.fas fa-bars')) {
		var dropdown = document.getElementsByClassName("dropdown-contents");
		var i;
		for (i = 0; i < dropdown.length; i++) {
			var openDropdown = dropdown[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

function draw() {
  background(2400);
}

var particles_a = [];
var particles_b = [];
var particles_c = [];
var particles_d = [];
var nums = 1600;
var noiseScale = 1400;

function setup(){
	createCanvas(2400, 2000);
	background(255, 255, 255);

	for(var i = 0; i < nums; i++){
		particles_a[i] = new Particle(random(0, .1),random(0, .1));
		particles_b[i] = new Particle(random(0, .1),random(0, .9));
		particles_c[i] = new Particle(random(0, .1), random(0, .9));
		particles_d[i] = new Particle(random(0, .1), random(0, .9));
	}
}

function draw(){
	noStroke();
	smooth();
		for(var i = 0; i < nums; i++){
		var radius = map(i,0,nums,1,1);
		var alpha = map(i,0,nums,0,110);
			//blue
		fill(135,181,255,alpha);
		particles_a[i].move(9);
		particles_b[i].display(radius);
		particles_a[i].checkEdge();
//dblue
			fill(90,129,191,alpha);
		particles_b[i].move(18);
		particles_b[i].display(radius);
		particles_b[i].checkEdge();
//mint
			fill(173,217,255,alpha);
		particles_c[i].move(13);
		particles_c[i].display(radius);
		particles_c[i].checkEdge();
			//gray
		fill(181,181,255,alpha);
		particles_d[i].move(3);
		particles_d[i].display(radius);
		particles_d[i].checkEdge();
			
			fill(138, 217, 255,alpha);
		particles_c[i].move(10);
		particles_d[i].display(radius);
		particles_d[i].checkEdge();
			
		fill(189, 195, 201,alpha);
		particles_a[i].move(8);
		particles_b[i].display(radius);
		particles_c[i].checkEdge();
	}  
}


/* //blue
fill(43, 144, 255, alpha);
particles_a[i].move();
particles_b[i].display(radius);
particles_a[i].checkEdge();


//purple
fill(160, 165, 208, alpha);
particles_b[i].move(1);
particles_b[i].display(radius);
particles_b[i].checkEdge();
//mint
fill(166, 255, 255, alpha);
particles_a[i].move(13);
particles_c[i].display(radius);
particles_c[i].checkEdge();
//gray
fill(181, 181, 255, alpha);
particles_a[i].move(.8);
particles_d[i].display(radius);
particles_c[i].checkEdge();

fill(0, 255, 204, alpha);
particles_c[i].move(19);
particles_d[i].display(radius);
particles_d[i].checkEdge(10); */



function Particle(x, y){
	this.dir = createVector(0, 0);
	this.vel = createVector(180, 80);
	this.pos = createVector(x, y);
	this.speed = 1.7;

	this.move = function(){
		var angle = noise(this.pos.x/noiseScale, this.pos.y/noiseScale)*TWO_PI*noiseScale;
		this.dir.x = cos(angle);
		this.dir.y = sin(angle);
		this.vel = this.dir.copy();
		this.vel.mult(this.speed);
		this.pos.add(this.vel);
	}

	this.checkEdge = function(){
		if(this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0){
			this.pos.x = random(20, width);
			this.pos.y = random(100, height);
		}
	}

	this.display = function(r){
		ellipse(this.pos.x, this.pos.y, r, r);
	}
}