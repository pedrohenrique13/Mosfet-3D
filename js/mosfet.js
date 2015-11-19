var camera, scene, renderer;
var cameraControls, effectController;
var clock = new THREE.Clock();
var fios = true;

function init() {
	var canvasWidth = window.innerWidth;
	var canvasHeight = window.innerHeight;
	var canvasRatio = canvasWidth / canvasHeight;

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.gammaInput = true;
	renderer.gammaOutput = true;
	renderer.setSize(canvasWidth, canvasHeight);
	renderer.setClearColor( 0xFFFFFF );

	// CAMERA
	camera = new THREE.PerspectiveCamera( 45, canvasRatio, 1, 40000 );

	// CONTROLS
	cameraControls = new THREE.OrbitAndPanControls(camera, renderer.domElement);
	camera.position.set(100,750,1200);
	cameraControls.target.set(4,301,92);

	fillScene();
}

function desenharMosfet() {
    var azulEscuro = new THREE.MeshLambertMaterial({color: 0x2F34AC});
    var azulClaro = new THREE.MeshLambertMaterial({color: 0x6DCEDB, specular: 0xFFFFFF, shininess: 100, opacity: 0.9, transparent : true});
    var verdeMusgo = new THREE.MeshLambertMaterial({color: 0x5BAF8F, specular: 0xFFFFFF, shininess: 100, opacity: 0.7, transparent : true});
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
    cube = new THREE.Mesh(new THREE.CubeGeometry(180, 20, 200), azulClaro);
    cube.position.x = -185;
    cube.position.y = 85;
    cube.position.z = 0;
    scene.add(cube);

    //criando a parte D do bloco azul claro
    cube = new THREE.Mesh(new THREE.CubeGeometry(180, 20, 200), azulClaro);
    cube.position.x = 185;
    cube.position.y = 85;
    cube.position.z = 0;
    scene.add(cube);

		//criando a parte E do bloco azul claro
		cube = new THREE.Mesh(new THREE.CubeGeometry(20, 40, 200), azulClaro);
		cube.position.x = -85;
		cube.position.y = 95;
		cube.position.z = 0;
		scene.add(cube);

		//criando a parte F do bloco azul claro
		cube = new THREE.Mesh(new THREE.CubeGeometry(20, 40, 200), azulClaro);
		cube.position.x = 85;
		cube.position.y = 95;
		cube.position.z = 0;
		scene.add(cube);

    //criando a parte G do bloco azul claro
    cube = new THREE.Mesh(new THREE.CubeGeometry(190, 20, 20), azulClaro);
    cube.position.x = 0;
    cube.position.y = 125;
    cube.position.z = 90;
    scene.add(cube);

	//criando a parte H do bloco azul claro
    cube = new THREE.Mesh(new THREE.CubeGeometry(190, 20, 20), azulClaro);
    cube.position.x = 0;
    cube.position.y = 125;
    cube.position.z = -90;
    scene.add(cube);

    //criando a parte A do bloco verde musgo
    cube = new THREE.Mesh(new THREE.CubeGeometry(180, 40, 20), verdeMusgo);
    cube.position.x = -185;
    cube.position.y = 115;
    cube.position.z = 90;
    scene.add(cube);

    //criando a parte B do bloco verde musgo
    cube = new THREE.Mesh(new THREE.CubeGeometry(180, 40, 20), verdeMusgo);
    cube.position.x = 185;
    cube.position.y = 115;
    cube.position.z = 90;
    scene.add(cube);

		//criando a parte C do bloco verde musgo
		cube = new THREE.Mesh(new THREE.CubeGeometry(180, 40, 20), verdeMusgo);
		cube.position.x = -185;
		cube.position.y = 115;
		cube.position.z = -90;
		scene.add(cube);

		//criando a parte D do bloco verde musgo
		cube = new THREE.Mesh(new THREE.CubeGeometry(180, 40, 20), verdeMusgo);
		cube.position.x = 185;
		cube.position.y = 115;
		cube.position.z = -90;
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

function desenharEletrons(){
	var esferas = new THREE.MeshLambertMaterial( { color: 0x6b6b6b } );
	var deslocamentoX = -255
	var deslocamentoZ = 70;
	for(var i = 0; i < 6; i++){
		for(var j = 0; j < 8; j++){
			var sphere = new THREE.Mesh(new THREE.SphereGeometry(9, 32, 16), esferas);
			sphere.position.x = deslocamentoX;
			sphere.position.y = 123;
			sphere.position.z = deslocamentoZ;
			scene.add( sphere );
			deslocamentoX += 20;
		}
		deslocamentoX = -245;
		for(j = 0; j < 7; j++){
			var sphere = new THREE.Mesh(new THREE.SphereGeometry(9, 32, 16), esferas);
			sphere.position.x = deslocamentoX;
			sphere.position.y = 105;
			sphere.position.z = deslocamentoZ;
			scene.add( sphere );
			deslocamentoX += 20;
		}
		deslocamentoX = -255;
		deslocamentoZ -= 28;
	}
	deslocamentoX = 115;
	deslocamentoZ = 70;
	for(var i = 0; i < 6; i++){
		for(var j = 0; j < 8; j++){
			var sphere = new THREE.Mesh(new THREE.SphereGeometry(9, 32, 16), esferas);
			sphere.position.x = deslocamentoX;
			sphere.position.y = 123;
			sphere.position.z = deslocamentoZ;
			scene.add( sphere );
			deslocamentoX += 20;
		}
		deslocamentoX = 125;
		for(j = 0; j < 7; j++){
			var sphere = new THREE.Mesh(new THREE.SphereGeometry(9, 32, 16), esferas);
			sphere.position.x = deslocamentoX;
			sphere.position.y = 105;
			sphere.position.z = deslocamentoZ;
			scene.add( sphere );
			deslocamentoX += 20;
		}
		deslocamentoX = 115;
		deslocamentoZ -= 28;
	}
}

function desenharFios(){
	var fio = new THREE.MeshLambertMaterial({color: 0x000000});
	var positivo = new THREE.MeshLambertMaterial({color: 0x9A2514});
	var esferas = new THREE.MeshLambertMaterial( { color: 0x575859 } );

	var cube = new THREE.Mesh(new THREE.CubeGeometry(4, 200, 4), fio);
	cube.position.x = -185;
	cube.position.y = 285;
	cube.position.z = 0;
	scene.add(cube);

	cube = new THREE.Mesh(new THREE.CubeGeometry(4, 200, 4), fio);
	cube.position.x = 185;
	cube.position.y = 285;
	cube.position.z = 0;
	scene.add(cube);

	var cylinder = new THREE.Mesh(new THREE.CylinderGeometry( 3, 24, 50, 32 ), fio);
	cylinder.position.set(185, 280, 0 );
	cylinder.rotation.z = 180 * Math.PI / 180.0;
	scene.add(cylinder);

	cube = new THREE.Mesh(new THREE.CubeGeometry(50, 4, 4), fio);
	cube.position.x = -162;
	cube.position.y = 387;
	cube.position.z = 0;
	scene.add(cube);

	cube = new THREE.Mesh(new THREE.CubeGeometry(50, 4, 4), fio);
	cube.position.x = -162;
	cube.position.y = 280;
	cube.position.z = 0;
	scene.add(cube);

	var sphere = new THREE.Mesh(new THREE.SphereGeometry(36, 32, 16), esferas);
	sphere.position.x = -102;
	sphere.position.y = 280;
	sphere.position.z = 0;
	scene.add(sphere);

	cube = new THREE.Mesh(new THREE.CubeGeometry(70, 4, 4), fio);
	cube.position.x = -33;
	cube.position.y = 280;
	cube.position.z = 0;
	scene.add(cube);

	cube = new THREE.Mesh(new THREE.CubeGeometry(4, 76, 4), fio);
	cube.position.x = 0;
	cube.position.y = 240;
	cube.position.z = 0;
	scene.add(cube);

	cube = new THREE.Mesh(new THREE.CubeGeometry(10, 80, 10), fio);
	cube.position.x = -135;
	cube.position.y = 387;
	cube.position.z = 0;
	scene.add(cube);

	cube = new THREE.Mesh(new THREE.CubeGeometry(10, 50, 10), positivo);
	cube.position.x = -115;
	cube.position.y = 387;
	cube.position.z = 0;
	scene.add(cube);

	cube = new THREE.Mesh(new THREE.CubeGeometry(122, 4, 4), fio);
	cube.position.x = -49;
	cube.position.y = 387;
	cube.position.z = 0;
	scene.add(cube);

	cube = new THREE.Mesh(new THREE.CubeGeometry(25, 4, 4), fio);
	cube.position.x = 18;
	cube.position.y = 397;
	cube.position.z = 0;
	cube.rotateZ(45);
	scene.add(cube);

	cube = new THREE.Mesh(new THREE.CubeGeometry(50, 4, 4), fio);
	cube.position.x = 35;
	cube.position.y = 385;
	cube.position.z = 0;
	cube.rotateZ(90);
	scene.add(cube);

	cube = new THREE.Mesh(new THREE.CubeGeometry(50, 4, 4), fio);
	cube.position.x = 60;
	cube.position.y = 385;
	cube.position.z = 0;
	cube.rotateZ(45);
	scene.add(cube);

	cube = new THREE.Mesh(new THREE.CubeGeometry(50, 4, 4), fio);
	cube.position.x = 84;
	cube.position.y = 385;
	cube.position.z = 0;
	cube.rotateZ(90);
	scene.add(cube);

	cube = new THREE.Mesh(new THREE.CubeGeometry(50, 4, 4), fio);
	cube.position.x = 109;
	cube.position.y = 385;
	cube.position.z = 0;
	cube.rotateZ(45);
	scene.add(cube);

	cube = new THREE.Mesh(new THREE.CubeGeometry(50, 4, 4), fio);
	cube.position.x = 132;
	cube.position.y = 385;
	cube.position.z = 0;
	cube.rotateZ(90);
	scene.add(cube);

	cube = new THREE.Mesh(new THREE.CubeGeometry(28, 4, 4), fio);
	cube.position.x = 149;
	cube.position.y = 375;
	cube.position.z = 0;
	cube.rotateZ(45);
	scene.add(cube);

	cube = new THREE.Mesh(new THREE.CubeGeometry(32, 4, 4), fio);
	cube.position.x = 171;
	cube.position.y = 387;
	cube.position.z = 0;
	scene.add(cube);
}

function criarMosfet() {
	desenharMosfet();
	desenharEletrons();
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

	if (fios) {
			desenharFios();
	}
	criarMosfet();
}

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

	if (effectController.conexoes !== fios)
	{
		fios = effectController.conexoes;
		fillScene();
	}
	renderer.render(scene, camera);
}



function setupGui() {

	effectController = {conexoes: fios, dummy: function(){}};
	var gui = new dat.GUI();
		gui.add( effectController, "conexoes" ).name("Mostrar conexões");
}

$(document).ready(function() {
	init();
	setupGui();
	addToDOM();
	animate();
});
