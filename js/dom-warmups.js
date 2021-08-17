
let header = document.getElementById("goodMorning");

let afternoonListener = document.getElementById("afternoon");

    afternoonListener.addEventListener("click", function(){
    header.innerHTML = "Good Afternoon Draco";
});

    $('button').hover(function(){
        $(this).css('background-color', 'pink');
    },
        function (){
        $(this).css('background-color', 'white');
        });

    $('#reset').click(function(){
       location.reload();
    });