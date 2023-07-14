function adjustSelectSize(selectElement) {
    var selectedOptionText = selectElement.options[selectElement.selectedIndex].text;
    selectElement.style.width = getTextWidth(selectedOptionText) + 30 + 'px';
}

function getTextWidth(text) {
    var element = document.createElement('span');
    element.style.visibility = 'hidden';
    element.textContent = text;

    document.body.appendChild(element);
    var width = element.offsetWidth;
    document.body.removeChild(element);

    return width;
}

