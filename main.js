document.getElementById('textField').addEventListener('focus', function() {
    document.getElementById('hidenDiv').style.display = 'block';
});

document.getElementById('textField').addEventListener('blur', function() {
    document.getElementById('hidenDiv').style.display = 'none';
});
