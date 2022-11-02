import express from 'express'
import gravatar from 'gravatar'
import { generateToken } from '../utils/generateTokens.js';
import { check, validationResult } from 'express-validator';
import User from '../models/user.js';

const router = express.Router();

// @route    POST api/users
// @desc     Test route
// @access   Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    console.log("check");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Check if user already exists
    const { name, email, password, isSeller } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      //Get users gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });

      user = new User({
        name,
        email,
        avatar,
        password,
        isSeller
      });

    

      await user.save();

     
        res.status(200).json({token: generateToken(user.id)})

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

export default router