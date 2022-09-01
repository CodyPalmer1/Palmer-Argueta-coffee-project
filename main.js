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
let filterProd2 = [];
let filterProd3 = [];
let filterProd4 = [];

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
        <div class="col-lg-6 d-flex justify-content-center">
        <div class="card" style="background-color: #DFB78C; font-family: 'Henny Penny', cursive; color: #49281A; border-color: #DFB78C;">
        
                <h4 class="text-center text-capitalize">${input[i].name}</h4>
                
              
                <p class="text-center fs-5" style="font-family: 'IM Fell English', serif; color: #AB6832">${input[i].roast}</p>
           
        </div>
        </div> 
        `

    }
}


//SEARCHBAR 1

document.getElementById("myInput").addEventListener("keyup", function() {
    let text = document.getElementById("myInput").value.toLowerCase();


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

//SEARCHBAR 2

document.getElementById("myInput2").addEventListener("keyup", function() {
    let text2 = document.getElementById("myInput2").value.toLowerCase();

    filterProd2 = coffees.filter(function(a) {
        if(a.name.includes(text2)) {
            return a.name;
        } else if(a.roast.includes(text2)) {
            return a.roast;
        }
    });

    if(this.value === "") {
        showProducts(coffees);
    } else {
        if(filterProd2 == "") {
            document.getElementById("para").style.display = 'block';
            document.getElementById("card").innerHTML = "";
        } else {
            showProducts(filterProd2);
            document.getElementById("para").style.display = 'none'
        }
    }
});

//DROPDOWN 1

document.getElementById("roast-selection").addEventListener("click", function() {
    let click1 = document.getElementById("roast-selection").value;

    filterProd3 = coffees.filter(function(a) {
        if(a.name.includes(click1)) {
            return a.name;
        } else if(a.roast.includes(click1)) {
            return a.roast;
        }
    });

    if(this.value === "") {
        showProducts(coffees);
    } else {
        if(filterProd3 == "") {
            document.getElementById("para").style.display = 'block';
            document.getElementById("card").innerHTML = "";
        } else {
            showProducts(filterProd3);
            document.getElementById("para").style.display = 'none'
        }
    }
});

//DROPDOWN 2

document.getElementById("roast-add").addEventListener("click", function() {
    let click2 = document.getElementById("roast-add").value;

    filterProd4 = coffees.filter(function(a) {
        if(a.name.includes(click2)) {
            return a.name;
        } else if(a.roast.includes(click2)) {
            return a.roast;
        }
    });

    if(this.value === "") {
        showProducts(coffees);
    } else {
        if(filterProd4 == "") {
            document.getElementById("para").style.display = 'block';
            document.getElementById("card").innerHTML = "";
        } else {
            showProducts(filterProd4);
            document.getElementById("para").style.display = 'none'
        }
    }
});

