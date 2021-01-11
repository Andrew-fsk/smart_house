

var number = 0;
var maxNumber = $(".test-slider__item").length - 2;
var $element = $(".test-slider__item").find("input, select, textarea");
// var btnPrev = $(".prev-test");
var btnNext = $('.next-test');
var testTextNum = 4;
var testText = $('.test__img-count');
var $elementRadio = $(".test-slider__item").not('.final, .no-focus').find("input[type='radio']");
var isValid;
var dataBlock;
var activeSlede = [];
// $(".test-item__number-furst").text(number + 1);
// $(".number-all-slider").text( maxNumber);

for(var i = 0; i< maxNumber; i++){
  activeSlede[i] = false;
}

$element.on('change input', function (e) {
  var value = $(this).val().trim();
  isValid = value !== "";
  btnActive(!isValid);
  // $(".text-subbtn").hide();
});

function btnActive(isValid) {
  if(number === 0){
    // btnPrev.prop('disabled', 'false');
    btnNext.prop('disabled', isValid);
  }else{
    // btnPrev.prop('disabled', false);
    if(activeSlede[number] === true || isValid === false){
      btnNext.prop('disabled', false);
    }else{
      btnNext.prop('disabled', true);
    }
    
  }

}

$('input[name="qw7"]').on('change input', function() {
  $('.test__block__item-3').show();
  $('.test__block__item-2').hide();
  $('#gift-t').text($(this).val().trim());
  // $('.test-gifts-price').text($(this).parents('.test_elem').find('.text-price').text().trim());
  $('.gift-img').attr({
        "src": $(this).parents('.lqw-7').find('.qw-7-img').attr('src'),
      });

});
// sidebar

var $barLevel = 100 / (maxNumber);
var $barWidth = $barLevel;

  function progress(num){
    if(num === 0){
      var testCircle= ".test-circle-" + (num ) ;
      $(testCircle).addClass('test-circle-active');
    }else{
      var testBlock = ".test-block-" + (num - 1);
      var testCircle= ".test-circle-" + (num ) ;
      $(testBlock).addClass('test-block-active');
      $(testCircle).addClass('test-circle-active');
    }
    


    moneyAnim( ".procent", Math.floor($barWidth),"%" );
  }
  progress(0);



  
// btn

function btnClick() {

  btnNext.on('click', next);
  $elementRadio.on('input, change',next);
  // $('.inp-next').on('input, change',next);
}
btnClick();

function next(){
  event.preventDefault();
    activeSlede[number] = true;

    ++number;
    
    setTimeout(function(){
      $(".test-slider__item").hide();
      $(".test-slider__item").eq(number).fadeIn(1000);
    },300);
    
    btnActive(!isValid);
    if(activeSlede[number] === true){
      btnNext.prop('disabled', false);
    }else{
      btnNext.prop('disabled', true);
    }

    if(number === 2){
        $('.test-slider__item').eq(1).find('input').each(function(index, el) {
          if($(this).prop('checked')){
            $('.qw-i-jq').eq(index).show();
          }else{
            $('.qw-i-jq').eq(index).hide();
          }
        });
     }

    if(number === maxNumber){
      $(".test__btn-block").hide();
      
      $('#r-1').attr({
        "src": 'assets/img/test/r-1-2.png',
      });
      $('.img-bg').attr({
        "src": 'assets/img/test/r-2-2.png',
      });
      $('.test__block').addClass('finalp');
    }
    else{
      setTimeout(function(){
          $(".test-item__number-furst").text(number + 1);
          $barWidth += $barLevel;
          progress(number);

          animateTop ();
      },300);
    }
  if($(".next-test").hasClass("lastEl")){
    $(".next-test").hide();
  }
}


$( "#number-slider" ).slider({
      animate: "slow",
      range: "min",    
      value: 40,
      min: 1,
      max: 1000,
      slide : function(event, ui) {    
            $("#send-result-polzunok").val(ui.value); 
            $(".text-subbtn").hide();  
        }
  });
  $("#send-result-polzunok").val($("#number-slider").slider("value"));
  var crdVal;
  $("#send-result-polzunok").on('keyup', function(event) {
    crdVal = $('#send-result-polzunok').val().trim();

    if(parseInt(crdVal) > 1000){
      $('#send-result-polzunok').val(1000);
    }

    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
    $( "#number-slider" ).slider( "value", $(this).val() );
  });

  $("#send-result-polzunok").on("change , input", function(){
    if(crdVal === ''){
      $('#send-result-polzunok').val();
    }
  });

  $("#no").on('change input', function() {
    if($(this).prop('checked')){
      $( "#number-slider" ).slider( "value", 0 );
      $( "#number-slider" ).slider( "disable" );
      $("#send-result-polzunok").val("0").attr({'disabled':'disabled'});
    }else{
      $( "#number-slider" ).slider( "enable" );
      $("#send-result-polzunok").removeAttr('disabled');
    }
  });


$( "#number-slider" ).slider({
    change: function( event, ui ) {
      btnNext.prop('disabled', false); }
});

  
function animateTop (){
  var elem = $('.progress__title-top');
  var top = elem.offset().top - 15;
  $('body,html').animate({scrollTop: top}, 400);
}

  function moneyAnim( selector, new_money, simbol ){
    var numb_start = 0; // Получаем начальное число
  
    $({numberValue: numb_start}).animate({numberValue: new_money}, {
    
      duration: 560, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
      easing: "linear",
      
      step: function(val) {
      
        $(selector).text(Math.ceil(val) + simbol); // Блок, где необходимо сделать анимацию
        
      }
      
    });

  }


var closeMod = false;
     $(document).mouseleave(function(event) {
         event = event || window.event;
         if (event.clientY < 0 || event.clientY < 3) {
             if (!closeMod &&  !nForm) {
                 var top = $('.test__content').offset().top;
                 $('body,html').animate({scrollTop: top}, 1000);
                 closeMod = true;
             }

         }
     });

// ---------------------

function simulate(element, eventName)
{
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;

    for (var name in eventMatchers)
    {
        if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
        throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent)
    {
        oEvent = document.createEvent(eventType);
        if (eventType == 'HTMLEvents')
        {
            oEvent.initEvent(eventName, options.bubbles, options.cancelable);
        }
        else
        {
            oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
            options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
            options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
        }
        element.dispatchEvent(oEvent);
    }
    else
    {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        var evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
}

function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;
}

var eventMatchers = {
    'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
}
var defaultOptions = {
    pointerX: 0,
    pointerY: 0,
    button: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    bubbles: true,
    cancelable: true
}
// -----------------------