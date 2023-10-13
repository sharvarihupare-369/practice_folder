//normal function prototypical inheritance
let userMethods = {
    increaseScore(value = 1){
        this.score += value;
        return this.score;
    },
    decreaseScore(value = 1){
        this.score -= value;
        return this.score;
    },
    changeName(name){
        this.name = name;
        return this.name
    }
}

let paidUserMethods = {
    reedemBalance(amount){
        if(this.balance < amount){
            alert("Balance is not enough!")
        }
        this.balance = this.balance - amount;
        alert(`Your balance is ${this.balance}`)
    }
}

Object.setPrototypeOf(paidUserMethods,userMethods)

function createUser(name,score = 0){
    let user = Object.create(userMethods);
    user.name = name;
    user.score = score;
    return user;
}

function createPaidUser(name,score = 0,balance=0){
    let user = Object.create(paidUserMethods);
    user.name = name;
    user.score = score;
    user.balance = balance;
    return user;
}


let user1 = createUser("Sharvari",10)
let user2 = createPaidUser("Shara",10,100)
