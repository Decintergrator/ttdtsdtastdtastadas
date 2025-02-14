document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".masonry-grid");

    for (let i = 1; i <= 49; i++) {
        const img = document.createElement("img");
        img.src = `image${i}-resized.png`; // Adjust path if needed
        img.alt = `Image ${i}`;

        const div = document.createElement("div");
        div.classList.add("masonry-item");
        div.appendChild(img);

        imageContainer.appendChild(div);
    }
});


