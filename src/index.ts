// function Product(_name: string, _category: string, _price: number) {
//     this.name = _name
//     this.category = _category;
//     this.price = _price
// }




console.log("this message generated from TS file")
// alert("Hi!")


// function User(_name: string, _age: number, _isMale: boolean) {
//     this.name = _name;
//     this.age = _age
//     this.isMale = _isMale
// }

//convert to class


class User {
    public name: string;
    private age: number;
    public gender: string;

    constructor(_name: string, _age: number, _gender: string) {
        this.name = _name;
        this.age = _age;
        this.gender = _gender;
    }

    getAge(): number {
        return this.age;
    }

    setAge(age: number) {
        if (age > 120) return;
        this.age = age;
    }

}


class Product {
    constructor(public name: string, public category: string, public price: number) { }
}

const product = new Product("milk", "dairy", 545)


console.log(product)
const user = new User("Maor Great Job", 30, "male")
console.log(user.name)
console.log(user.getAge())
console.log(user.setAge(50))
console.log(user.getAge())
console.log(user.setAge(150))
console.log(user.getAge())
// const a1: string[] = ["1,2,3,5,6", "asfadsf", "ads"]
// const a: Partial<Product> = { price: 1 }


function getNames(users: Array<User>): Array<string> {
    const result = users.map((user: User) => user.name);
    return result;
}
function getUserAge(u: User): number {
    return u.getAge();
}

const resultFromGetNames = getNames([user, user, user]);

const li = document.createElement("LI");
li.innerText = getUserAge(user).toString();
window.document.body.append(li);
window.document.body.append(li);
window.document.body.append(li);
window.document.body.append(li);
window.document.body.append(li);

