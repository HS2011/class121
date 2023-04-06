function setup() {
  canvas = createCanvas(250, 250);
  canvas.position(500, 340);
  video = createCapture(VIDEO);
  video.hide();
  modal = ml5.imageClassifier("mobileNet", modelLoaded)
}

function draw(){
  image(video,0,0,250,250)
  modal.classify(video, gotResults)
}

function modelLoaded(){
  console.log("Model Loaded!")
}

function gotResults(error, results){
  if (error){
    console.error(error)
  }
  else{
    console.log(results)
    document.getElementById("object_name_thing_id_thing").innerHTML = results[0].label
    document.getElementById("accuracy_percentage_thing_id_thing").innerHTML = results[0].confidence.toFixed(3)
  }
}