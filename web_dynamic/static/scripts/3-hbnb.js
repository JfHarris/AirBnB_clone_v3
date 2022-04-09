document.addEventListener("DOMContentLoaded", function () {

    $(function () {
        $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
            if (status === 'OK'){
                $("div#api_status").addClass('available')
            } else {
                $("div#api_status").removeClass('available')
            }
        });
      });



    myDict = {}
    $( 'li input[type="checkbox"]' ).on( "click", function() {
        myDict[($( this ).data('id'))] = ' ' + $( this ).data('name');
      });
    $( 'li input[type="checkbox"]' ).off( "click", function() {
        delete myDict[$( this ).data('id')];
      });
    $( ".amenities h4" ).text(Object.values(myDict))
  });
