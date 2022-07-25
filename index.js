var imagedatauri;
var openFile = function(file) {
    var input = file.target;

    var reader = new FileReader();
    reader.onload = function(e){
      var dataURL = reader.result;
      imagedatauri = e.target.result;
      var output = document.getElementById('input');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };

  var imagedatauri2;
  var openFile2 = function(file) {
      var input = file.target;
  
      var reader = new FileReader();
      reader.onload = function(e){
        var dataURL = reader.result;
        imagedatauri2 = e.target.result;
        var output = document.getElementById('output');
        output.src = dataURL;
      };
      reader.readAsDataURL(input.files[0]);
    };
  function hideText(){
    document.getElementById("output").src = steg.encode(document.getElementById('message').value,imagedatauri);
}


function unhide(){
    document.getElementById("decoded-result").innerHTML =  steg.decode(imagedatauri2)
}