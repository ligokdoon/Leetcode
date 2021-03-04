const readline = require("readline");
const validator = require("email-validator");
const emailValidator = validator.validate;
const generateReferralId = require("randomstring");
const User = require('./user.js');

const app = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Please input a command. Type help for available commands \n'
    })

    const users = {};
    const existingReferralIds = new Set();

    rl.prompt();

    rl.on('line', (input) => {
        const command = input.split(' ');

        if (command[0] === 'subscribe') {
            const email = command[1];

            if (!emailValidator(email)) console.log('Invalid email provided, please re-enter command');

            if (command[2] === 'with' && command[3] === 'code') {
                const referralCode = command[4];
                if (existingReferralIds.has(referralCode)) {
                    subscribe(email, referralCode);
                } else {
                    console.log('Invalid referral code, please re-enter command');
                }
            } else if (command.length === 2) {
                subscribe(email);
            } 
            else {
                console.log('Command not recognized, please input another command or type help for available commands')
            }
        } else if (command[0] === 'get') {
            const email = command[command.length - 1];
            referralCount(email);
        } else if (command[0] === 'who') {

        } else if (command[0] === 'help') {
            help();
        } else {
            console.log('Command not recognized, please input another command or type help for available commands')
        }
    })

    const help = () => {
        console.log('The following commands are avilable: ');
        console.log('   subscribe <email>');
        console.log('   subscribe <email> with code <code>');
        console.log('   get referral count for <email>');
        console.log('   who referred <email>');
        console.log('   who has <email> referred');
        console.log('   who is the biggest influencer')
        console.log('Please input a command');
    }

    const subscribe = (email, referredBy) => {
        const newUser = new User(email, referredBy);
        newUser.referralId = generateReferralId.generate(6);
        while (existingReferralIds.has(newUser.referralId)) {
            newUser.referralId = generateReferralId.generate(6);
        }
        existingReferralIds.add(newUser.referralId);
        users[newUser.email] = newUser;

        if (referredBy) {
            addReferral(referredBy, newUser.email);
        }
        
        console.log(`subscribed ${newUser.email} their referral code is ${newUser.referralId}`)
        console.log('Please input another command');
    };

    const referralCount = email => {
        const user = users[email];
        if (user) {
            console.log(`${user.email} has ${user.referrals.length} referrals`)
            console.log('Please input a command');
        } else {
            console.log('No such user, please re-enter command')
        }
    }

    const addReferral = (referrerId, referral) => {
        const referrer = findReferrer(referrerId);
        users[referrer].referrals.push(referral);
    }

    const findReferrer = (referrerId) => {
        Object.values(users).forEach(user => {
            if (user.referralId === referrerId) return user.email;
        })
    }

    // const biggestInfluencer;
}

app();


