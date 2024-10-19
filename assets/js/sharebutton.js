// Get elements
const shareButton = document.getElementById('shareButton');
const shareModal = document.getElementById('shareModal');
const modalClose = document.querySelector('.modal-close');
const modalBackground = document.querySelector('.modal-background');
const shareTwitter = document.getElementById('shareTwitter');
const shareFacebook = document.getElementById('shareFacebook');
const copyLink = document.getElementById('copyLink');
const toast = document.getElementById('toast');
const closeToast = document.getElementById('closeToast');

// Set URL to share as the current page's URL
const urlToShare = window.location.href;

// Open the modal
shareButton.addEventListener('click', function() {
    shareModal.classList.add('is-active');
});

// Close the modal
modalClose.addEventListener('click', function() {
    shareModal.classList.remove('is-active');
});
modalBackground.addEventListener('click', function() {
    shareModal.classList.remove('is-active');
});

// Add share functionality
shareTwitter.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}`;
shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;

// Copy link functionality
copyLink.addEventListener('click', function() {
    // Copy the current URL to the clipboard
    navigator.clipboard.writeText(urlToShare).then(function() {
        showToast();  // Show toast notification when link is copied
    }, function(err) {
        console.error('Failed to copy link: ', err);
    });
});

// Show toast notification
function showToast() {
    toast.style.display = 'block';  // Display the toast
    setTimeout(function() {
        toast.style.display = 'none';  // Hide after 3 seconds
    }, 3000);
}

// Close toast manually (optional)
closeToast.addEventListener('click', function() {
    toast.style.display = 'none';
});