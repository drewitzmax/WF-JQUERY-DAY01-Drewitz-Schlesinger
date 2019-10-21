$("form").submit(function(e) {

	e.preventDefault();
	
	
	

});

$(document).ready(function(){
	//$("form").remove();
	for(i=0; i<5;i++){
		let newDiv=document.createElement("div");
		newDiv.className = "box";
		$("article").append(newDiv);
	}
	$("input").val("Search for...");
	$("a").attr("href", "https://codefactory.wien/de/home/");
})