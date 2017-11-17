var NumberOfOptions_option = $("select").attr('NumberOfOptions');
var Name_option = $("select").attr('Name');
var select_html = $("select").html();
var html2 = '<option>Please Select</option>';

console.log("select_html", select_html)
console.log("isRequired", NumberOfOptions_option)
console.log("isRequired", Name_option)

let arr = []
let finalHTML;

for (var i = NumberOfOptions_option - 1; i >= 0; i--) {
       arr.push('<option value="'+ Name_option + i +'" name="'+  Name_option + '[0]">' + Name_option + i + '</option><br>')
}

for(var i=0;i<arr.length;i++){
 console.log("called")
 $("#form").find("#select1").append(arr[i])
}

var select_values = $('select[id="select1"]').map(function(){
  return this.name;
}).get();
console.log("select_values....",select_values)


for(var i=0;i<select_values.length;i++){
     select_values[i] = select_values[i] + "[0]"
}
console.log("select_values",select_values)

DuplicateSelect = $('select[id="select1"]').filter(function () {
    return $('[id="' + this.id + '"]').length > 0;
});

console.log("*********************",DuplicateSelect)
for(var j=0;j<DuplicateSelect.length;j++){
  for(var m=0; m < select_values.length; m++){
    if(j==m){
    DuplicateSelect[j].name = select_values[m]
    }
  }
}

var select_values = $('select[id="select1"]').map(function(){
  return this.name;
}).get();
console.log("select_values....",select_values)

localStorage.setItem("select_values",JSON.stringify(select_values))



console.log("arr", arr)
