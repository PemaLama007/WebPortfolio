// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Get the "CV" button
    const downloadBtn = document.getElementById("downloadBtn");

    // URL to the CV file (replace with your file URL)
    const cvFileUrl = "C:\Users\Acer\Desktop\WebPortfolio\Assets\CV.pdf"; // Replace with the actual file URL

    // Function to trigger the file download
    function downloadCV() {
        const a = document.createElement("a");
        a.href = cvFileUrl;
        a.download = "CV.pdf"; // Optional: Rename the downloaded file
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    // Attach the download function to the button click event
    downloadBtn.addEventListener("click", downloadCV);
});
