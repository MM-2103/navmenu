fetch('../data.json')
    .then((response) => response.json())
    .then((data) => {
        const home = data.title[0];
        console.log("home");
    }); 
