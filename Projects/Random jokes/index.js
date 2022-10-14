const joke = document.getElementById('joke');
const joke_btn = document.getElementById('joke_btn');


const setHeader ={
    headers:{
        Accept:"application/json"
    }
}
const jokesButton = function () {
    fetch('https://icanhazdadjoke.com/', setHeader)
    .then((res)=>{
       return res.json();
    })
    .then((data) =>{
        joke.innerHTML = data.joke;
    })
    .catch((error) => {
        console.log(error);
    })
} 


joke_btn.addEventListener('click', jokesButton);
jokesButton();