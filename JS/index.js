window.onload = (event) => {
var jsonData = [
    {"title": "home", "url": "/"},
    {"title": "producten", "url": "/producten/"},
    {"title": "Overons", "url": "/overons/"},
    {"title": "contact", "url": "/contact/"}
  ];

var firstTitle = jsonData[0].title;
console.log(firstTitle); // This will log "home"

function createMenu(data) {

var menu = document.getElementById('navbar_list');

            data.forEach(function(item) {
                var li = document.createElement('li');
                var a = document.createElement('a');

                a.href = item.url;
                a.textContent = item.title;

                li.appendChild(a);
                menu.appendChild(li);
            });
}

createMenu(jsonData);

};