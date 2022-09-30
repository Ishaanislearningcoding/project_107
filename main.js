function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/gMq1l9Xcf/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

