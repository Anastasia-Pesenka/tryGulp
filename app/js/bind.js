var userAlex = {
    name: 'Alex',
    age: 20
};
var login = function() {
    console.log(this.name + ' is logged in');
};

var myBind=function (fun, someObject) {
    return function () {
      return fun.call(someObject);
    } ;
}

var userAlexLogin = myBind(login, userAlex);
userAlexLogin(); // Alex is logged in
// обработка всех параметров кроме первого - желательна, но не обязательно
// задача минимум - реализовать фиксацию контекста и вызов на функциях