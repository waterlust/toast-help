function getNav() {
    fetch("./nav.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("navButtons").innerHTML = data;
      highlightNav();
    });

}

function highlightNav() {

    let myIDArray = ['menu', 'locations', 'contact'];
    let arrayLength = myIDArray.length;
    for (var i = 0; i < arrayLength; i++) {
        //alert('looking for ' + myIDArray[i] + ' in ' + window.location.pathname + ' = ' + window.location.pathname.indexOf(myIDArray[i]));
        let found = window.location.pathname.indexOf(myIDArray[i]);
        if (found != -1) {
            //alert('found one');
            document.getElementById('but_home').classList.replace('button-active', 'button-inactive');
            document.getElementById('but_' + myIDArray[i]).classList.replace('button-inactive', 'button-active');
        }
    }
}