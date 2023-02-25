/* Page Jobs */

function switchTxt(elementId, toggle) {
    var panel = document.getElementById(elementId);
    if (panel.style.display === 'block') {
        panel.style.display = 'none';
        toggle.style.fontStyle = 'italic';
    } else {
        panel.style.display = 'block';
        toggle.style.fontStyle = 'normal';
    }
}

function displayToast() {
    const toast = document.createElement("div");
    toast.classList.add('toast');
    toast.innerHTML = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg> Pour afficher le texte, cliquez sur les titres de partie !';
    document.body.appendChild(toast);

    setTimeout(function () {
        toast.style.right = "10px";
    }, 100);

    setTimeout(function () {
        toast.style.right = "-600px";
    }, 5000);
}




/* Page Linus */

function Switch() {
    let element = document.getElementById("SwitchImage")
    element.src = 'https://www.itmagazine.ch/imgserver/artikel/Personen/2018/mid/Linus_Torvalds_181022_161033.jpg'
    element.style.display = 'block'
}





/* Page Gates */
function affichermasquer() {
    let elem = document.getElementById('modifvisibility');
    let styleExistant = window.getComputedStyle(elem).visibility;
    if (styleExistant === 'visible') {
        elem.style.visibility = 'hidden';
    } else {
        elem.style.visibility = 'visible';
    }
}