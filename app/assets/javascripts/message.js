$(function(){ 
  function buildHTML(message){
    if ( message.image ) {
      var html =
      `<div class="chat-message">
          <div class="top-message">
            <div class="top-message__name">
              ${message.user_name}
            </div>
            <div class="top-message__date">
              ${message.created_at}
            </div>
          </div>
          <div class="bottom-message">
            <p class="bottom-message__content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
      `<div class="chat-message">
          <div class="top-message">
            <div class="top-message__name">
              ${message.user_name}
            </div>
            <div class="top-message__date">
              ${message.created_at}
            </div>
          </div>
          <div class="bottom-message">
            <p class="bottom-message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }
$('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
  .done(function(data){
    var html = buildHTML(data);
    $('.main__chat').append(html);
    $('.main__chat').animate({ scrollTop: $('.main__chat')[0].scrollHeight});
    $('form')[0].reset();\
  })
  .fail(function(){
    alert("メッセージ送信に失敗しました");
  })
  .always(function() {
    $('.form__submit').prop('disabled', false);
  });
})
});