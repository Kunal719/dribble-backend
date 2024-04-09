const Sib = require('sib-api-v3-sdk');

const sendEmail = async (receiverEmail, subject, message) => {
    const client = Sib.ApiClient.instance;

    var apiKey = client.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_EMAIL_KEY;

    const tranEmailApi = new Sib.TransactionalEmailsApi();

    const sender = {
        email: 'kunalsrivastav721@gmail.com'
    }

    const receiver = [
        {
            email: receiverEmail
        }
    ]

    tranEmailApi.sendTransacEmail({
        sender,
        to: receiver,
        subject: subject,
        textContent: message,
    }).then(console.log).catch(console.error)
}

module.exports = sendEmail;