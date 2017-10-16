var enterButton = document.getElementById("submit");

enterButton.addEventListener('click', function() {
	var webTitle = document.getElementById("web-title-input").value;
	var cardWebTitle = document.getElementById("first-title");
	var webUrl = document.getElementById("web-url-input");


	cardWebTitle.innerText = webTitle;
	console.log("Submit button working");
	var $cardClone = $( ".card:first" ).clone().appendTo( ".bookmark-section" ).prop({id : "display-on"});
});
