// creates HTML for manager card in temperate literal 
const generateManager = function (manager) {
  return `
    <div class="col">
    <div class="card mx-2" style="width: 18rem;">
  <div class="card-body text-white bg-dark">
    <h5 class="card-title">${manager.name}</h5>
    <p class="card-text"><i class="fas fa-thumbtack"></i> ${manager.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item"> Email:  <a href="mailto:${manager.email}">${manager.email}</a></li>
    <li class="list-group-item">Office Number: ${manager.office}</li>
  </ul>
</div>
</div>
    `
}
// creates HTML for engineer card in temperate literal 
const generateEngineer = function (engineer) {
  return `
    <div class="col">
    <div class="card mx-2" style="width: 18rem;">
  <div class="card-body text-white bg-dark">
    <h5 class="card-title">${engineer.name}</h5>
    <p class="card-text"><i class="fas fa-laptop-code"></i> ${engineer.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.id}</li>
    <li class="list-group-item"> Email:  <a href="mailto:${engineer.email}">${engineer.email}</a></li>
    <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener">${engineer.github}</a></li>
  </ul>
</div>
</div>
    `
}
// creates HTML for intern card in temperate literal 
const generateIntern = function (intern) {
  return `
    <div class="col">
    <div class="card mx-2" style="width: 18rem;">
  <div class="card-body text-white bg-dark">
    <h5 class="card-title">${intern.name}</h5>
    <p class="card-text"><i class="fas fa-graduation-cap"></i> ${intern.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.id}</li>
    <li class="list-group-item"> Email:  <a href="mailto:${intern.email}">${intern.email}</a></li>
    <li class="list-group-item">School: ${intern.school}</li>
  </ul>
</div>
</div>
    `
}
// input from inquirer questions passed through in employeeArray
const generateHTML = function (employeeArray) {
  cardArray = []; // empty array for cards to be pushed on to
  for (let i = 0; i < employeeArray.length; i++) { // loop so multiple cards can be added
    const employee = employeeArray[i];
    // conditional based on role so cards can be pushed on to empty array
    if (employee.getRole() === "Manager") { 
      const managerCard = generateManager(employee);
      cardArray.push(managerCard);
    }
    if (employee.getRole() === "Engineer") {
      const engineerCard = generateEngineer(employee);
      cardArray.push(engineerCard)
    }
    if (employee.getRole() === "Intern") {
      const internCard = generateIntern(employee);
      cardArray.push(internCard)
    }
  }
  const teamCards = cardArray.join("") // joins cards together 
  const generateAll = bodyHTML(teamCards) // passes cards into supporting html function 
  return generateAll; // returns entire html code
}
// creates supporting html in temperate literal with the cards' html in ${teamCards}
const bodyHTML = function (teamCards) {
  return `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="Description" content="Enter your description here" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  <title>Team Profile</title>
</head>

<body>

<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1"><i class="fas fa-users"></i> Team Profile</span>
  </div>
</nav>

<main>
<div class="container my-3">
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
// exports generateHTML function into index.js
module.exports = generateHTML