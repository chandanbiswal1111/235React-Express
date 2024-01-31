const express = require("express");
const UserModel = require('./models/user-model');
const router = express.Router();

router.get("/getdata", async function (req, res) {

    let result = await UserModel.find({}, { "_id": 0 });

    try {
        console.log("[Read All] - No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);    
    }
});

router.post('/login',async function(req, res){
    const username =req.body.username;
    const password = req.body.password;
    try {
        const user = await UserModel.findOne({ username, password });
        if (user) {
            res.send(user);
        } else {
          res.json({ success: false, message: 'Invalid credentials' });
        }
      } catch (error) {
        res.json({ success: false, message: 'Server error' });
      }
});

router.post('/signup', async function (req, res) {
    const { username, password } = req.body;
  
    try {
      // Check if user with the same username already exists
      const existingUser = await UserModel.findOne({ username });
      if (existingUser) {
        return res.json({ success: false, message: 'User already exists' });
      }
  
      // Create a new user
      const newUser = new UserModel({ username, password});
      await newUser.save();
  
      res.json({ success: true, message: 'User registered successfully' });
    } catch (error) {
      res.json({ success: false, message: 'Server error' });
    }
  });

module.exports = router;