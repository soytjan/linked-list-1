


$('.enter-button').on('click', createBookmark)
function createBookmark(){
	var webTitle = $('#web-title-input').val(); 
	var webUrl = $('#web-url-input').val();

	$(".bookmark-section" ).append(`<article class="card" id="bookmark0">
        <h2 id="first-title">${webTitle}</h2>
        <p><a href="${webUrl}">${webUrl}</a></p>
        <footer class="card-footer">
          <button class="mark-read-button" id="mark-as-read">Read</button>
          <button class="delete-button">Delete</button>
        </footer>   
      </article>`)
}; 

$('.bookmark-section').on('click', function(){
  // event.preventDefault();
  var currentCard = $(event.target).closest('article');
  if(event.target.className === 'mark-read-button') {
    $(currentCard).toggleClass('read');
  }
  if(event.target.className === 'delete-button') {
    $(currentCard).remove();
   } 
});

$('#web-title-input').keyup(function(){
  var webTitleVal = $('#web-title-input').val();
  if(webTitleVal === ''){
    $('#submit').prop('disabled', true);
  } else {
    $('#submit').prop('disabled', false);
  }
});

$('#web-url-input').keyup(function(){
  var webUrlVal = $('#web-url-input').val();
  if(webUrlVal === ''){
    $('#submit').prop('disabled', true);
  } else {
    $('#submit').prop('disabled', false);
  }
});