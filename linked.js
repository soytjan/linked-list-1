var enterButton = document.getElementById("submit");
var readButton = document.getElementById("mark-as-read");

enterButton.addEventListener('click', function() {
	var webTitle = document.getElementById("web-title-input").value;
	var cardWebTitle = document.getElementById("first-title");
	var webUrl = document.getElementById("web-url-input").value;
	var $article = $('article[id^="bookmark"]:last');
	var num = parseInt( $article.prop("id").match(/\d+/g), 10 ) +1;




	cardWebTitle.innerText = webTitle;
	$("[href='https://www.google.com']").attr('href', webUrl);
	
	$( ".display-off:first" ).clone().appendTo( ".bookmark-section" ).prop({id:"bookmark" + num, class:"card"});
	console.log("Submit button working");
});

readButton.addEventListener('click', function() {
	console.log("You've clicked the mark-as-read button");
});