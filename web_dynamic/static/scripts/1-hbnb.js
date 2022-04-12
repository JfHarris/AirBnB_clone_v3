document.addEventListener("DOMContentLoaded", function () {
  myDict = {}
  $( 'input' ).change( function() {
    if ($(this).is(":checked")) {
      myDict[($( this ).data('id'))] = ' ' + $( this ).data('name');
    }else{
      delete myDict[$( this ).data('id')];
    }
    $( ".amenities h4" ).text(Object.values(myDict))
    if ($(this).width() > $(".amenities").width()){
      $( ".amenities h4" ).css("color", "red")

    }
  });
});