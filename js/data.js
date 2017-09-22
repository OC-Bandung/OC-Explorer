// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.getJSON( "js/sample.json", function(data) {
  
  load_data(data);

})
  .done(function() {
     console.log("done")
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });
 
// Perform other work here ...
 
 

function load_data(data) {
   console.log(data.releases[0].tender.title);
    // $("#contract_name").text(data.releases);
}