const { Router } = require ('express')
const {  createUser,
         updateUser,
         deleteUser,
         listUser,
        findUser
             } =require ('../controllers/user.controllers')

const router = Router()

router.get ('/', listUser);
router.get ('/userd_id', findUser);
router.post ('/', createUser);
router.put ('/user_id', updateUser);
router.delete ('user/id', deleteUser);

module.exports = router