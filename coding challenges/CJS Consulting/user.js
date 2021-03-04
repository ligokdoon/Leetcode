class User {
    constructor(email, referredBy) {
        this.email = email;
        this.referredBy = referredBy;
        this.referralId;
        this.referrals = [];
    }
}

module.exports = User;