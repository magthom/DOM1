document.addEventListener("DOMContentLoaded", function () {
    let div = document.createElement('div');
    div.className = 'header-container';
    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('This is an h1.');
    h1.appendChild(h1Text);
    div.appendChild(h1);
    document.body.appendChild(div);

})