document.addEventListener("DOMContentLoaded", function() {
    const backgroundColorInput = document.getElementById("background-color");
    const imageBorderColorInput = document.getElementById("image-border-color");
    const textColorInput = document.getElementById("text-color");
    const textBackgroundColorInput = document.getElementById("text-background-color");
    const footerColorInput = document.getElementById("footer-color");

    const imageContainer = document.getElementById("image-container");
    const titleInput = document.getElementById("title");
    const descriptionTextarea = document.getElementById("description");
    const footerInput = document.getElementById("footer");

    backgroundColorInput.addEventListener("change", function() {
        document.body.style.backgroundColor = this.value;
    });

    imageBorderColorInput.addEventListener("change", function() {
        imageContainer.style.borderColor = this.value;
    });

    textColorInput.addEventListener("change", function() {
        document.body.style.color = this.value;
        titleInput.style.color = this.value;
        descriptionTextarea.style.color = this.value;
        footerInput.style.color = this.value;
    });

    textBackgroundColorInput.addEventListener("change", function() {
        titleInput.style.backgroundColor = this.value;
        descriptionTextarea.style.backgroundColor = this.value;
        footerInput.style.backgroundColor = this.value;
    });

    footerColorInput.addEventListener("change", function() {
        footerInput.style.color = this.value;
    });

    const imageUploadInput = document.getElementById("image-upload");
    imageUploadInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const imageURL = e.target.result;
            imageContainer.innerHTML = `<img src="${imageURL}" alt="Imagen">`;
        };

        reader.readAsDataURL(file);
    });
});
