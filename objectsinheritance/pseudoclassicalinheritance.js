
function CreateUser(name,score=0){
    this.name = name;
    this.score = score;
}

CreateUser.prototype = {
    increaseScore(value = 1){
        this.score += value;
        return this.score;
    } ,
    decreaseScore(value= 1){
        this.score -= value;
        return this.score;
    },
    changeName(name){
        this.name = name;
        return this.name;
    }
}

function CreatePaidUser(name,score=0,balance=0){
    // this = {}
    // this.name = name;
    // this.score = score;
    // CreateUser.call(this,name,score)
    CreateUser.apply(this,[name,score])
    this.balance = balance
}

CreatePaidUser.prototype.reedemBalance = function(amount){
    if(this.balance < amount){
        alert("You have not enough balance!")
    }
    this.balance = this.balance - amount;
    alert(`You have ${this.balance} balance`)
}
    

Object.setPrototypeOf(CreatePaidUser.prototype,CreateUser.prototype)

let user1 = new CreateUser("Sharvari",10)
let user2 = new CreatePaidUser('Shara',10,100)
