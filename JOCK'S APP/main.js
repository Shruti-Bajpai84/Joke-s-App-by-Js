let paragraph = document.querySelector("p") 
let button = document.querySelector("button")

function jokes() {
    fetch("https://v2.jokeapi.dev/joke/Any")

      .then((response) => response.json()
      .then((data) => {
        if (data.type === "single") {
          console.log(data);
          return paragraph.textContent = data.joke
        } else {
          return paragraph.textContent = data.delivery + data.setup
        }
        // setData(data.type)
      }))

    }

  button.addEventListener("click", () =>{
    jokes()
  })
 