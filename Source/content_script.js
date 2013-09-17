function replace_shorturls(){
  
  $( "a[href^='http://t.co/']" )
    .each(function(){ 
      if ($(this).attr("title")){
        $(this).attr("href",$(this).attr("title"));
      } else {
        $(this).attr("href","http://"+$(this).text());
      }
    } );
}

MutationObserver = window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    replace_shorturls();
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback

observer.observe(document, {
  subtree: true,
  attributes: true
});
replace_shorturls();