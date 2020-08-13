
BREAST_CANCER_MODEL_SELECTED = 'yes';

$('.breast-cancer').hide();

// This change event fires when the breast_cancer option is selected.
// Hide the Metastatic Cancer Analyzer text
$('#breast_cancer_input').change(function(){
	
	//console.log('breast_cancer');
	
	BREAST_CANCER_MODEL_SELECTED = 'yes';
	
	// Show the message saying which analyzer is active.
	$('.breast-cancer').show();
});

let breast_cancer_model;
(async function () {
	
	breast_cancer_model = await tf.loadModel('http://localhost:8000/mymodel/model.json');
	$("#selected-image").attr("src", "C:\Users\DELL\Desktop\try\static\image\front_image");
	
})();


function simulateClick(tabID) {
	
	document.getElementById(tabID).click();
}


function met_cancer_predictOnLoad() {
	
	// Simulate a click on the predict button
	setTimeout(simulateClick.bind(null,'predict-button'), 500);
}

;
