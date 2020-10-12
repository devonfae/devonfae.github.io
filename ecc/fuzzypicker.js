const schedule = [
  {day: "Fri", time: "12pm", runner: "Lorem", 
   title: "Lorem ipsum dolor sit amet", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "ipsum", 
   title: "consectetur adipiscing elit", estimate: "1 hour", 
   description: "Tincidunt arcu non sodales neque sodales ut etiam sit amet. Tortor vitae purus faucibus ornare suspendisse sed. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Eget mi proin sed libero enim sed faucibus turpis in. Etiam tempor orci eu lobortis. Eget lorem dolor sed viverra ipsum nunc. Dui vivamus arcu felis bibendum ut tristique et egestas. Vulputate ut pharetra sit amet aliquam id. Mauris commodo quis imperdiet massa. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus."},
  {day: "Fri", time: "12pm", runner: "dolor", 
   title: "sed do eiusmod tempor incididunt", estimate: "1 hour", 
   description: "Nisl tincidunt eget nullam non nisi est. Lectus sit amet est placerat in egestas erat imperdiet sed. Nisl rhoncus mattis rhoncus urna neque viverra justo. Ipsum nunc aliquet bibendum enim facilisis. Non pulvinar neque laoreet suspendisse interdum consectetur libero."},
  {day: "Fri", time: "12pm", runner: "sit", 
   title: "Duis tristique sollicitudin nibh sit amet", estimate: "1 hour", 
   description: "Cras pulvinar mattis nunc sed blandit libero volutpat sed. Velit dignissim sodales ut eu sem integer vitae justo. Enim nunc faucibus a pellentesque sit amet. Ac turpis egestas maecenas pharetra convallis posuere morbi. Est velit egestas dui id ornare arcu odio ut. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum."},
  {day: "Fri", time: "12pm", runner: "amet", 
   title: "Libero volutpat sed cras ornare.", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "consectetur", 
   title: "Tincidunt arcu non sodales neque sodales ut etiam sit amet.", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "adipiscing", 
   title: "Tortor vitae purus faucibus ornare suspendisse sed.", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "elit", 
   title: "ut labore et dolore magna aliqua", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Sat", time: "12pm", runner: "sed", 
   title: "commodo nulla facilisi.", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "do", 
   title: "Lorem ipsum dolor sit amet", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "eiusmod", 
   title: "consectetur adipiscing elit", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "tempor", 
   title: "sed do eiusmod tempor incididunt", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "Lorem", 
   title: "Duis tristique sollicitudin nibh sit amet", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "Lorem", 
   title: "Libero volutpat sed cras ornare.", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "Lorem", 
   title: "Tincidunt arcu non sodales neque sodales ut etiam sit amet.", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "Lorem", 
   title: "Tortor vitae purus faucibus ornare suspendisse sed.", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "Lorem", 
   title: "ut labore et dolore magna aliqua", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Sat", time: "12pm", runner: "Lorem", 
   title: "commodo nulla facilisi.", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "Lorem", 
   title: "Lorem ipsum dolor sit amet", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "Lorem", 
   title: "consectetur adipiscing elit", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "Lorem", 
   title: "sed do eiusmod tempor incididunt", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "Lorem", 
   title: "Id aliquet lectus proin nibh nisl. Non sodales neque sodales ut etiam sit amet nisl. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Aliquam sem fringilla ut morbi. Et ultrices neque ornare aenean euismod elementum nisi quis.", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "Lorem", 
   title: "Libero volutpat sed cras ornare.", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "Lorem", 
   title: "Tincidunt arcu non sodales neque sodales ut etiam sit amet.", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "Lorem", 
   title: "Tortor vitae purus faucibus ornare suspendisse sed.", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Fri", time: "12pm", runner: "Lorem", 
   title: "ut labore et dolore magna aliqua", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
  {day: "Sat", time: "12pm", runner: "Lorem", 
   title: "commodo nulla facilisi.", estimate: "1 hour", 
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Libero volutpat sed cras ornare."},
];

const fakelist = [
  "Beating Super Mario Bros. as slowly as possible",
  "Six-Players No-Controller run of Elite Beat Agents",
  "Gamefying the lunch I just got from taco bell",
  "Waiting for Godot (Minecraft)",
  "A Dramatic Reading Of Blaseball Academic Literature",
  "Drawing Fanart of Unreleased Videogames",
  "Sportscasting Fall Guys",
  "My Pet Snake Is Bad At TGM",
  "Twitch Plays Free Enterprise",
  "Final Fantasy Summons Arm Wrestling Bracket predictions",
  "I Am Going To Acquire Points",
  "Destiny 2 (100%)",
  "Beatmania IIDX Infinitas as a musical instrument",
  "Boardgame Rating (By Taste of Meeple)",
  "Starcraft / Warcraft 3 1p1c ladder matches",
  "Dramatic reading of the Bee Movie script",
  "Let's Listen: I Am Sitting in a Room",
  "watch my cats sleep",
  "I watch youtube videos on camera (I am on camera, not the videos)",
  "90s arcade ambiance (6 MAME windows, 0 controllers)",
  "Supportive Funky Kong calls you poggers (ASMR) (LARP)",
  "Twitch Plays Street Fighter IV",
  "Let’s play Progress Quest",
  "Super Mario Bros but each time you jump the window shrinks",
  "Let’s Read the EULA",
  "Let’s play Super Mario Bros backwards",
  "Let’s go on a nature hike (periscope stream)",
  "Let’s read the Human Genome",
  "101 crimes you could be committing right now",
  "There was only one bed (live fic writing)",
  "Enjoy the beautiful Norwegian landscapes aboard the Nordlandsbanen",
  "Demonstrating an algorithm for creating a marathon schedule",
  "Sin and Punishment N64 co-op mode",
  "SNOOPING AS USUAL I SEE (10 hrs)",
  "Teaching dogs poker (no limit hold-em)",
  "Let’s Dub a live tennis match",
  "Kaizo TASes scored as Olympic gymnastics routines",
  "Write a song on DK Jungle Beat Bongos",
  "Twitch presents: 4’33” remixes",
  "Cake baking: Any% No Flour",
  "Real Estate Brokering In Monster Infested Realms",
  "Hamtaro Educational Game- Chat Learn%",
  "Video Game Starting Screen Mash-Ups",
  "Idle Dice Roll Until we Get a Yahtzee", 
  "Running with Scissors Low%",
  "VVVVVVery Good Fan-Made Levels",
  "VVVVVVery Goni Odce",
  "Brainstorming Live a Live sequel ('Dead b Dead')",
  "Watch_C4TS",
  "Acquiring Prime Scores in Super Mario Bros 3",
  "Hey You! Pikachu (Otomatone only run)",
  "Hades RBO (We just play Dante's Inferno)",
  "Hey I Bet I Could Get This In The Trash Can From Here",
  "Switch Cartridge Taste Test",
  "Identifying Famous Works of Art from Quite a Long Way Away (no glasses%)",
  "My Bird Sucks At Seaman",
  "Cat Pictures slideshow",
  "Ranking 150 Gen 1 Pokemon by Fuzziness",
  "Among Us Any%",
  "Civilization 1–6 six games one controller",
  "Defining the Metroidvania",
  "Let’s Listen to the Red Army Choir",
  "Grinding to level 99 on slimes while I play unfitting music",
  "A list of EarthBound enemies I’d like to have as a mom someday",
  "Let’s Watch all 44 Super Sentai openings in order",
  "Let’s Watch Pretty Guardian Sailormoon at 10x speed",
  "Tetris NES any% pacifist WR attempts",
  "Cloudwatching but with analog TV static",
  "Let’s figure out how to land this thing before the fuel runs out",
  "Twitch orders pizza (channel points to bid on toppings)",
];


function generateTableHead(table) {
  let row = table.createTHead().insertRow();
  let headers = ["Day","Time","Presenter","Presentation","Length"];
  for (let element of headers){
    let th = document.createElement("th");
    let text = document.createTextNode(element);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      if (key != "description"){
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
}

const wrapper = document.getElementById("rollerwrapper");
let symbolcounter = 8;

function generateRoller() {
  for (let i = 0; i < 9; i++){
    addRollerItem();
  }
}

function makeTextFit(entry) {
  entry.style.fontSize = "2em";
  entry.style.width = "700px";
  while (entry.clientWidth < entry.scrollWidth){
    let f = parseFloat(entry.style.fontSize);
    f = f - 0.05;
    entry.style.fontSize = f + "em";
  };
  entry.style.width = "800px";
};

function addRollerItem() {
  let entry = document.createElement("div");
  let entrytext = document.createTextNode(getRandomFakeIdea());
  entry.appendChild(entrytext);
  entry.classList.add("rolleritem");
  switch (symbolcounter){
    case 2:
      entry.classList.add("q");
      break;
    case 4:
      entry.classList.add("nice");
      break;
    case 6:
      entry.classList.add("q");
      break;
    case 8:
      entry.classList.add("good");
      symbolcounter = 0;
      break;
    default:
      entry.classList.add("donk");
  }
  symbolcounter++;
  entry = wrapper.appendChild(entry);
  makeTextFit(entry);
}

let winningitem;
function addRiggedItem() {
  let entry = document.createElement("div");
  let entrytext = document.createTextNode(schedule[currentrow].title);
  entry.appendChild(entrytext);
  entry.classList.add("rolleritem");
  entry.classList.add("winningitem");
  switch (symbolcounter){
    case 2:
      entry.classList.add("q");
      break;
    case 4:
      entry.classList.add("nice");
      break;
    case 6:
      entry.classList.add("q");
      break;
    case 8:
      entry.classList.add("good");
      symbolcounter = 0;
      break;
    default:
      entry.classList.add("donk");
  }
  symbolcounter++;
  entry = wrapper.appendChild(entry);
  makeTextFit(entry);
  winningitem = entry;
}

function getRandomFakeIdea() {
  let i = Math.floor((Math.random() * fakelist.length));
  let tries = 8;
  while ((lastfakenumbers.includes(i)) && (tries > 0)) {
    i = Math.floor((Math.random() * fakelist.length));
    tries--;
  }
  lastfakenumbers.push(i);
  lastfakenumbers.shift();
  return fakelist[i];
}

function moveFirstToEnd(){
  document.getElementById("tick1").currentTime=0;
  document.getElementById("tick1").play();
  let child = wrapper.firstElementChild;
  let wrapperTop = parseInt(wrapper.offsetTop);
  let childHeight = parseInt(child.offsetHeight);
  if (!child.classList.contains("winningitem")) addRollerItem();
  child.remove();
  wrapper.style.top = (wrapperTop + childHeight) + "px";
}

let animation;
function startRoll(){
  clearInterval(animation);
  document.getElementById("spinbutton").style.display = "none";
  document.getElementById("waitbutton").style.display = "inline-block";
  animation = setInterval(rollUp, 10);
}

function stopRoll(){
  clearInterval(animation);
  atmax = false;
  document.getElementById("stopbutton").style.display = "none";
  document.getElementById("waitbutton").style.display = "inline-block";
  deceleration = Math.random() / 2;
  animation = setInterval(rollDown, 10);
}

let subpixel = 0;
let velocity = 0;
let maxv = 1500;
let atmax = false;
let acceleration = 20;
let deceleration;

function rollUp(){
  let top = parseInt(wrapper.offsetTop);
  subpixel += velocity;
  let dx = Math.floor(subpixel/100);
  subpixel -= 100*dx;
  top -= dx;
  if (!atmax) {
    velocity += acceleration;
    if (velocity > maxv) {
      velocity = maxv;
      atmax = true;
      document.getElementById("waitbutton").style.display = "none";
      document.getElementById("stopbutton").style.display = "inline-block";
    }
  }
  wrapper.style.top = top + "px";
  if (top < -100) {
    moveFirstToEnd();
  }
}

function rollDown(){
  let top = parseInt(wrapper.offsetTop);
  subpixel += velocity;
  let dx = Math.floor(subpixel/100);
  subpixel -= 100*dx;
  top -= dx;
  velocity = velocity*(0.99+(deceleration/100)) - 1;
  if (velocity < 380) {
    clearInterval(animation);
    addRiggedItem();
    animation = setInterval(intercept, 10);
  }
  wrapper.style.top = top + "px";
  if (top < -100) {
    moveFirstToEnd();
  }
}

function intercept(){
  let top = parseInt(wrapper.offsetTop);
  subpixel += velocity;
  let dx = Math.floor(subpixel/100);
  subpixel -= 100*dx;
  top -= dx;
  velocity = velocity - 2;
  if (velocity < 0) {
    clearInterval(animation);
    win();
  } else if (velocity < 120) {
    velocity -= 1;
  }
  wrapper.style.top = top + "px";
  if (top < -100) {
    moveFirstToEnd();
  }
}

let flashcounter = 0;
function win(){
  flashcounter = 4;
  let ff = Math.floor(Math.random()*12)+1;
  document.getElementById("fanfare"+ff).play();
  animation = setInterval(flash, 400);
}

function flash(){
  switch (flashcounter){
    case 4:
      winningitem.classList.add("winblue");
      break;
    case 3:
      winningitem.classList.remove("winblue");
      winningitem.classList.add("winpink");
      break;
    case 2:
      winningitem.classList.remove("winblue");
      winningitem.classList.add("winblue");
      break;
    case 1:
      winningitem.classList.remove("winblue");
      winningitem.classList.add("winpink");
      break;
    case 0:
      winningitem.classList.remove("winpink");
      clearInterval(animation);
      revealNextRow();
  }
  flashcounter--;
}

let lastfakenumbers = [0,0,0,0,0,0,0,0,0];

let currentrow = 0;

function revealNextRow(){
  clearInterval(animation);
  velocity = 0;
  atmax = false;
  document.getElementById("waitbutton").style.display = "none";
  document.getElementById("stopbutton").style.display = "none";
  document.getElementById("spinbutton").style.display = "inline-block";
  let p = document.getElementById("info");
  if (currentrow < schedule.length && currentrow >= 0){
    let current = schedule[currentrow];
    p.innerHTML =
        "<span id='title'>" + current.title + "</span><br />" + 
        "Presenter: " + current.runner + "<br />" + 
        current.time + " on " + current.day + " for " + current.estimate + "<br /><br />" +
        current.description;
    table.getElementsByTagName("tr")[currentrow+1].style.visibility = "visible";
    currentrow++;
  } else {
    p.innerHTML = "That's it!";  
  }
}

function goBack(){
  clearInterval(animation);
  velocity = 0;
  atmax = false;
  document.getElementById("waitbutton").style.display = "none";
  document.getElementById("stopbutton").style.display = "none";
  document.getElementById("spinbutton").style.display = "inline-block";
  let p = document.getElementById("info");
  if (currentrow > 1){
	currentrow--;
    table.getElementsByTagName("tr")[currentrow+1].style.visibility = "collapse";
    let current = schedule[currentrow-1];
    p.innerHTML =
        "<span id='title'>" + current.title + "</span><br />" + 
        "Presenter: " + current.runner + "<br />" + 
        current.time + " on " + current.day + " for " + current.estimate + "<br /><br />" +
        current.description;
  } else {
    currentrow = 0;
    table.getElementsByTagName("tr")[currentrow+1].style.visibility = "collapse";
    p.innerHTML = "That's it!";  
  }
}

const table = document.getElementById("schedule");
generateTable(table, schedule); // generate the table first
generateTableHead(table); // then the head
generateRoller();
