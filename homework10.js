// 11. Create an Author class and a Book class.
// Author should have: name, email, gender.
// It should have appropriate getters and setters.
// It should have a toString method.
// Book should have: title, author(Author), price, quantity.
// It should have appropriate getters and setters.
// It should have a method: getProfit(), which calculates the profit from the book based on
// the price and quantity.
// It should have a toString method.
class Author{
    constructor(name,email){
        // debugger
        this._name = name;
        this._email = email;
    }
   #gender = prompt('enter a gender')
    get name (){
        return this._name
    }
    set name (value){
        if(value.length<4){
            console.log('this value dont  match')
        }
        else{
            this._name = value
        }
    }
    get gender (){
        return this.#gender
    }
    get email (){
        return this._email
    }
    set email(val){
       this._email = val
       return this._email 
    }
    toString(){
        return `the author is ${this._name}`
    }
}
class Book extends Author{
    constructor(name,email,title,price){
        // debugger
        super (name,email)
        this._title = title
        this._price = price
        this._quanity = this.#initialquanity
    }
    #initialquanity = +prompt('enter a number')
    list = []
    get title(){
        return this._title
    }
    set title(value){
    if(value.length<4){
        console.log('this value dont match')
    }
    else{
        this._title = value
    }
    }
    get price(){
        return this._price
    }
    set price(v){
      if(typeof v !== 'numner'){
        console.log('you should write a number')
      }
      else{
        this._price = this.price
      }
    }
    get quanity(){
        return this._quanity
    }
   set quanity(v){
    if(typeof v !== 'number' || v<0){
        console.log('you should write a number')
    }
   }
   isSold(){
    if(this._quanity<=0){
        return 'your books is sold'
    }
    this._quanity = this._quanity - 1
    this.list.push(1)
   }
   themaximumprofit(){
    return this.#initialquanity *this._price 
   }
   getProfit(){
       // debugger
    return this.list.length*this._price
   }
   getinitialquanity(){
     return this.#initialquanity
   }
    toString(){
        
        return `${super.toString()} the title is ${this.title}`
    }
}



// 2Create an Account class. Account should have: id, name, balance.
// It should have setters for name and balance, and getters for all fields.
// It should have a method: credit(amount), which should add amount to balance and
// return the updated balance.
// It should have a method: debit(amount), which should subtract the amount from the
// balance, if amount is less than the balance, otherwise output “Amount exceeded
// balance.”
// It should have a method: transferTo(anotherAccount, amount): which should subtract the
// amount from the account balance and add it to the given anotherAccount and return the
// updated balance, if amount is less than the balance, otherwise output “Amount
// exceeded balance.”
// It should have a static method: identifyAccounts(accountFirst, accountSecond) which
// gets two accounts and identifies if they are the same or not comparing all fields.
// It should have toString method.
class Acount{
    constructor(name,balance){
        // debugger
        this._name = name
        if(typeof balance === 'number' && balance>=0){
          this._balance = balance  
        }
        else{
            this._balance = 0
        }
        if(typeof this.#id === 'number' && this.#id>0){
            this.#id = this.#id
        }
        else{
            this.#id = Math.random()
        }
    }
    // #id = Math.random() es pah@ senc chem arel vorovhetev ete sencgrei havasari depq chei stana
    #id = +prompt('enter a positive number')
    getid(){
        return this.#id
    }
    get name (){
        return this._name
    }
    set name(v){
        if(v.lenth<3){
            return 'yor name is much more shorter'
        }
    }
    get balance (){
        return this._balance
    }
    set balance(v){
        if(typeof v === 'number'&& v>0){
            this._balance = v
        }
        else{
            console.log('you should give positive number')
        }
    }
    credit(amount){
        debugger
        this._balance += amount
        return this._balance
    }
    debit(amount){
        debugger
        if(amount<=this._balance){
            this._balance -= amount
            return this._balance
        }
        else{
            return 'Amount exceeded balance.'
        }
    }
    transformTo(acount,amount){
        debugger
        if(acount instanceof  Acount){
            if(amount<=this._balance){
            acount.credit(amount)
            this.debit(amount)
            }
            else{
                return 'Amount exceeded balance.'
            }
        }
        else{return 'your acount didnt exist'}
    }
    static identify(acount1,acount2){
        if(acount1 instanceof Acount && acount2 instanceof Acount){
            for(let key in acount1){
              if ( acount1[key] !== acount2[key]){
                    return false
              }
            }
            if(acount1.getid() !== acount2.getid()){
                return false
            }
            return true
        }
    }
}

