var apiurl = $('productlistcategories').attr('apiurl');
var apiusername = $('productlistcategories').attr('apiusername');
var apipassword = $('productlistcategories').attr('apipassword');


console.log("apiurl " + apiurl + " apiusername " + apiusername + " apipassword " + apipassword )



let data_bucket;
$.ajax({
        type: 'POST',
        url: 'https://af34c42b08b8791446f01fba45ebb292.us-east-1.aws.found.io:9243/pdm1/_search',
        async: false,
  		data : '{\n        \"size\": 0,\n       \"aggs\": {\n              \"group_by_category\" : {\n                \"terms\": {\n                  \"field\": \"categories.raw\",\n                  \"size\": 1000\n                }\n              }\n            }\n      }',
        beforeSend: function(xhr) {
			xhr.setRequestHeader ("Authorization", "Basic " + btoa( 'aakron' + ":" + '123456'));
        },
        dataType: 'json',
        success: function(data) {
            console.log("data.aggregations.group_by_category.buckets ", data.aggregations.group_by_category.buckets)
          data_bucket  = data.aggregations.group_by_category.buckets;
        }
    });

console.log("ajax call is finished", data_bucket)

let final_code;

for(let i = 0 ; i <=10 ; i++){
	final_code += '<div><style type="text/css"> body{background: none;}</style><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/key-innovation/css/base.css" rel="stylesheet" type="text/css"/> <div class="in-prod-main"> <div class="in-prod-under"> <div class="in-box-cont"> <div class="right-part"> <img src="http://placehold.it/200x150" alt=""> </div><div class="left-part"> <div class="pro-title"><a href="">' + data_bucket[i].key + '</a></div><div class="pro-cat"> <ul> <li><a href="#">One</a></li><li><a href="#">Two</a></li><li><a href="#">Three</a></li><li><a href="#">Four</a></li></ul> </div><div class="pro-btn"> <a href="#">See All</a> </div></div></div></div></div></div></ProductListCategories>'
}
console.log("final_code", final_code)
$('productlistcategories').html(final_code);
