// display giphy & bottons on load
//input for text for add animal with submit button
//submit button should add 10 more gifs 
// when clicking on image the gif plays when clicked again it stop playing.
// q = 
// limit = 10 gifs
//rating
/*i made an array and then i have a function with a for loop that appends a <button> element for each item in the array using jquery. When new items are typed in the form window, i just add that to the array and rerun the function to created the buttons, clearing it and then rediplaying.*/

$(document).ready(function () {

    // array of animals
    var q = "animals";
    var rating = "&pg-13";
    // initial array of animals
    var animals = ["bird", "cat", "lizard", "dog", "dolphin", "seal", "monkey"];

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + q +
        "&api_key=bnVtRNFiLdPLfyMM7a9hfp9nys3Npfpj&limit=10";

    // console.log(queryURL);

    /*function alertAnimalName(){
        var animalName = $(this).attr("data-name");
        NOT WORKING!!
        console.log(animalName);
    }*/

    //create buttons
    function renderButtons() {

        $("#animal-view").empty();

        for (var i = 0; i < animals.length; i++) {

            //create tag element
            var btn = $("<button>");
            //adding a class to buttons
            btn.addClass("animal");
            //adding a data-attribute
            btn.attr("data-name", animals[i]);
            //initial button text
            btn.text(animals[i]);
            // adding the buttons to the HTML
            $("#animal-view").append(btn);

        }
    }
         //calling the function for the buttons
         renderButtons();

    // event handler function on click;
    $("#add-animal").on("click", function (evt) {
        //prevents the form from its default behavior
        evt.preventDefault();

        //grabs the text from the input box
        var animal = $("#animal-input").val().trim();

        //animals from input box will be added to our array
        animals.push(animal);
        // alert(animal);

         //calling the function for the buttons
    renderButtons();

    });





});