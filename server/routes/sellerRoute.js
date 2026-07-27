import express from 'express';
import { isSellerAuth, sellerLogin } from '../controllers/sellerController.js';
import { sellerLogout } from '../controllers/userController.js';
import authSeller from '../middlewares/authSeller.js';

const sellerRouter = express.Router();

sellerRouter.post('/login', sellerLogin);
sellerRouter.get('/is-auth', authSeller, isSellerAuth);
sellerRouter.post('/logout', sellerLogout);

export default sellerRouter;