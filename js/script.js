$(document).ready(function () {

    //Expand and Contract Works
    $('#pictionary').on('click', function () {
        $('#pictionary').toggleClass('box shortBox')
        $('#pictionary').toggleClass('col-md-3 col-md-12');
        $("i").toggleClass('fa-chevron-down fa-chevron-up');
        $('#quizApp').toggle();
        $('#apiHack').toggle();
        $('#noteKeeper').toggle();
        $('.description').toggle();
        $('.contract').toggle();
        $('#pictionaryImage').toggle();
        $('#pictionaryImage').addClass('animated fadeIn bottomSpacer');
    })
    $('#quizApp').on('click', function () {
        $('#quizApp').toggleClass('box shortBox')
        $('#quizApp').toggleClass('col-md-3 col-md-12');
        $("i").toggleClass('fa-chevron-down fa-chevron-up');
        $('#pictionary').toggle();
        $('#apiHack').toggle();
        $('#noteKeeper').toggle();
        $('.description').toggle();
        $('.contract').toggle();
        $('#quizAppImage').toggle();
        $('#quizAppImage').addClass('animated fadeIn bottomSpacer');
    })
    $('#apiHack').on('click', function () {
        $('#apiHack').toggleClass('box shortBox')
        $('#apiHack').toggleClass('col-md-3 col-md-12');
        $("i").toggleClass('fa-chevron-down fa-chevron-up');
        $('#quizApp').toggle();
        $('#pictionary').toggle();
        $('#noteKeeper').toggle();
        $('.description').toggle();
        $('.contract').toggle();
        $('#apiHackImage').toggle();
        $('#apiHackImage').addClass('animated fadeIn bottomSpacer');
    })
    $('#noteKeeper').on('click', function () {
        $('#noteKeeper').toggleClass('box shortBox')
        $('#noteKeeper').toggleClass('col-md-3 col-md-12');
        $("i").toggleClass('fa-chevron-down fa-chevron-up');
        $('#quizApp').toggle();
        $('#apiHack').toggle();
        $('#pictionary').toggle();
        $('.description').toggle();
        $('.contract').toggle();
        $('#noteKeeperImage').toggle();
        $('#noteKeeperImage').addClass('animated fadeIn bottomSpacer');
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
