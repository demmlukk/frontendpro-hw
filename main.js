document.getElementById('textField').addEventListener('focus', function() {
    document.getElementById('heart').style.display = 'block';
});

document.getElementById('textField').addEventListener('blur', function() {
    document.getElementById('heart').style.display = 'none';
});
