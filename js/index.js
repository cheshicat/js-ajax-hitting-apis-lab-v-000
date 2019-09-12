function getRepositories() {
  let username = document.getElementById('username').value;
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', `https://api.github.com/users/${username}/repos`);
  req.send();
}

function showRepositories() {
  const repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
    .map(
      r =>
        '<li>' +
        r.name +
        ' - <a href="#" data-repo="' +
        r.name +
        '" onclick="getCommits(this)">Get Commits</a></li>'
    )
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(repo) {
  const owner = repo.dataset.username;
  const name = repo.dataset.repository;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayCommits);
  req.open('GET', 'https://api.github.com/repos/' + owner + '/' + name + '/commits');
  req.send();
}
