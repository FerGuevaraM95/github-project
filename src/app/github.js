class Github {

    constructor(clientId, clientSecret) {
        this.client_id = clientId;
        this.client_secret = clientSecret;
    }

    async fetchUser(user) {
        const userDataRequest= await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this,this.client_secret}`);
        const userData = await userDataRequest.json();
        console.log(userData);
    }
}

module.exports = Github;