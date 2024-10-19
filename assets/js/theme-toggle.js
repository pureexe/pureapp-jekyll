// Function to get preferred theme (fallback to system preference if needed)
function getPreferredTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Function to apply the theme, either from localStorage or system preference
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');

    // If a theme is saved in localStorage, apply it; otherwise, use the preferred theme
    const themeToApply = savedTheme || getPreferredTheme();
    document.documentElement.setAttribute('data-theme', themeToApply);
}

// Function to toggle the theme and save it in localStorage
function toggleLightDarkTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || getPreferredTheme();

     // Toggle theme between 'light' and 'dark'
    const newTheme = (currentTheme === 'light') ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);

  // Save the new theme in localStorage
    localStorage.setItem('theme', newTheme);
}

// Call this function when the page loads to apply the saved theme
applySavedTheme();