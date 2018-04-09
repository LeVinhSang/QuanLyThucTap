class User {

    constructor(userName, passWord){
        this.userName = userName;
        this.passWord = passWord;
    }

    getUserName(){
        return this.userName;
    }

    getPassword(){
        return this.passWord;
    }

    setRole(role){
        this.role = role;
    }

    getRole() {
        return this.role;
    }
}

module.exports = User;
