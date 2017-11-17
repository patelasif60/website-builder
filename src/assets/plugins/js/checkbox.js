var name = $('checkbox').attr('name');
var options = $('checkbox').attr('options')

console.log(name,options)

var html = $("#form").find(".checkbox").html()
console.log("html",html)

let checkbox_arr = []

 $("#form").find(".checkbox").html("")
for(var i=1 ; i<= options ; i++){
  checkbox_arr.push('<br><label><input type="checkbox" id="checkbox1" value="option'+ (i) +'" name="'+ name + '[0]"/>Option'+  (i) +'</label><br>')
}

for(var i=0;i<checkbox_arr.length;i++){
 $("#form").find(".checkbox").append(checkbox_arr[i])
}

var checkbox_values = $('input[id="checkbox1"]').map(function(){
  return this.name;
}).get();
console.log("checkbox_values....",checkbox_values)
localStorage.setItem("checkbox_values",JSON.stringify(checkbox_values))
