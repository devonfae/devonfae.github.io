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
  "Beatmania IIDX Infinitas as a remixing tool (notes chosen for sound, ignoring note chart)",
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
  "Super Mario Bros but each time you jump the window gets smaller",
  "Let’s Read the EULA",
  "Let’s play Super Mario Bros backwards",
  "Let’s go on a nature hike (periscope stream)",
  "Let’s read the Human Genome",
  "101 crimes you could be committing right now",
  "There was only one bed (live fic writing)",
  "Enjoy the beautiful Norwegian landscapes aboard the renowned Nordland Line (Nordlandsbanen)",
  "Demonstrating an algorithm for creating a marathon schedule",
  "Sin and Punishment N64 co-op mode",
  "SNOOPING AS USUAL I SEE (10 hrs)",
  "Teaching dogs poker (no limit hold-em)",
  "Let’s Dub a live tennis match",
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

let wrapper = document.getElementById("rollerwrapper");

function generateRoller() {
  for (let i = 0; i < 9; i++){
    addRollerItem();
  }
}

function makeTextFit(entry) {
  entry.style.fontSize = "2em";
  while (entry.clientWidth < entry.scrollWidth){
    let f = parseFloat(entry.style.fontSize);
    f = f - 0.1;
    entry.style.fontSize = f + "em";
  }
};

function addRollerItem() {
  let att = document.createAttribute("class");
  att.value = "rolleritem";
  let entry = document.createElement("div");
  let entrytext = document.createTextNode(getRandomFakeIdea());
  entry.appendChild(entrytext);
  entry.setAttributeNode(att);
  entry = wrapper.appendChild(entry);
  makeTextFit(entry);
}

function getRandomFakeIdea() {
  let i = Math.floor((Math.random() * fakelist.length));
  return fakelist[i];
}

function moveFirstToEnd(){
  let child = wrapper.firstElementChild;
  let wrapperTop = parseInt(wrapper.offsetTop);
  let childHeight = parseInt(child.offsetHeight);
  console.log(wrapper.offsetTop);
  console.log("top: " + wrapperTop + ", height: " + childHeight);
  child.remove();
  wrapper.appendChild(child);
  wrapper.style.top = (wrapperTop + childHeight) + "px";
}

function practiceRoll(){
  
}

let lastfakenumbers = [0,0,0,0,0,0,0,0,0];

let currentrow = 0;
function revealNextRow(){
  let p = document.getElementById("info");
  if (currentrow < schedule.length && currentrow >= 0){
    let current = schedule[currentrow];
    p.innerHTML =
        "<span id='title'>" + current.title + "</span><br />" + 
        "Presenter: " + current.runner + "<br />" + 
        current.time + " on " + current.day + " for " + current.estimate + "<br /><br />" +
        current.description;
    currentrow++;
    table.getElementsByTagName("tr")[currentrow].style.visibility = "visible";
  } else {
    p.innerHTML = "That's it!";  
  }
}
const table = document.getElementById("schedule");
generateTable(table, schedule); // generate the table first
generateTableHead(table); // then the head
generateRoller();
