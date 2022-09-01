// "use strict"
//
// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }
//
// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }
//
// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }
//
// // from
// var coffees = [
//     {id: 1, name: 'Light City', roast: 'light'},
//     {id: 2, name: 'Half City', roast: 'light'},
//     {id: 3, name: 'Cinnamon', roast: 'light'},
//     {id: 4, name: 'City', roast: 'medium'},
//     {id: 5, name: 'American', roast: 'medium'},
//     {id: 6, name: 'Breakfast', roast: 'medium'},
//     {id: 7, name: 'High', roast: 'dark'},
//     {id: 8, name: 'Continental', roast: 'dark'},
//     {id: 9, name: 'New Orleans', roast: 'dark'},
//     {id: 10, name: 'European', roast: 'dark'},
//     {id: 11, name: 'Espresso', roast: 'dark'},
//     {id: 12, name: 'Viennese', roast: 'dark'},
//     {id: 13, name: 'Italian', roast: 'dark'},
//     {id: 14, name: 'French', roast: 'dark'},
// ];
//
// var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
// var roastSelection = document.querySelector('#roast-selection');
//
// tbody.innerHTML = renderCoffees(coffees);
//
// submitButton.addEventListener('click', updateCoffees);



let filterProd = [];
var coffees = [
    {id: 1, name: 'light city', roast: 'light'},
    {id: 2, name: 'half city', roast: 'light'},
    {id: 3, name: 'cinnamon', roast: 'light'},
    {id: 4, name: 'city', roast: 'medium'},
    {id: 5, name: 'american', roast: 'medium'},
    {id: 6, name: 'breakfast', roast: 'medium'},
    {id: 7, name: 'high', roast: 'dark'},
    {id: 8, name: 'continental', roast: 'dark'},
    {id: 9, name: 'new orleans', roast: 'dark'},
    {id: 10, name: 'european', roast: 'dark'},
    {id: 11, name: 'espresso', roast: 'dark'},
    {id: 12, name: 'viennese', roast: 'dark'},
    {id: 13, name: 'italian', roast: 'dark'},
    {id: 14, name: 'french', roast: 'dark'},
];

showProducts(coffees);


function showProducts(input) {

    document.getElementById("card").innerText = "";


    for(var i = 0; i < input.length; i++) {
        document.getElementById("card").innerHTML +=
            `
        <div class="col-lg-2 mt-3">
        <div class="card d-flex justify-content-center p-2">
        
                <h4 class="text-capitalize">${input[i].name}</h4>
                
              
                <p class="mt-2">${input[i].roast}</p>
           
        </div>
        </div> 
        `

    }
}


document.getElementById("myInput").addEventListener("keyup", function() {
    let text = document.getElementById("myInput").value;



    filterProd = coffees.filter(function(a) {
        if(a.name.includes(text)) {
            return a.name;
        } else if(a.roast.includes(text)) {
            return a.roast;
        }
    });

    if(this.value === "") {
        showProducts(coffees);
    } else {
        if(filterProd == "") {
            document.getElementById("para").style.display = 'block';
            document.getElementById("card").innerHTML = "";
        } else {
            showProducts(filterProd);
            document.getElementById("para").style.display = 'none'
        }
    }
});