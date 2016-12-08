/**
 * Created by askrypai on 12/8/16.
 */
(function(param){
    var a = function () {

        print('этот код выплолняется при первом вызове', param);

        a = function () {
            print('этот код выплолняется при последующих вызовах', param);
        }
    }

    a();
    a();
    a();

}('text1'));

(function(param){

    var scareMe = function () {
        return 'Boo';

        scareMe = function () {

            return 'Double Boo';
        }

    }
    scareMe.property = 'property';
    console.log(scareMe)


    var spooky = {
        'boo': scareMe
    }

    var prank = scareMe;

    assert( prank() === 'Boo', '1 - Переопределение не произошлою Выполняется прервоначальный вариант функции', param);
    print(prank(), param, 'li');
    assert( prank() === 'Double Boo', '1 - Второй вызов функции как функции.Переопределение не произошлою Выполняется прервоначальный вариант функции', param);
    print(prank(), param, 'li');
    print(prank.property, param, 'li');
    assert( prank.property === 'property', '1 - Присвоенное функции свойство доступно', param);
    print('==========', param, 'li');
    console.log(scareMe);
    assert(spooky.boo() === 'Boo', '2 - Переопределение не произошлою Выполняется прервоначальный вариант функции', param);
    print(spooky.boo(), param, 'li')
    assert(spooky.boo() === 'Double Boo', '2 - Второй вызов функции как метода объекта.Переопределение не произошлою Выполняется прервоначальный вариант функции', param);
    print(spooky.boo(), param, 'li')
    assert(spooky.boo.property === 'property', '2 - Присвоенное функции свойство доступно', param);
    print(spooky.boo.property, param, 'li')
    print('==========', param, 'li');
    assert(scareMe() === 'Boo', '3 - Первоначальный вариант функции был утерян при вызове функции с другим именем', param);
    print(scareMe(),param, 'li');
    assert(scareMe() === 'Boo', '3 - Первоначальный вариант функции был утерян при вызове функции с другим именем', param);
    print(scareMe(),param, 'li');
    assert(scareMe.property === 'property', '3 - Присвоенное функции свойство не доступно после переопределения', param);
    print(scareMe.property, param, 'li');

}('text2'))
