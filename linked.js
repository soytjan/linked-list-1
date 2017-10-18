var $webTitleInput = $('#web-title-input');
var $webUrlInput = $('#web-url-input');

$('.link-form input').keyup(function(){
  if($webTitleInput.val() === '' || $webUrlInput.val() === '') {
    $('#submit').prop('disabled', true);
  } else {
    $('#submit').prop('disabled', false);
  }
});

$('.enter-button').on('click', createBookmark)
function createBookmark(event){
  var $form = $('.link-form');
  if (validate()) {
    $('.error-message').text('Please enter a valid URL.').css('display', 'block')
  } else {
    appendUrl();
    $('.error-message').fadeOut(800);
    countCards();
    $form[0].reset();
    $('#submit').prop('disabled', true);
  };
};

$('.bookmark-section').on('click', function(){
  var currentCard = $(event.target).closest('article');
  if(event.target.className === 'mark-read-button') {
    $(currentCard).toggleClass('read');
    countCards();
    $('.delete-all').addClass('.show-delete-all').removeClass('hide-delete-all');
    countReadCards();
  }
  if(event.target.className === 'delete-button') {
    $(currentCard).remove();
    countCards();
   } 
  if(event.target.className === 'delete-all') {
    $('.card.read').remove();
    countCards();
  }
});

function validate() {
  var webUrl = $webUrlInput.val();
  var regexQuery = '^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$';
  var url = new RegExp(regexQuery,'i');
    if (url.test(webUrl)) {
      console.log('valid url: ' + webUrl);
      return false;
    } else {
      console.log('invalid url: ' + webUrl);
      return true;
  }
};

function countCards() {
  var $read = $('.read').length;
  var $totalCards = $('.card').length;
  return $('.count-cards').text($read + ' out of ' + $totalCards + ' cards read');
};

function countReadCards() {
  var $read = $('.read').length;
  var $totalCards = $('.card').length;
  console.log($read);
  if ($read = 0) {
  $('.delete-all').addClass('.hide-delete-all').removeClass('.show-delete-all');
  console.log("hello");
  return countReadCards();
}
};
function appendUrl() {
  $('.bookmark-section' ).append(`<article class="card" id="bookmark0">
      <h2 id="first-title">${$webTitleInput.val()}</h2>
      <p><a href="${$webUrlInput.val()}">${$webUrlInput.val()}</a></p>
      <button class="mark-read-button" id="mark-as-read">Read</button>
      <button class="delete-button">Delete</button> 
      </article>`).children(':last').hide().fadeIn(800); 
}


