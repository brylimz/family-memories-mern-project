import  Express  from "express";

const router = Express.Router()

router.get('/',(req, res)=>
{
res.send('This works')

});

export default router;