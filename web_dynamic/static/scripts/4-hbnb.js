document.addEventListener("DOMContentLoaded", function () {

  $(function () {
    const amenList = {};

    $('div.amenities li input').change(
      function () {
        if ($(this).is(':checked')) {
          amenList[($(this).attr('data-id'))] = $(this).attr('data-name');
        } else {
          delete amenList[($(this).attr('data-id'))];
        }
        $('div.amenities h4').html(Object.values(amenList).join(', ') || '&nbsp,');
      });

    $.get('http://0.0.0.0:5001/api/v1/status/', (data) => {
      if (data.status === 'OK') {
        $('DIV#api_status').addClass('available');
      } else {
        $('DIV#api_status').removeClass('available');
      }
    });
    function ajax(data="{}"){
    $.ajax({
      method: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      data: data,
      contentType: 'application/json',
      success: function (data) {
        for (const place of data) {
          const arti = `<article>
            <div class="title_box">
              <h2>${place.name}</h2>
              <div class="price_by_night">$${place.price_by_night}</div>
            </div>
            <div class="information">
              <div class="max_guest">${place.max_guest} Guests</div>
              <div class="number_rooms">${place.number_rooms} Bedrooms</div>
              <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
            </div>
            <div class="user">
            </div>
            <div class="description">
              ${place.description}
            </div>
          </article>`;
          $('.places').append(arti);
        }
      },

    });
  }
  ajax();

    $(' button').click(function () {
      $('section.places').empty();
      ajax(JSON.stringify({ amenities: Object.keys(amenList) }));

      });


    myDict = {}
      $( 'input' ).change( function() {
        if ($(this).is(":checked")) {
          myDict[($( this ).data('id'))] = ' ' + $( this ).data('name');
        }else{
          delete myDict[$( this ).data('id')];
        }
        $( ".amenities h4" ).text(Object.values(myDict))
      });

  });

  });