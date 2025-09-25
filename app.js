$("#search").click(function(element) {
    element.preventDefault();

    superhero = $("#searchbar").val();

    $.ajax("superheroes.php", {
        method: "POST",
        data: { name: superhero }
    }).done(function(data) {
        $("#result").html(data);
    }).fail(function() {
        alert("An error occurred");
    });
});