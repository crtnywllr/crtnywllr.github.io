$(document).ready(function () {

    //Expand and Contract Works
    $('#shoppingList').on('click', function () {
        $('#shoppingList').toggleClass('box shortBox')
        $('#shoppingList').toggleClass('col-md-3 col-md-12');
        $("i").toggleClass('fa-chevron-down fa-chevron-up');
        $('#quizApp').toggle();
        $('#apiHack').toggle();
        $('#hotCold').toggle();
        $('.description').toggle();
        $('.contract').toggle();
        $('#shoppingListImage').toggle();
        $('#shoppingListImage').addClass('animated fadeIn');
    })
    $('#quizApp').on('click', function () {
        $('#quizApp').toggleClass('box shortBox')
        $('#quizApp').toggleClass('col-md-3 col-md-12');
        $("i").toggleClass('fa-chevron-down fa-chevron-up');
        $('#shoppingList').toggle();
        $('#apiHack').toggle();
        $('#hotCold').toggle();
        $('.description').toggle();
        $('.contract').toggle();
        $('#quizAppImage').toggle();
        $('#quizAppImage').addClass('animated fadeIn');
    })
    $('#apiHack').on('click', function () {
        $('#apiHack').toggleClass('box shortBox')
        $('#apiHack').toggleClass('col-md-3 col-md-12');
        $("i").toggleClass('fa-chevron-down fa-chevron-up');
        $('#quizApp').toggle();
        $('#shoppingList').toggle();
        $('#hotCold').toggle();
        $('.description').toggle();
        $('.contract').toggle();
        $('#apiHackImage').toggle();
        $('#apiHackImage').addClass('animated fadeIn');
    })
    $('#hotCold').on('click', function () {
        $('#hotCold').toggleClass('box shortBox')
        $('#hotCold').toggleClass('col-md-3 col-md-12');
        $("i").toggleClass('fa-chevron-down fa-chevron-up');
        $('#quizApp').toggle();
        $('#apiHack').toggle();
        $('#shoppingList').toggle();
        $('.description').toggle();
        $('.contract').toggle();
        $('#hotColdImage').toggle();
        $('#hotColdImage').addClass('animated fadeIn');
    })


    //Setting Scrolls
    $(".navbar-brand").click(function () {
        $(".hero").velocity("scroll", 1000);
    })

    $("#toProfile").click(function () {
        $("#intro").velocity("scroll", 1000);
    })
    $("#profileLink").click(function () {
        $("#intro").velocity("scroll", 1000);
    })
    $("#portfolioLink").click(function () {
        $("#works").velocity("scroll", 1000);
    })
    $("#contactLink").click(function () {
        $("#contact").velocity("scroll", 1000);
    })

    //Callout Styles
    $("#toProfile").velocity({
        translateY: "10px"
    }, {
        loop: 5
    });
});
