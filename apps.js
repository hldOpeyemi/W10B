let descripton = document.getElementById("descripton");
descripton.style.backgroundColor = "aqua"

document.querySelector("section").style.backgroundColor = "blue";

let articles = document.querySelectorAll(".article");
console.log(articles)

let counter = 0
while (counter < articles.length) {
    console.log(counter)
    articles[counter].style.fontSize = "30px";
    counter = counter + 1;
}


let head = document.getElementById('header');
head[`innerHTML`] = `LION`
head.insertAdjacentHTML(`afterend`, `<h3>The King of the Jungle</h3>`)

let div_class = document.getElementsByClassName("div");
div_class[0].innerHTML = "Hello Lion"