// Show elements gradually
function showElements() {
    document.getElementById("imageTop").classList.add("visible");
    setTimeout(function() {
        document.getElementById("imageBottom").classList.add("visible");
        document.getElementById("logo").classList.add("visible");
        document.getElementById("label").classList.add("visible");
        document.getElementById("footer").classList.add("visible");
        document.getElementById("tortoise").classList.add("visible");
    }, 1000); // Adjust the delay as needed
}

// Call the function after the page has loaded
window.onload = function() {
    showElements();
};
