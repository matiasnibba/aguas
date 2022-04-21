

function validarRegistro() {
    
    let contenedorApi = document.getElementById("contenedorApi") 
    let postal =document.getElementById("postal")
    var dire = document.getElementById("direccion").value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com',
            'X-RapidAPI-Key': '9a68e2d10fmsh5fdf2e15447074dp149428jsnb3a24778ced3'
        }
    };
    const url=`https://trueway-geocoding.p.rapidapi.com/Geocode?address=${dire}&language=en`
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let name = data.results[0].country
            let postal1 = data.results[0].postal_code
            contenedorApi.textContent = name
            postal.textContent=postal1

            
        })

        .catch(err => console.error(err));
}



