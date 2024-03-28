function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ZrQc97PIh/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;
        
        document.getElementById("result_label").innerHTML='Escucho: '+ results[0].label;
        document.getElementById("result_confidence").innerHTML='Presicion'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
        img1=document.getElementById('oreja')


        if (results[0].label==" Maullido"){
            img1.src='GATO.png';
            
        }else if (results[0].label=="Ladrido"){
            img1.src='perro.png';
            

        }else if (results[0].label=="Rugido"){
            img1.src='tigre.png';
            
}else{
    img1.src='vaca.png';
   
}
    }
}