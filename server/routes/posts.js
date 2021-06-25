import express from 'express';

import { getPost , createPost} from '../controller/posts.js'

const router = express.Router();

router.get('/', getPost);
router.post('/', createPost);
router.get('/', getPost);

export default router;