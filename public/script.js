let github = document.getElementById("github");
let repos = document.getElementById("repos");

let user;
let userrepos;

window.onload = function() {
  fetch("https://api.github.com/users/Ege19055").then(async function(data) {
    user = await data.json();
  })

  fetch("https://api.github.com/users/Ege19055/repos").then(async function(data) {
    userrepos = await data.json();
  })

  setTimeout(function() {
    github.innerHTML = `
    <h4>${user.login}</h4>
    <div class="d-flex align-items-center gap-0">
    <span style="margin-right:20px"><i class="fa-light fa-users"></i> <b>${user.followers}</b> Takipçi</span>
    <li style="padding:0;margin:0;padding-left:0;padding-right:0"><b>${user.following}</b> Takip edilen</li>
    </div>
    `;
    repos.innerHTML += `<h4>${user.login} Repositorys</h4>`;

    for (let i = 0; i < userrepos.length; i++) {
      if (userrepos[i].name == user.login) {
        console.log("E abi bu senin profil reponnnn");
      } else {
        repos.innerHTML += `
        <div class="col-md-4 mt-2 mb-2">
          <div class="card bg-dark text-light">
            <div class="card-body">
                ${userrepos[i].name}
            </div>
            <div class="card-footer d-flex gap-2 align-items-center">
              <div><i class="fa-solid fa-circle text-primary"></i> ${userrepos[i].language}</div>
              <div><i class="fa-solid fa-star"></i> ${userrepos[i].stargazers_count}</div>
            </div>
          </div>
        </div>
        `;
      }
    }
  }, 1000)
}
