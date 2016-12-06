/**
 * Created by askrypai on 12/6/16.
 */

(function (param) {
    function f () {
        try {
            assert(f, '1 - Имя функции инструкции доступно внутри функции', param);
        } catch (err) {
            assert(false, '1 - Имя функции инструкции не доступно внутри функции ' + err, param);
        }
    }
    var a = function b () {


        try {
            assert(b, '2 - Имя функции выражения доступно внутри функции', param);
        } catch (err) {
            assert(false, '2 - Имя функции выражения не доступно внутри функции ' + err, param);
        }


    };

    try {
        assert(f, '3 - Имя функции инструкции доступно снаружи функции', param);
    } catch (err) {
        assert(false, '3 - Имя функции инструкции не доступно снаружи функции ' + err, param);
    }

    try {
        assert(b, '4 - Имя функции выражения доступно снаружи функции', param);
    } catch (err) {
        assert(false, '4 - Имя функции выражения не доступно снаружи функции ' + err, param);
    }



    f();
    a();

} ('res1'));

(function(param){
    try {
        f();
        assert(true, 'функция инструкция вызывается до объявления - 1 ', param);
    } catch (err) {
        assert(false, 'функция инструкция вызывается до объявления - 1 ' + err, param);
    };

    try {
        a ();
        assert(true, 'функция выражение вызывается до объявления - 2 ', param);
    } catch (err){
        assert(false, 'функция выражение вызывается до объявления - 2 ' + err, param);
    };

    function f () {
        assert(true, 'функция инструкция выполняется'.toUpperCase(), param);
    };

    var a = function () {
        assert(true, 'функция выражение выполняется'.toUpperCase(), param);
    };

    try {
        f();
        assert(true, 'функция инструкция вызывается после объявления - 3 ', param);
    } catch (err) {
        assert(false, 'функция инструкция вызывается после объявления - 3 ' + err, param);
    };

    try {
        a ();
        assert(true, 'функция выражение вызывается после объявления - 4 ', param);
    } catch (err){
        assert(false, 'функция выражение вызывается после объявления - 4 ' + err, param);
    };
}('res2'));