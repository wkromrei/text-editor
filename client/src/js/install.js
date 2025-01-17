const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    window.deferredPrompt = event;

    butInstall.classList.toggle('hidden', false);
});


// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    butInstall.addEventListener('click', async () => {
        butInstall.setAttribute('disabled', true);
        butInstall.textContent = 'Installed!';
    })
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});