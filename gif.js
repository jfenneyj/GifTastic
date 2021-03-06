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

    

    // console.log(queryURL);


    function displayAnimalInfo(event){
        
        var animal = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal +
        "&api_key=bnVtRNFiLdPLfyMM7a9hfp9nys3Npfpj&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            renderButtons();
            console.log(response);
            // $("#animal-view").text(response);
            
            for(var j = 0; j < response.data.length; j++){
                var images = $("<img>");
                images.attr("src", response.data[j].images.fixed_height_still.url);
                images.attr("data-moving", response.data[j].images.fixed_height.url);
                images.attr("data-still", response.data[j].images.fixed_height_still.url);

                images.addClass("animalgif col-md-3");

                $(".animal-view").append(images);
            }
        });
        
    }
   
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

    $(document).on("click", ".animalgif",function(evt){
        
        var moving = $(this).attr("data-moving");
        
        if($(this).attr("src") == moving){
           var still =  $(this).attr("data-still");
           console.log("moving");
            $(this).attr("src", still);
        } else {
            $(this).attr("src", moving);
        }
    })

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

    $(document).on("click", ".animal", displayAnimalInfo);

    // renderButtons();



});