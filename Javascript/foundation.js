fetch('../TopNavBar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('topnav-depthOne').innerHTML = html;
    });

fetch('../TopNavBar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('topnav').innerHTML = html;
    });