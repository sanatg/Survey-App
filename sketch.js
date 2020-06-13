var database;
var drawing = [];
var currentPath = [];
var isDrawing = false;
function setup(){

    var firebaseConfig = {
        apiKey: "AIzaSyDpWTEyJkbXl0W4RQJ_foKsBPqs3P5E_jU",
        authDomain: "canvas-fb42e.firebaseapp.com",
        databaseURL: "https://canvas-fb42e.firebaseio.com",
        projectId: "canvas-fb42e",
        storageBucket: "canvas-fb42e.appspot.com",
        messagingSenderId: "708926603455",
        appId: "1:708926603455:web:7fe228160014a271dc860a",
        measurementId: "G-R32LXJT6CW"
      };
     
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        console.log(firebase);

        canvas = createCanvas(700,700);

        canvas.mousePressed(startPath);

        canvas.parent('canvascontainer');

       // canvas.mousePressed(endPath);

      //  var saveButton = select('#saveButton');

       // saveButton.mousePressed(saveDrawing);

    }

    function startPath(){
   // isDrawing = true;
    currentPath = [];
    drawing.push(currentPath);
}

//function endPath(){
//isDrawing = false;
//}

function draw(){
background(0);

if(mouseIsPressed){
    var point = {
        x: mouseX,
        y: mouseY
    }
    currentPath.push(point);

}

stroke(255);
strokeWeight(4);
noFill();

for (var i = 0; i < drawing.length;i++){
    var path = drawing[i];
    beginShape();
for (var j = 0; j < path.length;j++){
    vertex(path[j].x,path[j].y)
}
endShape();
}



}
 
//function saveDrawing(){
  //  database = firebase.database();
  //  var ref = database.ref('drawings');
  //  var result =  ref.push(drawing,dataSent);

  //  console.log(result.key);

  //  function dataSent(status) {

   //     console.log(status)

   // }
//}
