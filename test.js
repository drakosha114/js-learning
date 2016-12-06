/**
 * Created by askrypai on 12/6/16.
 */
function assert(value, text, container){
    var li = document.createElement('li');
    li.className = value ? 'pass' : 'fail';
    li.appendChild(document.createTextNode(text));
    document.getElementById(container).appendChild(li);

}


