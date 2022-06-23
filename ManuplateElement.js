// getting content 
// console.log($("h1").text());
// console.log($("div").html());
// console.log($("button").val());

// setting content 
$("button").html("<h2>don't click me</h2>");

// adding element on the fly 

// method  - 1
// before -- insert the element before given element 
let heading = $("#heading")
heading.click(()=>{
    heading.before(`<form>
    Enter name:<input type="text">
    <button type="submit">Submit</button>
    </form`)
    // method - 2 after -- insert element after selected element
    heading.after(`<h2>My name is vikash kumar</h2>`)
    // method - 3 append -- insert the content at end of the selected element 
    heading.append(`<h3>apple<h3/>`)
    heading.prepend(`<h1>Page Start From Here</h1>`)
})


// Diffrence between prepend append and before after is that append and prepend add element inside the element and before and after insert the element out the element 
