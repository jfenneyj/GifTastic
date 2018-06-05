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

    var animals = ["bird", "cat", "lizard", "dog", "dolphin", "seal", "monkey"];

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + q + "&api_key=bnVtRNFiLdPLfyMM7a9hfp9nys3Npfpj&limit=10";
    
    console.log(queryURL);

    //create buttons
    function printBtn() {
      

        for (var i = 0; i < animals.length; i++) {

           $(animals).each(function(){});

            var btn = document.createElement("button");
            var animal = document.createTextNode(animals[i]);
            btn.appendChild(animal);
            document.body.appendChild(btn);
            
    }
   
    }
    printBtn();


});