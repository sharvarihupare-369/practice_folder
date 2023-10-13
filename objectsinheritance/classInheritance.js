//Class Pattern

class CreateUser{
    constructor(name,score = 0){
        this.name = name;
        this.score = score;
    }
    increaseScore(value = 1){
        this.score += value;
        return this.score;
    }
    decreaseScore(value = 1){
        this.score -= value;
        return this.score;
    }
    changeName(name){
        this.name = name;
        return this.name
    }
}

class PaidCreateUser extends CreateUser{
    constructor(name,score = 0,balance=0){
        // this.name = name;
        // this.score = score;
        super(name,score);
        this.balance = balance;
    }
    reedemBalance(amount){
        if(this.balance < amount){
            alert("You don't have enough balance")
        }
        this.balance -= amount;
        alert(`You have ${this.balance} balance`)
    }
}