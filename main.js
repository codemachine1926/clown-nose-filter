x_coord = 0;
y_coord = 0;

function preload() {
    img = loadImage("https://i.postimg.cc/wjDs6vyK/clown-nose.jpg");
}

function setup() {
    canvas = createCanvas(360, 300);
    canvas.position(455, 200);
    cam = createCapture(VIDEO);
    cam.hide();

    model_1 = ml5.poseNet(cam, modelloaded);
    model_1.on('pose', poses);
}

function modelloaded() {
    console.log("posenet model is loaded");
}

function poses(findings) {
    if (findings.length > 0) {
        console.log(findings);
        x_coord = findings[0].pose.nose.x;
        y_coord = findings[0].pose.nose.y;
        console.log("x = " + x_coord + " y = " + y_coord);
    }
}

function draw() {
    image(cam, 0, 0, 360, 300);
    image(img, x_coord, y_coord, 20, 20);
}

function take_snapshot() {
    save("filter_image.png");
}