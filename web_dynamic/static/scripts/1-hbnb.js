$(document).ready(function () {
  const amenityObject = {};

  $('.amenities .popover input[type="checkbox"]').on('change', function () {
    const $checkbox = $(this);

    // Retrieve data from check box
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
  });
});
