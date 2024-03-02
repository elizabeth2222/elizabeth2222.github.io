document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("drawButton").addEventListener("click", function() {
        // List of URLs for the draw result images
        var drawResults = [
            "img/img02.jpg",
            "img/img03.jpg",
            "img/img04.jpg",
            "img/img05.jpg",
            "img/img07.jpg"
        ];

        // Generate a random index to choose a draw result
        var randomIndex = Math.floor(Math.random() * drawResults.length);

        // Get the URL of the chosen draw result
        var drawResultUrl = drawResults[randomIndex];

        // Navigate to the result page with the draw result URL as a query parameter
        window.location.href = "result.html?drawResult=" + encodeURIComponent(drawResultUrl);
    });
});

