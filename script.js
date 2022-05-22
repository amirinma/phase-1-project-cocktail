
//--------------------(FUNCTION RENDERING THE DOM)--------------------
function renderCockTailOne(cockTail){
    cockTail()
    .then((data)=>{
      const drinks = data.drinks
      for (drink of drinks){
        if (drinks.indexOf(drink) < drinks.length-14){
          let card = document.createElement('div')
          card.className = 'card'
          card.id = `${drink.idDrink}`
          card.innerHTML=`
          <h2>${drink.strDrink}</h2>
          <img src = "${drink.strDrinkThumb}" />
          <p id="description">${drink.strInstructions}</p>
          <button class="remove">Remove</button>
          <button class="favorite">Select</button>
          `
          document.querySelector('#extra').appendChild(card)
  
          card.querySelector('.favorite').addEventListener('click', ()=>{  //Event Listener
              const el = card.querySelector('.favorite')
              el.textContent = "Slected"
              card.style.backgroundColor = "#e2ea7b";
          })
          card.querySelector('.remove').addEventListener('click', (e)=>{//Event Listener
            e.target.parentElement.remove()
            })
        }
      }
    })
  }
  renderCockTailOne(getData)
  
  //--------------------(FETCHING THE API 'ENTERY POINT')--------------------
  function getData() {
      const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
              'X-RapidAPI-Key': 'fedf1dd524msh1cf534605192167p136515jsn5200bf26f1a5'
          }
      };
  
      const response= fetch('https://the-cocktail-db.p.rapidapi.com/popular.php', options)
          .then(response => response.json())
          .then(response => response)
          .catch(err => console.error(err));
      return response
  }
  // DOM CONTENT LOADED EVENT LISTENER >====================
  //--------------------(FUNCTION RENDERING THE DOM)--------------------
  document.addEventListener('DOMContentLoaded', ()=>{
      document.querySelector('#add-element').addEventListener('submit', submitHandler)
     
  })
    
  function submitHandler(e){
      e.preventDefault()
      let cocktailObj = {
          name: e.target.nameInput.value,
          image: e.target.imageInput.value,
          info: e.target.infoInput.value
      }
      addCocktail(cocktailObj)
  }
  
  function addCocktail(e){
      const cock = document.createElement('div')
      cock.className = 'card'
      cock.id = ''
      cock.innerHTML = `
      <h2>${e.name}</h2>
      <img src="${e.image}"/>
      <p>${e.info}</P>
      `
      document.querySelector('#extra').appendChild(cock)
  }
  
          
  
  
  