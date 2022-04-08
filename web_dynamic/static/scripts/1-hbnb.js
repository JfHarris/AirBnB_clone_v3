document.addEventListener("DOMContentLoaded", function () {
    myDict = {}
    $( 'li input[type="checkbox"]' ).on( "click", function() {
        myDict[($( this ).data('id'))] = ' ' + $( this ).data('name');
      });
    $( 'li input[type="checkbox"]' ).off( "click", function() {
        delete myDict[$( this ).data('id')];
      });
    $( ".amenities h4" ).text(Object.values(myDict))
  });