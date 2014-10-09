$(document).ready(function () {
  //Shows the input on the page
  $('#button').click(function () {
    var add = $('input[name=things]').val();
    $('.list').append('<div class="item"><span>' + 'x ' + '</span>' + add + '</div>');
  });
  //Removes the previously added item
  $(document).on('click', '.item', function () {
    $(this).remove();
  });
});
