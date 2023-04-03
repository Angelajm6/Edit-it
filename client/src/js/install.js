const butInstall = document.getElementById('buttonInstall');

// Event listener before clicking the 'butInstall' button
window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
    });

// Event listener when clicking the 'butInstall' button
butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
     return;
    }
  
    // Show prompt
    promptEvent.prompt();
    
    // Reset the deferred prompt variable
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);
  });
  

  window.addEventListener('appinstalled', (event) => {

    // Clear prompt
    window.deferredPrompt = null;
  }); 