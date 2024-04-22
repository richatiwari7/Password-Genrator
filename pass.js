document.getElementById('generate').addEventListener('click', function() {
    var length = document.getElementById('length').value;
    var uppercase = document.getElementById('uppercase').checked;
    var lowercase = document.getElementById('lowercase').checked;
    var numbers = document.getElementById('numbers').checked;
    var symbols = document.getElementById('symbols').checked;

    var password = generatePassword(length, uppercase, lowercase, numbers, symbols);
    document.getElementById('password').textContent = password;
});

function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    var charset = '';
    var password = '';

    if (uppercase) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (lowercase) {
        charset += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (numbers) {
        charset += '0123456789';
    }
    if (symbols) {
        charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}
