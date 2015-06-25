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

// import Ember from 'ember';
//
// export default Ember.Component.extend({
//   insertMap: function() {
//
//     var geocoder = new google.maps.Geocoder();
//     var container = this.$(".map-canvas");    //loads the div
//     var address = this.get('address');       //gets the address from template
//     var markers = [];
//     var marker;
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
//         var marker = new google.maps.Marker({
//           position: myLatlng,
//           map: map,
//           title: address
//         });
//         //marker
//       });
//     } else {
//
//       var bounds = new google.maps.LatLngBounds();
//       var mapOptions = {
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//         zoom: 15
//       };
//
//       var map = new google.maps.Map(container[0], mapOptions);
//
//       address.forEach(function(bike) {
//         var currentAddress = bike.get('address');
//         var thingy = geocoder.geocode({'address': currentAddress}, function(results, status) {
//           var lat = results[0].geometry.location.lat();
//           var long = results[0].geometry.location.lng();
//           var myLatlng = new google.maps.LatLng(lat,long);
//           // markers.push(myLatlng);
//           return $.Promise()
//         });
//         markers.push(thingy);
//       });
//
//       Promise.all(markers).then(function(realMarkers) {
//
//       })
//
//       for (var i = 0; i < markers.length; i++) {
//         var position = markers[i];
//         bounds.extend(position);
//         marker = new google.maps.Marker({
//           position: position,
//           map: map
//         });
//         map.fitBounds(bounds);
//       }
//       var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event){
//         this.setZoom(14);
//         google.maps.event.removeListener(boundsListener);
//       });
//     }
//     // callback function for address
//
//   }.on('didInsertElement')
// });
