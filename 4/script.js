/* Implement your solution here */
function renderPlanets(arr) {
  let main = document.querySelector('main');
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  let thPlanet = document.createElement('th');
  thPlanet.textContent = 'Planet'
  let thMass = document.createElement('th');
  thMass.textContent = 'Mass'
  let thPeriod = document.createElement('th');
  thPeriod.textContent = 'Period'
  main.appendChild(table);
  table.appendChild(tbody);
  table.appendChild(thead);
  thead.appendChild(thPlanet);
  thead.appendChild(thMass);
  thead.appendChild(thPeriod);
  for (let obj of arr) {
    let tr =  document.createElement('tr');
    let tdPlanet = document.createElement('td');
    let tdMass = document.createElement('td');
    let tdPeriod = document.createElement('td');
    tdPlanet.textContent = obj.name;
    tdMass.textContent = obj.mass;
    tdPeriod.textContent = obj.period;
    tr.appendChild(tdPlanet);
    tr.appendChild(tdMass);
    tr.appendChild(tdPeriod);
    tbody.appendChild(tr); 
  }
}
/* Do not touch the code below this line */
renderPlanets([
  {name: 'Mercury', mass:  0.06, period: 0.24, moons: 0},
  {name: 'Venus', mass: 0.82, period: 0.62, moons: 0},
  {name: 'Earth', mass: 1.0, period: 1.0, moons: 1},
  {name: 'Mars', mass: 0.11, period: 1.88, moons: 2},
  {name: 'Jupiter', mass: 317.8, period: 11.86, moons: 79},
  {name: 'Saturn', mass: 95.2, period: 29.46, moons: 62},
  {name: 'Uranus', mass: 14.6, period: 84.01, moons: 27},
  {name: 'Neptune', mass: 17.2, period: 164.8, moons: 14},
]);