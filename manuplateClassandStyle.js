// getting html element css 

// const color = $("h1").css("color");
// console.log(color)

// note - javascript not meant for adding css 

// adding class to an element using jquery 
// method -- addClass 
// $("h1").addClass("big-title");

// toggling class
const h1 = $("h1")
h1.click(function(){
    h1.toggleClass("big-title")
})

// removing class 
// method -- removeClass 
// $("h1").removeClass("big-title");

// adding multiple classes
// $("h1").addClass("big-title margin");

// hasClass method - a method that tells a class attach to the element or not

// console.log($("h1").hasClass("big-title"));
// console.log($("h1").hasClass("bold"))
