var video       = $('#video');
let channel     = $('#channel');
var submit      = $('#submit');
var input       = $('input');
var title       = $('#title');
var date        = $('#date');
var type        = $('#type');
var thumbnail   = $('#thumbnail');

submit.click(() => {

    var search = input.val();

    var url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDjyVZuhKX1u-tvjnMPgWV5xzGJe3YVv88&part=snippet&q=' + search;

    if (search == '') {
        alert('Please enter a valid input');
    } else {
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            success: function (response) {
                title.html(response.items[0].snippet.title)
                date.html(response.items[0].snippet.publishedAt)

                thumbnail.removeClass('d-none');
                thumbnail.attr("src", response.items[0].snippet.thumbnails.medium.url);

                if(response.items[0].id.kind == 'youtube#channel') {
                    type.html('channel');
                    channel.removeClass('d-none');
                    video.addClass('d-none');        
                } else {
                    type.html('video');
                    video.removeClass('d-none');
                    channel.addClass('d-none');
                    video.attr("src", 'https://www.youtube.com/embed/' + response.items[0].id.videoId)
                }  
            }
        });
    }
});