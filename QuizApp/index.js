let user1Name = "Sam";
let user1Score = 0;

function user1IncreaseScore(value=1){
    user1Score = user1Score + value;
    return user1Score
}

function user1DecreaseScore(value=1){
    user1Score = user1Score - value;
    return user1Score
}

function user1ChangeName(name){
   user1Name = name;
   return user1Name
}

let user1 = {
    name : "Sameer",
    score : 0,
    increaseScore(value = 1){
        user1.score = user1.score + value;
        return user1.score
    },
    decreaseScore(value = 1){
        user1.score = user1.score - value;
        return user1.score
    },
    changeName(name){
        user1.name = name
        return user1.name
    }
}


function createUser(name,score=0){
    let user = {}
    user.name = name;
    user.score = score;
    user.increaseScore = function(value = 1){
       user.score = user.score + value
       return user.score
    };
    user.decreaseScore = function(value = 1){
        user.score = user.score - value
        return user.score
    };
    user.changeName = function(name){
        user.name = name
        return user.name
    }
    return user;
}

const user12 = createUser("sharvari",20)
console.log(user12.increaseScore(2))
console.log(user12.changeName("Shara"))