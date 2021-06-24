function HideAllModalElements(){
  $('.modal-background').children('div').each(function () {
    $(this).hide();
  });
}

function HideModal(){
  HideAllModalElements();
  $(".modal-background").hide();
}

function ShowReply(text) {
  HideAllModalElements();
  $(".modal-reply-text").html(text);
  $(".modal-background").show();
  $(".modal-reply").show();
}

function ShowModalForma() {
  HideAllModalElements();
  $(".modal-background").show();
  $(".modal-forma").show();
}

function SignUp(cls){
  let name = $(cls).children("form").children("input[name=name]").val();
  let phone = $(cls).children("form").children("input[name=phone]").val();

  let text = "";

  if (!name) {
    text = "Для записи укажите ваше имя и номер телефона.";
  }
  else if (!phone) {
    text = name + ", для записи укажите ваш номер телефона.";
  } else {
    text = name + ", ваша запись принята.<br>С вами свяжутся в ближайшее время";
  }
  ShowReply(text);
}

$(document).ready(function() {
  $("button[name=close]").on("click", function(event) {
    HideModal();
  });
  $("button[name=signup-forma]").on("click", function(event) {
    SignUp('.forma');
  });
  $("button[name=signup-modal-forma]").on("click", function(event) {
    SignUp('.modal-forma');
  });
  $(".modal-background").on("click", function(event) {
    HideModal();
  });
  $(".modal-forma").on("click", function(event) {
    event.stopPropagation();
  });
  $(".modal-reply").on("click", function(event) {
    event.stopPropagation();
  });
  $(".menu-li-sighup").on("click", function(event) {
    ShowModalForma();
  });
  $(".book-btn").on("click", function(event) {
    ShowReply("Спасибо за покупку!");
  });
  $(".menu-buter-image").on("click", function(event) {
    $(".menu").show();
  });
});
