function getRepositories() {
  let username = document.getElementById('username').value;
  const req = new XMLHttpRequest();
  req.open('GET', `https://api.github.com/users/${username}/repos`);
  req.send();
}
