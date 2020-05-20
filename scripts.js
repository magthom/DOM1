document.addEventListener("DOMContentLoaded", function () {
    let div = document.createElement('div');
    div.className = 'header-container';
    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('This is an h1.');
    h1.appendChild(h1Text);
    div.appendChild(h1);
    document.body.appendChild(div);
    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is an h2.')
    h2.appendChild(h2Text);
    div.appendChild(h2);
    document.body.appendChild(div);

})