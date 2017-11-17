var name = $("#form").find("#custom_input").attr('name');
var placeholder = $("#form").find("#custom_input").attr('placeholder');
var type = $("#form").find("#custom_input").attr('type');
var required = $("#form").find("#custom_input").attr('required');
$(document).ready(function() {
console.log("Name,Placeholder,Type,Required",name,placeholder,type,required)
$("#form").find("#custom_input").attr('name', name + '[0]');
});
