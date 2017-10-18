
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
$('.enter-button').on('click', createBookmark)
function createBookmark(event){
  var $webTitle = $('#web-title-input'); 
  var $webUrl = $('#web-url-input');
  var valid = validate();
  if (valid) {
     $('.error-message').text('Please enter a title and valid URL.').css('display', 'block')
  } else {
  
  $('.bookmark-section' ).append(`<article class="card" id="bookmark0">
        <h2 id="first-title">${$webTitle.val()}</h2>
        <p><a href="${$webUrl.val()}">${$webUrl.val()}</a></p>
        <button class="mark-read-button" id="mark-as-read">Read</button>
        <button class="delete-button">Delete</button> 
        </article>`).hide().fadeIn(50);
  $('.error-message').fadeOut(800);
  countCards();
  $webTitle[0].reset();
  $webUrl[0].reset();

  };

};
function validate() {
  var webUrl = $('#web-url-input').val();
  var regexQuery = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
  var url = new RegExp(regexQuery,"i");
    if (url.test(webUrl)) {
        console.log('valid url: ' + webUrl);
        return false;
    } else {
    console.log('invalid url: ' + webUrl);
    return true;
  }
};
function countCards() {
  var read = $('.read').length;
  var totalCards = $('.card').length;
  return $('.count-cards').text(read + ' out of ' + totalCards + ' cards read');
};

$('.bookmark-section').on('click', function(){
  // event.preventDefault();
  var currentCard = $(event.target).closest('article');
  if(event.target.className === 'mark-read-button') {
    $(currentCard).toggleClass('read');
    countCards();
  }
  if(event.target.className === 'delete-button') {
    $(currentCard).remove();
   } 
  if(event.target.className === 'delete-all') {
    $('.card.read').remove();
  }
});


