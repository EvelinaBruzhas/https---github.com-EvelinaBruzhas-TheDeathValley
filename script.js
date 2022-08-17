
let center = [48.8866527839977,2.34310679732974];

function init() {
	let map = new ymaps.Map('map-test', {
		center: center,
		zoom: 17
	});

	map.controls.remove('geolocationControl'); 
  map.controls.remove('searchControl'); 
  map.controls.remove('trafficControl'); 
  map.controls.remove('typeSelector'); 
  map.controls.remove('fullscreenControl'); 
  map.controls.remove('zoomControl'); 
  map.controls.remove('rulerControl'); 
  map.behaviors.disable(['scrollZoom']);
}

ymaps.ready(init);


                ; (function ($) {

                    $(function () {

                        $('#my-button').bind('click', function (e) {


                            e.preventDefault();


                            $('#element_to_pop_up').bPopup();

                        });

                    });

                })(jQuery);
      

                ; (function ($) {

                  $(function () {
          
                      $('#my-button2').bind('click', function (e) {
          
          
                          e.preventDefault();
          
          
                          $('#element_to_pop_up2').bPopup();
          
                      });
          
                  });
          
              })(jQuery);

              ; (function ($) {

                $(function () {
        
                    $('#my-button3').bind('click', function (e) {
        
        
                        e.preventDefault();
        
        
                        $('#element_to_pop_up3').bPopup();
        
                    });
        
                });
        
            })(jQuery);

            ; (function ($) {

              $(function () {
      
                  $('#my-button4').bind('click', function (e) {
      
      
                      e.preventDefault();
      
      
                      $('#element_to_pop_up4').bPopup();
      
                  });
      
              });
      
          })(jQuery); 
          ; (function ($) {

            $(function () {
    
                $('#my-button5').bind('click', function (e) {
    
    
                    e.preventDefault();
    
    
                    $('#element_to_pop_up5').bPopup();
    
                });
    
            });
    
        })(jQuery);
        ; (function ($) {

          $(function () {
  
              $('#my-button6').bind('click', function (e) {
  
  
                  e.preventDefault();
  
  
                  $('#element_to_pop_up6').bPopup();
  
              });
  
          });
  
      })(jQuery);