const results = document.querySelector('#results');


async function asyncFetch(value) {
    const res = await fetch(`https://swapi.co/api/${value}/`);
    const data = await res.json();
    displayResults(data, value)
}

function displayResults (data, value) {
    let output = "";
    if(value === 'films') {
        data.results.forEach(item => {
            output += `
                <div class="card p-3 m-3" style="opacity:.8">
                    <h4 class="card-title text-center">${item.title}</h4>
                    <div class="card-content">
                        <span style="text-decoration:underline">Producer</span>:${item.producer}<br>
                        <span style="text-decoration:underline">Director</span>:${item.director}<br>
                        <span style="text-decoration:underline">Release Date</span>:${item.release_date}<br>
                        <p class="text-center">${item.opening_crawl}</p>
                    </div>
                </div>`
            
        });
    }

    if(value === 'people') {
        data.results.forEach(item => {
            output += `
                <div class="card p-3 m-3" style="opacity:.8">
                    <h4 class="card-title text-center">${item.name}</h4>
                    <div class="card-content">
                        <span style="text-decoration:underline">Height</span>:${item.height}<br>
                        <span style="text-decoration:underline">Birth Year</span>:${item.birth_year}<br>
                        <span style="text-decoration:underline">Skin Color</span>:${item.skin_color}
                    </div>
                </div>`
            
        });
    }

    if(value === 'vehicles') {
        data.results.forEach(item => {
            output += `
                <div class="card p-3 m-3" style="opacity:.8">
                    <h4 class="card-title text-center">${item.name}</h4>
                    <div class="card-content">
                        <span style="text-decoration:underline">Capacity</span>:${item.cargo_capacity} kg<br>
                        <span style="text-decoration:underline">Model</span>:${item.model}<br>
                        <span style="text-decoration:underline">Manufacturer</span>:${item.manufacturer}<br>
                        <span style="text-decoration:underline">Vehicle Class</span>:${item.vehicle_class}<br>
                    </div>
                </div>`
            
        });
    }
    results.innerHTML = output;
}

// event listener for buttons
document.querySelector('#buttons').addEventListener('click', e => {
    asyncFetch(e.target.textContent.trim().toLowerCase());
})