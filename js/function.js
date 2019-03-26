//check whether or not namespace exist
var MyApp = MyApp || {};

//create my app namespace
var MyApp = (function(){

  //private method - handles the rating stars event
  var _ratingChoiceHandler = function (target) {
    var targetVal = target.val();
    $('.rating-box__stars').find('.checked').removeClass('checked');
    target.addClass('checked');
    _setRatingMessage(targetVal, target.attr('data-rate-desc'));
  };

  //private method - set and show star rating value message 
  var _setRatingMessage = function(targetVal, ratingMessage){
     var ratingString = 'stars';
     if(targetVal === '1'){
       ratingString = 'star'; 
      }  
      $('.rating-box__message').text(targetVal + ' ' + ratingString + ' - ' + ratingMessage); 
  };

  //public method - handles the radio button click event
  var ratingChoiceEventListener = function () {
    $(':radio').click(function(){
      var target = $(this);
      _ratingChoiceHandler(target);
    });  
  };

  //public method - handles the stars hover state event
  var ratingHoverEventListener = function () {
    
    //add rating messages dynamically on stars hover
    $('.rating-box__stars > label').hover(function(){
      var ratingVal = $(this).prev().val(),
          ratingMessage = $(this).prev().attr('data-rate-desc');
      
      //set star rating value on screen
      _setRatingMessage(ratingVal,ratingMessage);

    }, function() {
      //on mouseout, either set the selected values or the initial ones
      if($('.rating-box__stars').find('.checked').length !==0){
        var ratingMessage = $('.rating-box__stars > .checked').attr('data-rate-desc');
       
        //set the selected star value
        _setRatingMessage($('.checked').attr('value'), ratingMessage);
      }
      else{
        //set the initial values
        $('.rating-box__message').text('Rate it!');
      }
    });
  };

  return {
      ratingChoiceEventListener : ratingChoiceEventListener,
      ratingHoverEventListener : ratingHoverEventListener
  };

})();

MyApp.ratingChoiceEventListener();
MyApp.ratingHoverEventListener();
  