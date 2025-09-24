$("#search").click(function() {
    $.ajax("superheroes.php").done(function(data) {
        //$("#result").html(data);
        alert(data);
    });
});