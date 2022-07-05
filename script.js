const button = document.getElementById('button');
let image = document.getElementById('image');
let pokenumber = document.getElementById('number');
let pokename = document.getElementById('name');
const changepokemon = async ()=>{
    let randomNumber = Math.ceil(Math.random()*150)+1;  
    // [1,152[
    let requestString=`https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    let data = await fetch(requestString);   // query
    console.log(data);

    let response = await data.json();
    console.log(response);
    image.src = response.sprites.front_default;
    pokenumber.textContent=`#${response.id}`;
    pokename.textContent=response.name;
}

changepokemon()
button.addEventListener("click",changepokemon)