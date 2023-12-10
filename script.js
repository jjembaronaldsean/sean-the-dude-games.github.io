   //nav with taggle


let game_bx_1 = document.getElementById('game_bx_1');
let game_bx_1_left_btn = document.getElementById('game_bx_1_left_btn');
let game_bx_1_right_btn= document.getElementById('game_bx_1_right_btn');



 game_bx_1_left_btn .addEventListener('click',()=>{
    game_bx_1.scrollLeft -= 250;
 });

 game_bx_1_right_btn .addEventListener('click',()=>{
    game_bx_1.scrollLeft  += 250;
 });  



 

 let day_night= document.getElementById('day_night');
 let day_night2= document.getElementById('day_night2');
    day_night2.style.display = "none"
day_night.addEventListener('click', () =>{
   document.documentElement.style.setProperty('--color-1', 'rgb(184,184,184,.5)');
   document.documentElement.style.setProperty('--color-2', '#000');
   document.documentElement.style.setProperty('--color-3', '#fff');
   document.documentElement.style.setProperty('--color-4', 'rgb(0,0,0,.5)');
   document.documentElement.style.setProperty('--color-5', '#663da6');
  
   day_night2.style.display = "unset";
});

day_night2.addEventListener('click', () =>{
   document.documentElement.style.setProperty('--color-1', '#262b3f');
   document.documentElement.style.setProperty('--color-2', '#fff');
   document.documentElement.style.setProperty('--color-3', '#1e2337');
   document.documentElement.style.setProperty('--color-4', 'rgb(255,255,255,.5)');
   document.documentElement.style.setProperty('--color-5', 'greenyellow');
  
   day_night2.style.display = "none";
});

    

//Battery Navigator
  let active_battery = document.getElementById(active_battery);
  let battery_icon = document.getElementById(battery_icon);
  let battery_level = document.getElementById(battery_level);
  let audio1 = new Audio(chain_smokers.mp3);
  //audio.play();


  navigator.getBattery().then(battery =>{
   const battery_level_change = () => {
      battery_level.innerText = (battery_level * 100) + "%";
   } 
   setInterval(battery_level_change, 1000);
   battery_level_change()


   battery_icon.value = battery.charging;
   //alert(battery_icon.value);


   battery.addEventListener('cahrgingchange', ()  => {
      switch (battery.charging)  {
         case true:
            battery_icon.classList.remove('bi-battery-half');
            battery_icon.classList.add('bi-battery-charging');
            active_battery.classList.add('active-battery');
            battery_icon.style.color = "#fff";
            audio1.play();
            break;
         case false:
            battery_icon.classList.add('bi-battery-half');
            battery_icon.classList.remove('bi-battery-charging');
            active_battery.classList.remove('active-battery');
            battery_icon.style.color = "unset";
            break;
      }

   })
   
  })



  let wifi = document.getElementById('wifi');
  const wifi_change = () => {
   if (navigator.onLine)  {
      wifi.style.color = "var(--color-5)";
   } else {
      wifi.style.color = "";
   }
  }
  setInterval(wifi_change,  100);
  wifi_change();










//SEARCH

// Get elements by ID
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results");

// Search function
function search(event) {
  event.preventDefault(); // Prevent form submission

  // Get the search term
  const searchTerm = searchBox.value.trim();

  // Clear previous results
  searchResults.innerHTML = "";

  // Your search logic here
  // You can use the searchTerm to fetch data from an API or filter local data

  // Example: Display a simple message
  searchResults.innerHTML = `Search results for "${searchTerm}"`;
}

// Add event listeners
searchForm.addEventListener("submit", search);
searchButton.addEventListener("click", search);

// Focus on the search box on page load
searchBox.focus();


