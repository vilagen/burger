$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {
                devoured: true
            }
        }).then(
            function() {
                console.log("Burger is now Devoured!");
                location.reload()
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault()

        var newBurger = {
            burger_name: $("#makeBurger").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log(newBurger)
            location.reload();
        });
    })
})