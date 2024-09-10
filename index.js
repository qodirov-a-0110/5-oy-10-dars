document.addEventListener('DOMContentLoaded', () => {
    const photoContainer = document.getElementById('photo-container');
    const loader = document.getElementById('loader');

    loader.style.display = 'block';
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => {
            loader.style.display = 'none';
            data.slice(0,200).forEach(photo => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${photo.url}" alt="${photo.title}">
                    <h3>${photo.title}</h3>
                `;
                photoContainer.appendChild(card);
            });
        })
        .catch(err => {
            console.error(err);
        });
});