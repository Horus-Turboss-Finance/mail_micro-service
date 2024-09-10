// import controller from './mail.controler';
import { isAuthService } from '../../middleware/auth';
import express from "express";

const router = express.Router()
router.use(isAuthService)

/* trial expirations notices */
router.route('/trial-expiration/notice')

/* Trial expriration reminders */
router.route('/trial-expiration/reminders')


/* User invitations */
router.route('/invitations/users')

/* User invitations */
router.route('/invitations/beta')


/* Receipts */
router.route('/receipts')

/* Invoices */
router.route('/invoices')


/* Update notification email */
router.route('/notification/update')


/* connection, action, etc */
router.route('/notification/actions')


/* Reset password */ 
router.route('/password/reset')


/* Dunning */
router.route('/dunning')


export default router