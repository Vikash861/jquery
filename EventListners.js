// adding event listners using jquery
$("button").click(() => $("h1").css("background-color","red"));
//$("button").click(() => $("#heading").hide()); // selecting particular element using id and hide method simply hide the element

// selecting element using class 
$("button").click(()=>{
    $(".para").show(); // method show simply block display
})

$("#search").attr("autocomplete","off");
$("#search").keypress((event)=>{ // when key will be pressed It will fire
    // console.log(event.key );
    // $("h1").text(event.key);
})

// second way to add event listners
$("button").on("click",()=>{
    $("h1").toggle("fast"); // toggle used for show and hide element
})