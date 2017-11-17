var name = $('radiobutton').attr('name');
var no_of_radiobutton = $('radiobutton').attr('no_of_radiobutton')

console.log(name,no_of_radiobutton)

var html = $("#form").find(".radiobutton").html()
console.log("html",html)

let radiobutton_arr = []

$("#form").find(".radiobutton").html("")
for(var i=1 ; i<= no_of_radiobutton ; i++){
 radiobutton_arr.push('<input type="radio" id="radio1" value="radio'+ (i) +'" name="'+ name + '[0]"/><label for="radio'+ (i) +'">Radio'+  (i) +'</label><br>')

}

for(var i=0;i<radiobutton_arr.length;i++){
$("#form").find(".radiobutton").append(radiobutton_arr[i])
}

var radio_values = $('input[id="radio1"]').map(function(){
  return this.name;
}).get();
console.log("radio_values....",radio_values)
localStorage.setItem("radio_values",JSON.stringify(radio_values))
