// Dynamic year for footer
document.getElementById("year").textContent = new Date().getFullYear();

// Search functionality
document.getElementById("search").addEventListener("input", function () {
    let filter = this.value.toLowerCase();
    let topics = document.querySelectorAll(".topic");

    topics.forEach(function (topic) {
        let title = topic.querySelector("h2").innerText.toLowerCase();
        if (title.includes(filter)) {
            topic.style.display = "block";
        } else {
            topic.style.display = "none";
        }
    });
});
