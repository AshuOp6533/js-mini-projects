let images = {};

fetch('img.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Error fetching images");
        }
        return response.json();
    })
    .then(data => {
        images = data;
        document.getElementById("image").src = images.img2;
    })
    .catch(err => {
        console.error("Error fetching images:", err);
    });

function updateImage(imageKey) {
    document.getElementById("image").src = images[imageKey];
}

document.getElementById('btn1').addEventListener('click', () => updateImage('img1'));
document.getElementById('btn2').addEventListener('click', () => updateImage('img2'));
document.getElementById('btn3').addEventListener('click', () => updateImage('img3'));
