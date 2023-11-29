const getJoke = document.getElementById("joke-body");

const clickBtn = document.getElementById("joke-btn");

clickBtn.addEventListener("click" , async (e) => {
    getJoke.innerHTML="Loading..."
    const response = await fetch ("https://icanhazdadjoke.com/", {
        headers :{Accept: "application/json"},
    });
     const data = await response.json();

     getJoke.innerHTML = data && data.joke

     console.log({data});
})
