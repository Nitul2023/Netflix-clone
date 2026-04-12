const slider = document.getElementById("slider");

function moveRight() {
    slider.scrollBy({
        left: 250,
        behavior: "smooth"
    });
}

function moveLeft() {
    slider.scrollBy({
        left: -250,
        behavior: "smooth"
    });
}

// pop-up window
function openMovie(card) {
    const popup = document.getElementById("moviePopup");
    const popupImage = document.getElementById("popupImage");
    const popupTitle = document.getElementById("popupTitle");
    const popupDesc = document.getElementById("popupDesc");

    const image = card.querySelector("img").src;
    const title = card.dataset.title || "Movie Title";
    const desc = card.dataset.desc || "No description available.";

    popupImage.src = image;
    popupTitle.textContent = title;
    popupDesc.textContent = desc;

    popup.style.display = "flex";
}
function closeMovie() {
    document.getElementById("moviePopup").style.display = "none";
}


// singup


function goToSignup() {
    const email = document.getElementById("emailInput").value;

    if (email === "") {
        alert("Please enter your email");
        return;
    }

    localStorage.setItem("userEmail", email);

    window.location.href = "signup.html";
}


function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const plus = element.querySelector(".plus");

    if (answer.style.display === "block") {
        answer.style.display = "none";
        plus.textContent = "+";
    } else {
        answer.style.display = "block";
        plus.textContent = "×";
    }
}