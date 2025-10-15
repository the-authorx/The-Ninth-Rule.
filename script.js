function checkPassword() {
    const password = document.getElementById('password-input').value.toLowerCase();
    const errorMessage = document.getElementById('error-message');
    
    // The password is "LIAR" - the word from Owen Reed's screen
    if (password === 'liar') {
        // Hide password screen
        document.getElementById('password-screen').classList.add('hidden');
        
        // Show message screen after a brief delay
        setTimeout(() => {
            document.getElementById('message-screen').classList.remove('hidden');
        }, 1000);
    } else {
        errorMessage.textContent = 'Incorrect. The truth is simpler than you think. Look to Chapter 4.';
        
        // Clear error message after 3 seconds
        setTimeout(() => {
            errorMessage.textContent = '';
        }, 3000);
    }
}

// Allow pressing Enter to submit
document.getElementById('password-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});
