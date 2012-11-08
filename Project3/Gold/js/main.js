/*
Elijah Freestone
MiU 1211
Project 3
Gold App
11-04-12
*/

$('#index').on("pageinit", function(){
	//code needed for home page goes here
});	
		
$('#addItem').on("pageinit", function(){

		var myForm = $("#eventForm");
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
			
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

/*var autofillData = function (){
	 
};

var getData = function(){

};*/

var storeData = function(data){
	console.log(data);
}; 
/*
var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};*/


