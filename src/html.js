const generateManager = function (manager) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <p class="card-text">${manager.getRoll()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item">Email: ${manager.email}</li>
    <li class="list-group-item">Office Number: ${manager.office}</li>
  </ul>
</div>
    `
}

const generateEngineer = function (engineer) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <p class="card-text">${engineer.getRoll()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.id}</li>
    <li class="list-group-item">Email: ${engineer.email}</li>
    <li class="list-group-item">Office Number: ${engineer.github}</li>
  </ul>
</div>
    `
}

const generateIntern = function (intern) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <p class="card-text">${intern.getRoll()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.id}</li>
    <li class="list-group-item">Email: ${intern.email}</li>
    <li class="list-group-item">Office Number: ${intern.school}</li>
  </ul>
</div>
    `
}

generateHTML = function (manager, engineer, intern) {
    cardArray = [];

    if (manager.role === "Manager") {
        const managerCard = generateManager();
        cardArray.push(managerCard);
    }
    if (engineer.role === "Engineer") {
        const engineerCard = generateEngineer();
        cardArray.push(engineerCard)
    }
    if (intern.role === "Intern") {
        const internCard = generateIntern();
        cardArray.push(internCard)
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
${teamCards}
</main>

</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>

</html>
    `
}

module.exports = generateHTML