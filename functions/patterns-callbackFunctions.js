(function(param){

    function a () {
        assert(true, 'функция обратного вызова выполнена', param);
        return false;

    }

    function b (callback) {
        if(callback && typeof callback === 'function') {
            callback();

        } else {
            assert(false, 'функция обратного вызова не выполнена, в качестве callback передана не функция', param);
        }
    }

    var c = 12;

    b()
    b(c);
    b(a);


}('test11'));

(function(param){

a = 10;

var o = {
    a: 12,
    getA: function () {
        assert(this !== window, 'Контекст вызова - объект', param);
        return this.a;
    }
};

var b = function (callback) {
    if(callback && typeof callback === 'function') {
        return callback();
    }
    return false;
};

var c = function (callback, obj) {
    if(callback && typeof callback === 'function') {
        if (obj) {
            return callback.call(obj);
        } else {
            callback();
        }
    }
    return false;
};

var d = function (callbackName, obj) {
    if(typeof callbackName === 'string' && obj[callbackName] && typeof obj[callbackName] === 'function') {
        return obj[callbackName].call(obj);
    }
    return false;
};



    var s = b(o.getA);         // 1

    assert(s === 12, '1 - s должно быть 12, получилось ' + s, param);

    s = b(o.getA.bind(o)); // 2
    assert(s === 12, '2 - s должно быть 12, получилось ' + s, param);
    s = c(o.getA, o); // 3
    assert(s === 12, '3 - s должно быть 12, получилось ' + s, param);
    s = d('getA', o); //4
    assert(s === 12, '4 - s должно быть 12, получилось ' + s, param);

}('test2'));
