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
    text = "Для&nbsp;записи укажите ваше имя и&nbsp;номер телефона.";
  }
  else if (!phone) {
    text = name + ", для&nbsp;записи укажите ваш номер телефона.";
  } else {
    text = name + ", ваша&nbsp;запись принята.<br>С&nbsp;вами свяжутся в&nbsp;ближайшее время.";
  }
  ShowReply(text);
}
function SetDisplay(event, name, target) {
  let classes = event.target.className.split(/\s+/);
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].endsWith("-grid")) {
      console.log(name + "." + classes[i], target);
      $(name + "." + classes[i]).css("display", target);
    }
  }
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
  $(".plakat-btn").on("click", function(event) {
    ShowReply("Спасибо за покупку!");
  });
  $(".merch-btn").on("click", function(event) {
    ShowReply("Спасибо за покупку!");
  });
  $('.go-up').click(function(){
     $('html, body').animate({scrollTop:0}, 'slow');
  });
  $(".menu-buter-image").on("click", function(event) {
    $(".menu").show();
  });
  $(".pricheska").mouseenter(function (event) {
      SetDisplay(event, ".plakat-btn", "flex");
  });
  $(".plakat-btn").mouseleave(function (event) {
    SetDisplay(event, ".plakat-btn", "none");
  });
  $(".merch").mouseenter(function (event) {
      SetDisplay(event, ".merch-btn", "flex");
  });
  $(".merch-btn").mouseleave(function (event) {
    SetDisplay(event, ".merch-btn", "none");
  });
});
