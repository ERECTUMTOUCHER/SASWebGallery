// JavaScript functions for image inspection
document.addEventListener('DOMContentLoaded', function() {
    var galleryImages = document.querySelectorAll('.cs-gallery img');
    var overlay = document.querySelector('.overlay');
    var overlayImage = document.getElementById('overlayImage');

    galleryImages.forEach(function(image) {
        image.addEventListener('click', function() {
            var fullImagePath = this.getAttribute('data-full');
            overlayImage.src = fullImagePath;
            overlay.style.display = 'block';
        });
    });

    overlay.addEventListener('click', function() {
        this.style.display = 'block';
        $overlay.show();
    });
});

window.onload = function() {
    // Array of video IDs and descriptions
    var videos = [
        { id: "4NXQKvZMMTA?si=wqwa7fJaWKkTbGXR", description: "SAS Student Interview 1" },
        { id: "HdcUt2n6CzQ?si=04iQoB6MbpIBVRtH", description: "SAS Student Interview 2" },
        { id: "nJzvvafDNQg?si=jGOUFOL5dpY7vLHe", description: "SAS Student Interview 3" },
        { id: "pAheY3mEdlI?si=Ck6uGGvicJZo-mDx", description: "SAS Teacher Interview 1 Part 1" },
        { id: "RAXgSdzUjrE?si=rB7vFh3JkcsyMJgR", description: "SAS Teacher Interview 1 Part 2"},
        { id: "uzWYeq5XpKU?si=p9IIzr7iGvE7Ykv_", description: "SAS Teacher Interview 2" },
        { id: "kTFwJIpQKiU?si=JRe67cFTsXcolBSc", description: "SAS Teacher Interview 3" },
    ];

    // Function to create video elements
    function createVideoElement(video) {
        var videoDiv = document.createElement("div");
        videoDiv.classList.add("video");
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.youtube.com/embed/" + video.id);
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");
        var description = document.createElement("p");
        description.textContent = video.description;
        videoDiv.appendChild(iframe);
        videoDiv.appendChild(description);
        return videoDiv;
    }

    // Display all videos
    var videoListContainer = document.getElementById("videoList");
    videos.forEach(function(video) {
        var videoElement = createVideoElement(video);
        videoListContainer.appendChild(videoElement);
    });
};

