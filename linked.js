


$('.enter-button').on('click', createBookmark)
function createBookmark(event){
  var webTitle = $('#web-title-input').val(); 
  var webUrl = $('#web-url-input').val();
  var valid = validate();
  if (valid) {
     $('.error-message').text('yo fill this out').css('display', 'block')
  } else {
  
  $('.bookmark-section' ).append(`<article class="card" id="bookmark0">
        <h2 id="first-title">${webTitle}</h2>
        <p><a href="${webUrl}">${webUrl}</a></p>
        <button class="mark-read-button" id="mark-as-read">Read</button>
        <button class="delete-button">Delete</button> 
        </article>`);
  $('.error-message').fadeOut(800);
  countCards();

  };

};

function validate() {
  var urlPattern = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/
  var webTitle = $('#web-title-input').val(); 
  var webUrl = $('#web-url-input').val();

if ($.trim($('#web-url-input').val()) === urlPattern) {
      return true;
    } else {
      return false;
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

// $('#web-title-input').keyup(function(){
//   var webTitleVal = $('#web-title-input').val();
//   if(webTitleVal === ''){
//     $('#submit').prop('disabled', true);
//   } else {
//     $('#submit').prop('disabled', false);
//   }
// });

// $('#web-url-input').keyup(function(){
//   var webUrlVal = $('#web-url-input').val();
//   if(webUrlVal === ''){
//     $('#submit').prop('disabled', true);
//   } else {
//     $('#submit').prop('disabled', false);
//   }
// });
