var jsonData = [
    {"title": "home", "url": "/"},
    {"title": "producten", "url": "/producten/"},
    {"title": "Overons", "url": "/overons/"},
    {"title": "contact", "url": "/contact/"}
  ];

var firstTitle = jsonData[0].title;
console.log(firstTitle); // This will log "home"


const navList = document.getElementById("navbar_list");

for(let i=1; i<5; i++){
    const navItem = document.createElement("a");
    navItem.classList.add("menu-items");
    navItem.setAttribute("id", `menu-${i}`);
    navItem.innerText = `Section ${i}`;
    navItem.href = `#menu-${i}`;
    navList.appendChild(navItem);
}
  