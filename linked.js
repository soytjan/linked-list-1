var enterButton = document.getElementById("submit");

enterButton.addEventListener('click', function() {
	var webTitle = document.getElementById("web-title-input").value;
	var cardWebTitle = document.getElementById("first-title");
	var webUrl = document.getElementById("web-url-input").value;

	cardWebTitle.innerText = webTitle;
	$("[href='https://www.google.com']").attr('href', webUrl);
	console.log("Submit button working");
	$( ".card:first" ).clone().appendTo( ".bookmark-section" ).prop({id : "display-on"});

});
