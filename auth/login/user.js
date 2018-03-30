class User {

    /**
     *
     * @param {string} user_name
     */
    constructor(user_name) {
        this.user_name = user_name;
    }

    /**
     *
     * @return {string}
     */
    getUser_name() {
        return this.user_name;
    }

    /**
     *
     * @param {string} password
     */
    setPassword(password) {
        this.password = password;
    }

    /**
     *
     * @return {string}
     */
    getPassword() {
        return this.password;
    }

}

module.exports = User;
