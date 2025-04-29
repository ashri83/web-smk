<<<<<<< HEAD
fetch('/news/index.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('list-berita');
    data.berita.forEach(item => {
      const article = document.createElement('article');
      article.innerHTML = `<h3>${item.title}</h3><p>${item.date}</p><p>${item.body}</p>`;
      list.appendChild(article);
    });
=======
fetch('/news/index.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('list-berita');
    data.berita.forEach(item => {
      const article = document.createElement('article');
      article.innerHTML = `<h3>${item.title}</h3><p>${item.date}</p><p>${item.body}</p>`;
      list.appendChild(article);
    });
>>>>>>> master
  });