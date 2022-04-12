document.addEventListener("DOMContentLoaded", function () {

    $(function () {
        $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
            if (status === 'success'){
                $("div#api_status").addClass('available')
            } else {
                $("div#api_status").removeClass('available')
            }
        });
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
