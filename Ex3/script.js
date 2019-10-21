$(document).ready(function () {
    $("a").attr("href", "https://codefactory.wien/");
    $("code").css("color", "red");
    $("ol > li").css("background-color", "#2a7b90");
    $("textarea").attr("placeholder","Express your opinion");
    $("img").attr("src", "https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.png");
    $("blockquote").css({
        "background-color": "orange",
        "font-style": "italic"
    });
    $(".date").remove();
    $("#logo").css("color", "black");
    $("#logo > .gray").css("color", "white");
    $(`p:contains( Believe that life is worth living)`).text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.")
})