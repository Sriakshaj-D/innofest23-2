
function generate(){
location2 = document.getElementById("input_location").value;
console.log(location2);
place = location2.toLowerCase();
pre_prompt = document.getElementById("input_prompt").value;
prompt = pre_prompt.toLowerCase();
console.log("Description of Building:"+ prompt);
if(prompt == "book"){
    console.log("yep2");
}
if(place == "dubai"){
    console.log("yep");
}
if(prompt == "a building shaped as a book" && place == "dubai"){
    console.log("yep3");
    window.location= "index2.html";
}                                                                                                                                                                                                                                                                                                   
}