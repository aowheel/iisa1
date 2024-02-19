'use strict'

$(document).ready(function(){
    $('.access p').hover(
        function(){
            $('.access a').css('color', 'rgb(255, 254, 244)')
            $(this).css('background-color', 'rgba(0, 128, 137)')
        },
        function(){
            $('.access a').css('color', '')
            $(this).css('background-color', '')
        }
    )

    $('.share').on('click', function(){
        $(this).css('display', 'none');
        $('.share-hidden').css('display', 'flex');
    })
    $('.box3').on('click', function(){
        $('.share').css('display', 'flex');
        $('.share-hidden').css('display', 'none');
    })

    var shareUrl = window.location.href;
    setSnsShare(shareUrl);
    function setSnsShare(shareUrl){
        setLineUrl(".share1 a", shareUrl);
        setXUrl(".share2 a", shareUrl);
        setDiscordUrl(".share3 a", shareUrl);
    }
    function setLineUrl(shareSelector, shareUrl){
        $(shareSelector).attr("href", "https://line.me/R/msg/text/?" + encodeURIComponent(shareUrl));
        setShareEvent(shareSelector);
    }
    function setXUrl(shareSelector, shareUrl) {
        $(shareSelector).attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(shareUrl + "\n\n#iisa1"));
        setShareEvent(shareSelector);
    }
    function setShareEvent(selector) {
        $(selector).on('click', function(e){
            var current = this;
            window.open(current.href, '_blank', 'width=600, height=600, menubar=no, toolbar=no, scrollbars=yes');
            e.preventDefault();
        }); 
    }
});