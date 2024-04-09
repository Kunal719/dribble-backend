const User = require("../models/User");
const { sendEmail } = require("../util");
const CustomError = require('../errors');
const { StatusCodes } = require('http-status-codes');

const sendConfirmationEmail = async (req, res) => {
    const { email } = req.body;

    try{
    const user = await User.findOne({ email });

    if(!user) {
        throw new CustomError.BadRequestError('User not found');
    }

    const subject = 'Verify your Dribble account';
    const message = 'Click the link to confirm your email and start using Dribble.';

    await sendEmail(email, subject, message);

    res.status(StatusCodes.OK).json({ msg: 'Verification email resent successfully!' });
  } catch (err) {
    console.error('Error resending verification email:', err);
    res.status(500).json({ message: 'Failed to resend verification email' });
  }
};

module.exports = { sendConfirmationEmail }