// display giphy & bottons on load
//input for text for add animal with submit button
//submit button should add 10 more gifs 
// when clicking on image the gif plays when clicked again it stop playing.
// q = 
// limit = 10 gifs
//rating

$(document).ready(function(){

    // array of animals

var array = ["bird", "cat", "lizard", "dog", "dolphin", "seal", "monkey"];
// console.log(array);
//create buttons
function buttonDisplay (){
    $("#animalbtn").empty();

    for(var i = 0; i < array.length; i++){
       
        var animalBtn = ("<button>");
        animalBtn.addClass("animal");
        animalBtn.addClass("btn btn-success");
        animalBtn.attr("data-name", array[i]);
        animalBtn.text(array[i]);
        $("#animalBtn-view").append(animalBtn);
    }

    
}

function createNewButton(){
    $("#newAnimal").on("click", function(){
        var animal = $("#animalInput").val().trim();
        if(animal == ""){
            return false; //no blank spaces
        }
        array.push(animal);
        
        buttonDisplay();
        return false;

    });

}

    function removeButton(){
        $("#removeAnimal").on("click", function(){
            array.pop(animal);
            buttonDisplay();
            return false;

        });
    }

    function displayGifs(){
        var animal = $(this).attr("data-name");
        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=bnVtRNFiLdPLfyMM7a9hfp9nys3Npfpj&limit=10";


        $.ajax({
            url: queryURL,
            method: "GET"
          })

          .then(function(response){
            $("#animalbtn").empty();

            var results = response.data;

            for(var i = 0; i < results.length; i++){

                if (results[i].rating !== "r" && results[i].rating !== "pg-13"){
                    
                    // creating a div with class of item
                    var gifDiv = $("<div class='item'>");

                    // storing the result item's rating
                    var rating = results[i].rating;

                    // creating a p tag item's rating
                    var p = $("<p>").text("Rating; " + rating);




                }


            }












        




    }




















});



});