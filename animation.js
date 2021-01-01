$(document).ready(function(){
    const sliderImages = $('.slider-image');
    const width = $('.slide:first-child').width();

    sliderImages.css({'margin-left' : '-' + width + 'px'});


    $('.next').click(function(){
        sliderImages.animate({
            left : '-' + width + 'px'
        }, 1000, function(){
            sliderImages.find('.slide:first-child').appendTo(sliderImages);
            sliderImages.css({left:'0'});
        });
    });

    $('.prev').click(function(){
        sliderImages.animate({
            left :  + width + 'px'
        }, 1000, function(){
            sliderImages.find('.slide:last-child').prependTo(sliderImages);
            sliderImages.css({left:'0'});
        });
    });
});

function xFunction(x)
{
    x.class.toggle("change");
    document.getElementById("Dropdown").classList.toggle("show");
}
window.onclick = function(event)
{
    if(!event.target.matches('.drop'))
    {
        var dropdowns = document.getElementByClassName("drop-content");
        var i;
        for(i=0;i<dropdowns.length;i++)
        {
            var openDrop = dropdowns[i]
            if(openDrop.classList.contains('show'))
            {
                openDrop.classList.remove('show');
            }
        }
    }
}