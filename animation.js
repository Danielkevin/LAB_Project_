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

