$(document).ready(function () {
  const amenityObject = {};

  $('.amenities .popover input[type="checkbox"]').on('change', function () {
    handleCheckboxChange($(this), amenityObject);
  });

  apiStatus();
});

function handleCheckboxChange($checkbox, amenityObject) {
  // Retrieve data from checkbox
  const amenityName = $checkbox.data('name');
  const amenityId = $checkbox.data('id');

  // Check if the checkbox is checked
  if ($checkbox.is(':checked')) {
    amenityObject[amenityName] = amenityId;
  } else {
    delete amenityObject[amenityName];
  }

  const names = Object.keys(amenityObject);
  $('.amenities h4').text(names.sort().join(', '));
}

function apiStatus() {
  const url = 'http://0.0.0.0:5001/api/v1/status/';

  $.get(url, response => {
    if (response.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
}
