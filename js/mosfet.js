var camera, scene, renderer;
var cameraControls, effectController;
var clock = new THREE.Clock();
var gridX = false;
var gridY = false;
var gridZ = false;
var axes = false;
var ground = false;

function init() {
	var canvasWidth = window.innerWidth;
	var canvasHeight = window.innerHeight;
	var canvasRatio = canvasWidth/canvasHeight;

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.gammaInput = true;
	renderer.gammaOutput = true;
	renderer.setSize(canvasWidth, canvasHeight);
	renderer.setClearColor( 0xAAAAAA );

	// CAMERA
	camera = new THREE.PerspectiveCamera( 45, canvasRatio, 1, 40000 );
	// CONTROLS
	cameraControls = new THREE.OrbitAndPanControls(camera, renderer.domElement);

	camera.position.set( -780, 960, -960 );
	cameraControls.target.set(4,301,92);

	fillScene();
}


function createSupport() {
    var azulEscuro = new THREE.MeshLambertMaterial({color: 0x2F34AC});
    var azulClaro = new THREE.MeshLambertMaterial({color: 0x6DCEDB});
    var verdeMusgo = new THREE.MeshLambertMaterial({color: 0x5BAF8F});
    var marrom = new THREE.MeshLambertMaterial({color: 0x1D1C1B});
    var bege = new THREE.MeshLambertMaterial({color: 0xD0D26D});
    var vermelho = new THREE.MeshLambertMaterial({color: 0x9A2514});

    //criando parte A do bloco azul escuro
    var cube = new THREE.Mesh(new THREE.CubeGeometry(690, 150, 200), azulEscuro);
    cube.position.x = 0;
    cube.position.y = 0;
    cube.position.z = 0;
    scene.add(cube);

    //criando a parte B do bloco azul escuro
    cube = new THREE.Mesh(new THREE.CubeGeometry(50, 60, 200), azulEscuro);
    cube.position.x = -320;
    cube.position.y = 105;
    cube.position.z = 0;
    scene.add(cube);

    //criando a parte B do bloco azul escuro
    cube = new THREE.Mesh(new THREE.CubeGeometry(50, 60, 200), azulEscuro);
    cube.position.x = 320;
    cube.position.y = 105;
    cube.position.z = 0;
    scene.add(cube);

    //criando a parte D do bloco azul escuro
    cube = new THREE.Mesh(new THREE.CubeGeometry(150, 40, 200), azulEscuro);
    cube.position.x = 0;
    cube.position.y = 95;
    cube.position.z = 0;
    scene.add(cube);

    //criando a parte A do bloco azul claro
    cube = new THREE.Mesh(new THREE.CubeGeometry(20, 60, 200), azulClaro);
    cube.position.x = -285;
    cube.position.y = 105;
    cube.position.z = 0;
    scene.add(cube);

    //criando a parte B do bloco azul claro
    cube = new THREE.Mesh(new THREE.CubeGeometry(20, 60, 200), azulClaro);
    cube.position.x = 285;
    cube.position.y = 105;
    cube.position.z = 0;
    scene.add(cube);

    //criando a parte C do bloco azul claro
    cube = new THREE.Mesh(new THREE.CubeGeometry(20, 60, 200), azulClaro);
    cube.position.x = -85;
    cube.position.y = 105;
    cube.position.z = 0;
    scene.add(cube);

    //criando a parte D do bloco azul claro
    cube = new THREE.Mesh(new THREE.CubeGeometry(20, 60, 200), azulClaro);
    cube.position.x = 85;
    cube.position.y = 105;
    cube.position.z = 0;
    scene.add(cube);

    //criando a parte E do bloco azul claro
    cube = new THREE.Mesh(new THREE.CubeGeometry(180, 20, 200), azulClaro);
    cube.position.x = -185;
    cube.position.y = 85;
    cube.position.z = 0;
    scene.add(cube);

    //criando a parte F do bloco azul claro
    cube = new THREE.Mesh(new THREE.CubeGeometry(180, 20, 200), azulClaro);
    cube.position.x = 185;
    cube.position.y = 85;
    cube.position.z = 0;
    scene.add(cube);

    //criando a parte G do bloco azul claro
    cube = new THREE.Mesh(new THREE.CubeGeometry(150, 20, 200), azulClaro);
    cube.position.x = 0;
    cube.position.y = 125;
    cube.position.z = 0;
    scene.add(cube);

    //criando a parte A do bloco verde musgo
    cube = new THREE.Mesh(new THREE.CubeGeometry(180, 40, 200), verdeMusgo);
    cube.position.x = -185;
    cube.position.y = 115;
    cube.position.z = 0;
    scene.add(cube);

    //criando a parte B do bloco verde musgo
    cube = new THREE.Mesh(new THREE.CubeGeometry(180, 40, 200), verdeMusgo);
    cube.position.x = 185;
    cube.position.y = 115;
    cube.position.z = 0;
    scene.add(cube);

    //criando a parte A do bloco Marrom
    cube = new THREE.Mesh(new THREE.CubeGeometry(100, 50, 200), marrom);
    cube.position.x = -185;
    cube.position.y = 160;
    cube.position.z = 0;
    scene.add(cube);

    //criando a parte B do bloco Marrom
    cube = new THREE.Mesh(new THREE.CubeGeometry(100, 50, 200), marrom);
    cube.position.x = 185;
    cube.position.y = 160;
    cube.position.z = 0;
    scene.add(cube);

    //criando a parte A do bloco bege
    cube = new THREE.Mesh(new THREE.CubeGeometry(110, 20, 200), bege);
    cube.position.x = -290;
    cube.position.y = 145;
    cube.position.z = 0;
    scene.add(cube);

    //criando a parte B do bloco bege
    cube = new THREE.Mesh(new THREE.CubeGeometry(110, 20, 200), bege);
    cube.position.x = 290;
    cube.position.y = 145;
    cube.position.z = 0;
    scene.add(cube);

    //criando a parte C do bloco bege
    cube = new THREE.Mesh(new THREE.CubeGeometry(270, 20, 200), bege);
    cube.position.x = 0;
    cube.position.y = 145;
    cube.position.z = 0;
    scene.add(cube);

    //criando o bloco vermelho
    cube = new THREE.Mesh(new THREE.CubeGeometry(190, 50, 200), vermelho);
    cube.position.x = 0;
    cube.position.y = 180;
    cube.position.z = 0;
    scene.add(cube);
}
function createMosfet() {
	createSupport();
}

