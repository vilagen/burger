$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newDevour");

        var newDevourState = {
            devoured: newDevour
        };

        // Send PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("Burger is now Devoured!", newDevour);
                location.reload()
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault()

        var newBurger = {
            name: $("#makeBurger").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("added new burger")
            location.reload();
        });
    })
})