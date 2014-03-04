$(document).ready(function(){ 
 //INSERT CODE HERE

 //QUESTION 1
 function Dog() { }

 Dog.prototype.bark = function() {
     return "woof";
 };

 function ShibaInu() {
 	Dog.call(this); 
 };

 ShibaInu.prototype = new Dog();

 ShibaInu.prototype.constructor = ShibaInu;

 ShibaInu.prototype.bark = function() {
 	return "much wow very javascript";
 };


 //QUESTION 3

 $( '.secondbutton' ).click(function() {
 	$( '.secondheading' ).text( "Hedgehogs are the best" );
 	$( '.secondheading').css('color', '#43C6DB');
 });

//Question 4

 $( '#task4' ).click(function() {
 	
 	$( '#hipcat').css('webkit-filter', 'blur(5px) hue-rotate(60deg)');

 });

 //QUESTION 5
  $( '#task5' ).click(function() {
 	$( '.wheel').css('webkit-animation-name', 'spin' );
 	$( '.spincar').css('webkit-animation-play-state' , 'running');
 });

 //QUESTION 6

$('.nyancat').animate({
	left: 1500
}, {
	duration: 1500
} );

$('.rainbows').animate({
	width: '+=1500'
}, {
	duration: 1500,
});

});