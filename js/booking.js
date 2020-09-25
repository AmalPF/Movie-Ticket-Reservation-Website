function imgloop(element) {
    var ar = "img/grey-seat.svg";

    for (i = 0; i < 10 ; i++)
    {
      var img = new Image(50, 50);
      img.src = ar;

      var src = document.getElementById(element);
      src.appendChild(img);
    }

}