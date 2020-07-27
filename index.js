// function Product(_name: string, _category: string, _price: number) {
//     this.name = _name
//     this.category = _category;
//     this.price = _price
// }
console.log("this message generated from TS file");
// alert("Hi!")
// function User(_name: string, _age: number, _isMale: boolean) {
//     this.name = _name;
//     this.age = _age
//     this.isMale = _isMale
// }
//convert to class
var User = /** @class */ (function () {
    function User(_name, _age, _gender) {
        this.name = _name;
        this.age = _age;
        this.gender = _gender;
    }
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.setAge = function (age) {
        if (age > 120)
            return;
        this.age = age;
    };
    return User;
}());
var Product = /** @class */ (function () {
    function Product(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
    return Product;
}());
var product = new Product("milk", "dairy", 545);
console.log(product);
var user = new User("Maor Great Job", 30, "male");
console.log(user.name);
console.log(user.getAge());
console.log(user.setAge(50));
console.log(user.getAge());
console.log(user.setAge(150));
console.log(user.getAge());
// const a1: string[] = ["1,2,3,5,6", "asfadsf", "ads"]
// const a: Partial<Product> = { price: 1 }
function getNames(users) {
    var result = users.map(function (user) { return user.name; });
    return result;
}
function getUserAge(u) {
    return u.getAge();
}
var resultFromGetNames = getNames([user, user, user]);
sssss;
