document.getElementById('anonymous-btn').addEventListener('click', function() {
    const username = document.querySelector('.username');
    if (username.style.display === 'none') {
        username.style.display = 'inline';
        this.innerText = 'Be Anonymous';
    } else {
        username.style.display = 'none';
        this.innerText = 'Show Username';
    }
});
