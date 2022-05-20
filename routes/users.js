const router = require('express').Router();

router.get("/" , (req , res) =>{
    res.send("<h2>User router!</h2>")
})


module.exports = router ; 