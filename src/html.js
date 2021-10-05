const generateManager = function (manager) {
    return `
    <div class="col">
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <p class="card-text">${manager.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item">Email: ${manager.email}</li>
    <li class="list-group-item">Office Number: ${manager.office}</li>
  </ul>
</div>
</div>
    `
}

const generateEngineer = function (engineer) {
    return `
    <div class="col">
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <p class="card-text">${engineer.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.id}</li>
    <li class="list-group-item">Email: ${engineer.email}</li>
    <li class="list-group-item">Office Number: ${engineer.github}</li>
  </ul>
</div>
</div>
    `
}

const generateIntern = function (intern) {
    return `
    <div class="col">
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <p class="card-text">${intern.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.id}</li>
    <li class="list-group-item">Email: ${intern.email}</li>
    <li class="list-group-item">Office Number: ${intern.school}</li>
  </ul>
</div>
</div>
    `
}

const generateHTML = function (employeeArray) {
    cardArray = [];
    for (let i = 0; i < employeeArray.length; i++) {
        const employee = employeeArray[i];

        if (employee.role === "Manager") {
            const managerCard = generateManager(employee);
            cardArray.push(managerCard);
        }
        if (employee.role === "Engineer") {
            const engineerCard = generateEngineer(employee);
            cardArray.push(engineerCard)
        }
        if (employee.role === "Intern") {
            const internCard = generateIntern(employee);
            cardArray.push(internCard)
        }
    }
    const teamCards = cardArray.join("")
    const generateAll = bodyHTML(teamCards)
    return generateAll;
}


const bodyHTML = function (teamCards) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="Description" content="Enter your description here" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  <title>Team Profile</title>
</head>

<body>

<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Navbar</span>
  </div>
</nav>

<main>
<div class="container">
  <div class="row justify-content-center">
   
${teamCards}

</div>
</div>
</main>

</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>

</html>
    `
}

module.exports = generateHTML