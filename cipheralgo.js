keyvaluepair = {"a":1,"b":2,"c":3}*25;

console.log(keyvaluepair);
function encryptceasar(){
    var plain = document.getElementById("plaintext").value;
    
    var key = document.getElementById("keyvalue").value;
    if(key>25 || key<0){
        alert("Enter a valid number between 1 to 25");
    }
    else{
        var result = ""
        for(let i=0;i<plain.length;i++){
            var instanceval = plain.charAt(i);
           var valuegen =  keyvaluepair[plain.charAt(i)];
            result = result+valuegen;   
            console.log(result)
        }

}
}