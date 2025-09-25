$("#search").click(function(element) {
    element.preventDefault();

    superhero = $("#searchbar").val().trim();
    if (superhero.length > 20 || /^[a-zA-Z\s]*$/.test(superhero) == false) {
        alert("Please enter a valid superhero name (max 20 characters, letters and spaces only).");
        return;
    }

    $.ajax("superheroes.php", {
        method: "GET",
        data: { query: superhero }
    }).done(function(data) {
        $("#result").html(data);
    }).fail(function() {
        alert("An error occurred");
    });
});