function fillScene() {
	// SCENE
	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0x808080, 3000, 6000 );
	// LIGHTS
	var ambientLight = new THREE.AmbientLight( 0x222222 );
	var light = new THREE.DirectionalLight( 0xffffff, 1.0 );
	light.position.set( 200, 400, 500 );

	var light2 = new THREE.DirectionalLight( 0xffffff, 1.0 );
	light2.position.set( -400, 200, -300 );

	scene.add(ambientLight);
	scene.add(light);
	scene.add(light2);

	scene.add(camera);

	if (ground) {
		Coordinates.drawGround({size:1000});
	}
	if (gridX) {
		Coordinates.drawGrid({size:1000,scale:0.01});
	}
	if (gridY) {
		Coordinates.drawGrid({size:1000,scale:0.01, orientation:"y"});
	}
	if (gridZ) {
		Coordinates.drawGrid({size:1000,scale:0.01, orientation:"z"});
	}
	if (axes) {
		Coordinates.drawAllAxes({axisLength:300,axisRadius:2,axisTess:50});
	}
	createMosfet();
}
//
function addToDOM() {
    var container = document.getElementById('container');
    var canvas = container.getElementsByTagName('canvas');
    if (canvas.length>0) {
        container.removeChild(canvas[0]);
    }
    container.appendChild( renderer.domElement );
}

function animate() {
	window.requestAnimationFrame(animate);
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	if ( effectController.newGridX !== gridX || effectController.newGridY !== gridY || effectController.newGridZ !== gridZ || effectController.newGround !== ground || effectController.newAxes !== axes)
	{
		gridX = effectController.newGridX;
		gridY = effectController.newGridY;
		gridZ = effectController.newGridZ;
		ground = effectController.newGround;
		axes = effectController.newAxes;

		fillScene();
	}
	renderer.render(scene, camera);
}

function setupGui() {

	effectController = {

		newGridX: gridX,
		newGridY: gridY,
		newGridZ: gridZ,
		newGround: ground,
		newAxes: axes,
	};


}

$(document).ready(function() {
	init();
	setupGui();
	addToDOM();
	animate();
});
