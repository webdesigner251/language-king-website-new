import express from 'express';
import {
  getPTEStudentsForFrontend,
  getNAATICCLStudentsForFrontend,
  getPTEFameForFrontend,
  getNAATICCLResultsForFrontend
} from '../controller/frontendController.js';

const router = express.Router();

// Frontend API routes
router.get('/frontend/pte-students', getPTEStudentsForFrontend);
router.get('/frontend/naati-ccl-students', getNAATICCLStudentsForFrontend);
router.get('/frontend/pte-fame', getPTEFameForFrontend);
router.get('/frontend/naati-ccl-results', getNAATICCLResultsForFrontend);

export default router;