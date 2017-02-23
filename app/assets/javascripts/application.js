// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .



var PATHS = {
  'root': '',
  'home': 'home',
  'music': 'music',
  'contact': 'contact',
  'bio': 'bio'
};

var BACKGROUNDS = {
  'flying_birds': "url('/images/Flying-Birds.gif') no-repeat center fixed;",
  'boat': "url('/images/Love-Boat.gif') no-repeat center fixed;",
  'stone_falls': "url('/images/Stone-Falls.gif') no-repeat center fixed;",
  'the_launch': "url('/images/The-Launch.gif') no-repeat center fixed;"
}

$( window ).load( function( event )  {
  pathBackground();

  // $('.nav li').each( function() {
  //   var item = $( this ).data('menu');

  //   if( item ) {
  //   	var background = selectedBackground( item );
  //   	$( this ).hover( function() { updateBackground( background ) }, pathBackground );
  //   }
  // });
});

function pathBackground() {
	var path = location.pathname.split("/")[1];
  var background = selectedBackground( path );
  updateBackground( background );
}

function selectedBackground( path ) {
  switch( path ) {
    case PATHS.root:
    case PATHS.home:
      return BACKGROUNDS.flying_birds;
    case PATHS.music:
      return BACKGROUNDS.boat;
    case PATHS.contact:
      return BACKGROUNDS.stone_falls;
     case PATHS.bio:
     	return BACKGROUNDS.the_launch;
  }
}

function updateBackground( background ) {
	$('body').attr( 'style', 'background:' + background );
}
