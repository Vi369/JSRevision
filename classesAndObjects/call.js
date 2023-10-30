function setUsername(username){
    this.username = username;
    // console.log("called");
}

function CreateAChaiUser(username, price, contact){
    setUsername.call(this,username)
    this.price = price,
    this.contact = contact;
}


const user = new CreateAChaiUser("vikas", 8, "chai@user.com"); // new user banane par overrite ho jayega 

const user2 = new CreateAChaiUser("vinay", 8, "chai@user2.com")
console.log(user);
console.log(user2);