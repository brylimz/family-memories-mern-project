import  Express  from "express";
import { getPosts } from "../controllers/posts.js";

const router = Express.Router()

router.get('/', getPosts);

export default router;