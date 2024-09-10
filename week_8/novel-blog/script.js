document.getElementById('upload-btn').addEventListener('click', () => {
    const form = document.getElementById('upload-form');
    form.classList.toggle('hidden');
});

function uploadNovel() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const summary = document.getElementById('summary').value;
    const imageUrl = document.getElementById('image-url').value;

    if (!title || !author || !genre || !summary || !imageUrl) {
        alert('Please fill in all fields.');
        return;
    }

    const novelList = document.getElementById('novels-list');
    const noNovelsMessage = document.getElementById('no-novels-message');

    // Hide "No novels available" message
    noNovelsMessage.style.display = 'none';

    // Create new novel item
    const novelItem = document.createElement('div');
    novelItem.className = 'novel-item';

    const novelImage = document.createElement('img');
    novelImage.src = imageUrl;
    novelItem.appendChild(novelImage);

    const novelDetails = document.createElement('div');
    novelDetails.innerHTML = `
        <strong>Title:</strong> ${title}<br>
        <strong>Author:</strong> ${author}<br>
        <strong>Genre:</strong> ${genre}<br>
        <strong>Summary:</strong> ${summary}
    `;
    novelItem.appendChild(novelDetails);

    // Append new novel item to the list
    novelList.appendChild(novelItem);

    // Reset and hide form
    document.getElementById('novel-form').reset();
    document.getElementById('upload-form').classList.add('hidden');
}

function cancelUpload() {
    document.getElementById('novel-form').reset();
    document.getElementById('upload-form').classList.add('hidden');
}
