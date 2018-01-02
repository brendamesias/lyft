$(document).ready(function() {
  // set endpoint and your access key
  var access_key = '12ebc4fe9f403f4cf475a5f37de3f5a1';
  var phone_number = '51928828932';
  // verify phone number via AJAX call
  $.ajax({
    url: 'http://apilayer.net/api/validate?access_key=12ebc4fe9f403f4cf475a5f37de3f5a1' + access_key + '&number=' + phone_number,
    dataType: 'jsonp',
    success: function(json) {
    // Access and use your preferred validation result objects
      console.log(json.valid);
      console.log(json.country_code);
      console.log(json.carrier);
    }
  });
});
