const url = 'https://api.openweathermap.org/data/2.5/';
const lon = '';
const key = '9c1f3a6dcb576c13aa62055c8029a442';


const setQuery = (e) => {
    if(e.keyCode == '13') {
        getResult(searchBar.value);
    }
}

const getResult = (cityName) => {
    // console.log(cityName);
    let query = `${url}weather?lat=${cityName}&lon=${lon}&appid=${key}&units=metric&lang=tr`
    console.log(query);
}

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery)