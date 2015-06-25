import Ember from 'ember';

export default Ember.Component.extend({
  insertMap: function() {

    var geocoder = new google.maps.Geocoder();
    var container = this.$(".map-canvas");    //loads the div
    var address = this.get('address')       //gets the address from template
    geocoder.geocode({'address': address}, function(results, status){
      var lat = results[0].geometry.location.lat();
      var long = results[0].geometry.location.lng();
      var myLatlng = new google.maps.LatLng(lat,long);

      var options = {
        center: myLatlng,                //parameters for map to be set where map is centered
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(container[0], options); //draws map


      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: address
      });
      //marker
    });

    // callback function for address

  }.on('didInsertElement')
});

// DON'T MESS WITH THE STUFF ABOVE THIS LINE STEVE. THIS STUFF WORKS
//
// import Ember from 'ember';
//
// export default Ember.Component.extend({
//   insertMap: function() {
//
//     var geocoder = new google.maps.Geocoder();
//     var container = this.$(".map-canvas");    //loads the div
//     var address = this.get('address')       //gets the address from template
//
//     if (Ember.typeOf(address) === 'string') {
//       geocoder.geocode({'address': address}, function(results, status){
//         var lat = results[0].geometry.location.lat();
//         var long = results[0].geometry.location.lng();
//         var myLatlng = new google.maps.LatLng(lat,long);
//
//         var options = {
//           center: myLatlng,                //parameters for map to be set where map is centered
//           zoom: 15,
//           mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
//
//         var map = new google.maps.Map(container[0], options); //draws map
//
//
//         var marker = new google.maps.Marker({
//           position: myLatlng,
//           map: map,
//           title: address
//         });
//         //marker
//       });
//     } else {
//
//     }
//
//
//     // callback function for address
//
//   }.on('didInsertElement')
// });
