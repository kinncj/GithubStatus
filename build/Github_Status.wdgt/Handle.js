function handleJsonp(data){
    var message  = document.getElementById('message');
    var date     = document.getElementById('date');
    var image    = document.getElementById('image');
    var $image   = "Githubgood.png";
    var $color   = "#00A814";

    if (data.status !== "good") {
        $image   = "Githubbad.png";
        $color = "#FF0000";
    }

    var $message = data.body;
    var $date    = new Date(data.created_on);
         
    image.setAttribute("src", $image);

    date.innerHTML    = $date.toString();

    date.setAttribute('style', "color: "+$color+"; font-weight: normal; font-style:italic;");

    message.innerHTML = $message;

    message.setAttribute('style', "color: "+$color+"; font-weight: bold");
}