// 3. Write classes: Person, Student, Staff.
// Person should have: firstName, lastName, gender, age.
// It should have appropriate getters and setters.
// It should have a method: toString().
// Student is inherited from Person. It should have programs (array of strings), year, fee.
// It should have appropriate getters and setters.
// It should have method: passExam(program, grade). Student should contain the data
// about its programs and exams. passExam will update that data, so if student passed all
// the exams(grade is great or equal to 50), its year should be increased by one.
// It should have a toString method.
// Teacher is inherited from Person. It should have program(string), pay.
// It should have appropriate getters and setters.
// It should have a toString method.
class Person {
    constructor(firstName, lastName, gender, age){
    this._firstname = firstName
    this._lastName = lastName
    this._gender = gender
    this._age = age 
    }
    get firstName(){
        return this._firstname
    }
    set firstName(v){
        if(typeof v === 'string'&& v.length<3){
            return this._firstname
        }
        else{
            this._firstname = v
        }
    }
    get lasTName(){
        return this._lastName
    }
    set lasTName(v){
        if(typeof v === 'string'&& v.length<3){
            return this._lastName
        }
        else{
            this._lastName = v
        }
    } 
    get gender(){
        return this._gender
    }
    set gender(v){
        if(v === 'male'|| v==='female'){
            this._gender = v
        }
    }
    get age(){
        return this._age
    }
    set age(v){
        if(typeof v === 'number' && v>= 0){
            return this._age
        }
    }
    toString(){
        return `i am ${this._firstname} ${this._lastName} i am ${this._age}`
    }
}
class Student extends Person{
    constructor(firstName, lastName, gender, age,year,fee){
        super(firstName, lastName, gender, age)
        this._year = year
        this._fee = fee
        this.#chooseYourPrograms()
        this.#aboutMyprograms()
    }
    #programs = []
    #result = {}
    get fee(){
        return this._fee
    }
    set fee(v){
        if(typeof v === 'number'&& v>=0){
            this._fee = v 
        }
    }
    get year(){
        return this._year
    }
    set year(val){
        if(typeof val === 'number'&& val>=0){
            this._year = val
        }
    }
    #chooseYourPrograms(){
        let number = +prompt('how many programs do you want to learn')
        for(let i = 0;i<number;i++){
           this.#programs.push(prompt('enter a subject')) 
        }
        return 'you are sucssefuly choose subjects'
    }
    getprograms(){
        return this.#programs
    }
    #aboutMyprograms(){
        for(let i = 0;i<this.#programs.length;i++){
           this.#result[this.#programs[i]] = {
            isExamined:false,
            value:0
           }
       }
    }
    getresults(){
        return this.#result
    }
    pasExam(program,grade){
       if(!this.#programs.includes(program)){
        return 'you didnt have this subject in your programs'
       }
        let arr = []
        let sum = 0
        if(this.#result[program].isExamined === false){
            this.#result[program].isExamined = true  
        }else{
            return 'you have already pass this exam and you cant repass this exam'
        }
        this.#result[program].value = grade
        for(let key in this.#result){
            if(this.#result[key].isExamined === true){
               arr.push(this.#result[key].value)
            }
        }
        if(arr.length === this.#programs.length){
            for(let i = 0;i<arr.length;i++){
                sum += arr[i]
            }
            if(sum>=50){
                this._year = this._year+1
                return `congritulations you will transform next ${this._year} course`
            }
        }
        else{
            return 'you have some exams'
        }
    }
    toString(){
        return `${super.toString()} and i am a student and learn in ${this._year} course`
    }
}

class Teacher extends Person{
    constructor(firstName, lastName, gender, age,program,pay){
        super(firstName, lastName, gender, age,)
           this._program = program
           this._pay = pay
    }
    get pay(){
        return this._pay
    }
    set pay(val){
        if(typeof val === 'number'&&val>0){
            this._pay = val
        }
        else{
            return 'you shold write a positive number'
        }
    }
    get program(){
        return this._program
    }
    set program(val){
        if(typeof val === 'string'&& val.length>2){
            this._program = val
        }
        else{
            return 'you should write string which length will be greather then 2'
        }
    }
    toString(){
        return `${super.toString()} and i am techer at ${this._program}`
    }
}


