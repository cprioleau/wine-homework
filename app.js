$(document).ready(function() {

// represent the wine data in the console log
// pick a few fields from each object and display to the console log
  $.ajax({
    type: "GET",
    url: "https://myapi.profstream.com/api/c10520/wines",
    success: function(wine) {
      console.log(wine);
      console.log("A description of the "+wine[0].year+" "+wine[0].name+" from "+wine[0].country+": "+wine[0].description);
      console.log("A description of the "+wine[1].year+" "+wine[1].name+" from "+wine[1].country+": "+wine[1].description);
      console.log("A description of the "+wine[2].year+" "+wine[2].name+" from "+wine[2].country+": "+wine[2].description);
      console.log("A description of the "+wine[3].year+" "+wine[3].name+" from "+wine[3].country+": "+wine[3].description);
      console.log("A description of the "+wine[4].year+" "+wine[4].name+" from "+wine[4].country+": "+wine[4].description);
      console.log("A description of the "+wine[5].year+" "+wine[5].name+" from "+wine[5].country+": "+wine[5].description);
      console.log("A description of the "+wine[6].year+" "+wine[6].name+" from "+wine[6].country+": "+wine[6].description);
      console.log("A description of the "+wine[7].year+" "+wine[7].name+" from "+wine[7].country+": "+wine[7].description);
    },
    error: function() {
      alert("Whoops!");
    }
  });

});
