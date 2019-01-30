$(".button").click(function(){
    $(this).slideUp();
});

$( "li" ).hover(
    function() {
        $( this ).append( $( "<span> ***</span>" ) );
    }, function() {
        $( this ).find( "span:last" ).remove();
    }
    );

    $( "#clickme" ).click(function() {
        $( "#cat" ).toggle( "slow", function() {
            // Animation complete.
        });
        });