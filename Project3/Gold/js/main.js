/*
Elijah Freestone
MiU 1211
Project 3
Gold App
11-04-12
*/

$('#index').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#addItem').on('pageinit', function(){

		var myForm = $("#eventForm"),
			popErrors = $('#popErrors');
			
		    myForm.validate({
			invalidHandler: function(form, validator) {
				popErrors.click(); //Pop up error dialog box
				var html = '';
				for(var key in validator.submitted) {
					var label = $('label[for^="'+ key +'"]') // Selector search for required labels not filled out
					var legend = label.closest('fieldset').find('ui-controlgroup-label');
					var fieldName = legend.length ? legend.text() : label.text();
					html += '<li>'+ fieldName +'</li>';
				};
				$("#formErrors ul").html(html); // Fill out Pop up error text
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
	
}; 
/*
var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};*/


