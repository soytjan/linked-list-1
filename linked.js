var $webTitleInput = $('#web-title-input');
var $webUrlInput = $('#web-url-input');

countReadCards();
$('.bookmark-section').mousemove(countReadCards(event));

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
  countReadCards();
  if(event.target.className === 'mark-read-button') {
    $(currentCard).toggleClass('read');
    countCards();
  }
  if(event.target.className === 'delete-button') {
    $(currentCard).remove();
    countCards();

   } 
  if(event.target.className === 'delete-all') {
    $('.card.read').remove();
    countCards();
  }
  countReadCards();

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
  
  $('.count-cards').text($read + ' of ' + $totalCards + ' cards read');
  $('.count-card-container').removeClass('hidden');
};

function countReadCards() {
  var $read = $('.read').length;
  console.log('dan', $read);
  var $totalCards = $('.card').length;
  // countCards();
  if ($read === 0) {
  $('.delete-all').toggleClass('hidden');
  }
};

function appendUrl() {
  $('.bookmark-section' ).append(`<article class="card" id="bookmark0">
      <h2 id="first-title">${$webTitleInput.val()}</h2>
      <p><a href="${$webUrlInput.val()}">${$webUrlInput.val()}</a></p>
      <footer>
        <button class="mark-read-button" id="mark-as-read">Read</button>
        <button class="delete-button">Delete</button> 
      </footer>  
      </article>`).children(':last').hide().fadeIn(800); 
}


