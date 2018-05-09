import {promisify } from 'util'
import crypto from 'crypto'
import nodeMailer from 'nodemailer'
import passport from 'passport'

export const postLogin = (req, res, next) => {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('password', 'Password cannot be blank').notEmpty();
    req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });

    const errors = req.validationErrors();

    if (errors) {
        req.flash('errors', errors);
        return res.send(req.flash('errors'));
    }
}