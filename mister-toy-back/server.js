const express = require('express')
const cookieParser = require('cookie-parser')
const cors=require('cors')


// const userService = require('./services/user.service')
const app = express()

// Express APp Configurations
app.use(cookieParser())
app.use(express.static('public'))
app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000",
    // origin:"http://localhost:3030",
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
}))


// Express Routing:
const toyRoutes = require('./api/toy/toy.controller')
app.use('/api/toy', toyRoutes)


// app.post('/api/login', (req, res) => {
//     const credentials = req.body

//     userService.checkLogin(credentials)
//         .then(user => {
//             if (user) {
//                 const loginToken = userService.getLoginToken(user)
//                 res.cookie('loginToken', loginToken)
//                 res.send(user)
//             } else {
//                 console.log('No such user');
//                 res.status(403).send('Invalid Credentials')
//             }
//         })
// })

// app.post('/api/login', (req, res) => {
//     const credentials = req.body

//     userService.checkLogin(credentials)
//         .then(user => {
//             if (user) {
//                 const loginToken = userService.getLoginToken(user)
//                 res.cookie('loginToken', loginToken)
//                 res.send(user)
//             } else {
//                 console.log('No such user');
//                 res.status(403).send('Invalid Credentials')
//             }
//         })
// })

// app.post('/api/signup', (req, res) => {
//     const credentials = req.body

//     userService.signup(credentials)
//         .then(user => {
//             const loginToken = userService.getLoginToken(user)
//             res.cookie('loginToken', loginToken)
//             res.send(user)
//         })
//         .catch((err) => {
//             console.log('error', err)
//             res.status(400).send('Cannot signup')
//         })        

// })

// app.post('/api/logout', (req, res) => {
//     res.clearCookie('userId')
//     res.send('Logged out')
// })

// app.get('/api/user/:userId', (req, res) => {
//     const { userId } = req.params
//     userService.getById(userId)
//         .then(user => res.send(user))
// })

app.listen(3030, () => console.log('Server listening on port 3030!'))
// app.listen(3000, () => console.log('Server listening on port 3000!'))

