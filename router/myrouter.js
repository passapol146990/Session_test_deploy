const express = require('express');
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('index.ejs')
})

router.get('/admin/',(req,res)=>{
    // เช็คว่ายังล็อคอิน session ไหม 
    if(req.session.login){
        res.render('admin.ejs')  
    }else{
        res.redirect('/')
    }
})
// create session
router.post('/login',(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const timeExpires = 100000 // 100second

    // session จะทำงานหนักฝั่ง server แนะนำเก็บข้อมูลที่ต้องการความปลอดภัย
    if(username === 'admin' && password === '123'){
        req.session.username = username
        req.session.password = password
        req.session.login = true
        req.session.cookie.maxAge = timeExpires
        res.redirect('/admin')
    }else{
        res.redirect('/')
    }
})
//  ออกจากระบบ
router.get('/logout',(req,res)=>{
    req.session.destroy()
    res.redirect('/admin')
})

module.exports = router 