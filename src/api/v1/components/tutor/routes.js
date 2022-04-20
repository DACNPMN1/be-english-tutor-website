import express from 'express';
import tutorController from './controllers';

const tutorRoutes = express.Router();

//======================== GET ========================
tutorRoutes.get('/', tutorController.getListTutors);
tutorRoutes.get('/search', tutorController.searchAllTutors);
tutorRoutes.get('/profile/:tutorId', tutorController.getProfile);
//======================== POST ========================
//======================== PUT ========================
//======================== DELETE ========================

export default tutorRoutes;
