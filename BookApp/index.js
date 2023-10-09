

// function createBooks(name,author,pages){

//     let book = {}
//     book.name = name;
//     book.author = author;
//     book.pages = pages
//     book.getSummary = function(){
//         console.log(`${this.name} is written by ${this.author} and it contains ${this.pages} pages`)
//     }
//     book.changeAuthor = function (author){
//         this.author = author;
//         return this.author
//     }
//     book.changePage = function(page){
//         this.pages = page;
//         return this.pages
//        }
//     return book;

// }


// let book1 = createBooks("Harry Potter","J.K.Rollins",900)
// console.log(book1)



// let bookMethods = {
//     getSummary(){
//         console.log(`${this.name} is written by ${this.author} and it contains ${this.pages} pages`)
//     },
//     changePage(page){
//      this.pages = page;
//      return this.pages
//     },
//     changeAuthor(author){
//         this.author = author;
//         return this.author
//     }
// }

// function createBooks(name,author,pages){

//     let book = Object.create(bookMethods)
//     book.name = name;
//     book.author = author;
//     book.pages = pages
//     return book;

// }

// let book1 = createBooks("Harry Potter","J.K.Rollins",900)
// console.log(book1)

// function createBooks(name,author,pages){

//     let book = Object.create(createBooks.prototype)
//     book.name = name;
//     book.author = author;
//     book.pages = pages
//     return book;

// }

// createBooks.prototype = {
//          getSummary(){
//              console.log(`${this.name} is written by ${this.author} and it contains ${this.pages} pages`)
//             },
//             changePage(page){
//              this.pages = page;
//              return this.pages
//             },
//             changeAuthor(author){
//                 this.author = author;
//                 return this.author
//             }
// }

//To check do dir(createBooks)
// let book1 = createBooks("Harry Potter","J.K.Rollins",900)
// console.log(book1)


//Constructor function ==> new keyword  ==> return object implicitly

// function CreateBooks(name,author,pages){
//    this.name = name;
//    this.author = author;
//    this.pages = pages
// }

// CreateBooks.prototype = {
//     getSummary(){
//      console.log(`${this.name} is written by ${this.author} and it contains ${this.pages} pages`)
//     },
//     changePage(page){
//       this.pages = page;
//       return this.pages
//      },
//    changeAuthor(author){
//       this.author = author;
//       return this.author
//      }
    
// }

// let book1 = new CreateBooks("Harry Potter","J.K.Rollins",900)
// console.log(book1)

class CreateBooks {
    constructor(name,author,pages){
        this.name = name;
        this.author = author;
        this.pages = pages
    }
    getSummary(){
       console.log(`${this.name} is written by ${this.author} and it contains ${this.pages} pages`)
    }
    changeAuthor(author){
        this.author = author;
        return this.author
    }
    changePage(page){
        this.pages = page;
        return this.pages
    }
}

let book1 = new CreateBooks("Harry Potter","J.K.Rollins",900)
console.log(book1)