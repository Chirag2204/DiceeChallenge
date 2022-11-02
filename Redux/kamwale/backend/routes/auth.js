import User from '../models/user.js'
import { generateToken } from '../utils/generateTokens.js'
import express from 'express'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

//@desc To Get User Profile
//@route GET /api/auth
//access Private

router.get('/', protect, async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isSeller: user.isSeller
        })

    } else {
        res.status(401)
        throw new Error('User Not Found')
    }
})



//@desc To Auth user and get token
//@route POST /api/users/login
//access Public

router.post('/',async (req, res) => {

    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isSeller: user.isSeller,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error("Invalid username or Password")
    }
})

export default router;

