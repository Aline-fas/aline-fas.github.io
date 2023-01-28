const el = document.querySelector("#text");
// const text = "Desenvolvedora Full-Stack em formação";
// const interval = 150;

// function showText(el, text, interval){

//     const char = text.split("").reverse();
//     const typer = setInterval(() => {

//         if(!char.length){
//             return clearInterval(typer);
//         }
//         const next = char.pop();

//         el.innerHTML += next;

//     },interval);
// }

// showText(el, text, interval);

document.addEventListener('DOMContentLoaded', ()=>{
    new TypeIt(".animated",{
        speed: 200,
        // strings: ["javascript" , "PHP", "SQL"],
        loop: true,
    }).type('Full-Stack em formação ',{delay:200}).delete(23)
    .type('JavaScript ',{delay:500}).delete(11)
    .type('PHP ',{delay:500})
    .go()
})