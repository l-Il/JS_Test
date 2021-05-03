const { readFileSync, writeFileSync } = require('fs');

const data = readFileSync('./data.txt', 'utf8')
  .split('\n')
  .map(str => str.split('/'));

const html = data.map(([surname, name, login, password]) => `
  <div class="post-masonry col-md-4 col-sm-6">
  <div class="post-thumb">
      <img src="#" alt="">
      <div class="title-over">
          <h4>${surname}</h4>
      </div>
      <div class="post-hover text-center">
          <div class="inside">
              <a href="#">
                  <h3>${surname}</h3>
                  <p>${name}</p>
                  <p>${login}</p>
                  <p>${password}</p>
              </a>
          </div>
      </div>
  </div>
`).join('');

writeFileSync('./index.html', html);