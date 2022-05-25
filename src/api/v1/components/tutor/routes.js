import express from "express";
import verifyToken from "../../middlewares/verifyToken";
import tutorController from "./controllers";

const tutorRoutes = express.Router();

//======================== GET ========================
tutorRoutes.get("/", tutorController.getListTutors);
tutorRoutes.get("/search", tutorController.searchAllTutors);
tutorRoutes.get("/profile/me", verifyToken, tutorController.getProfileByUserId);
tutorRoutes.get("/profile/:tutorId", tutorController.getProfile);

//======================== POST ========================
tutorRoutes.post("/", tutorController.createNewTutor);

//======================== PUT ========================
tutorRoutes.put("/profile/me", verifyToken, tutorController.updateProfile);
tutorRoutes.put(
  "/profile/media",
  verifyToken,
  tutorController.updateProfileMedia,
);
tutorRoutes.put(
  "/profile/certificates",
  verifyToken,
  tutorController.updateCertificates,
);

//======================== DELETE ========================

export default tutorRoutes;
