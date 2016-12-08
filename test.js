/**
 * Created by askrypai on 12/6/16.
 */
function createElement(elementName, elemContent) {
    var el,
        doc = window.document;

    el = doc.createElement(elementName);
    el.appendChild(doc.createTextNode(elemContent));

    return el;
}

function addClassToElement(el, className) {
    el.className = className
    return el;
}

function assert(value, text, container){
    document.getElementById(container).appendChild(addClassToElement(createElement('li', text),  value ? 'pass' : 'fail'));
}

function print(text, containerId, element) {
    if (!element) {
        element = 'div'
    }

    document.getElementById(containerId).appendChild(addClassToElement(createElement(element, text), 'info'));
}
