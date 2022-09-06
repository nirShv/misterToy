

const express = require('express')
const toyService = require('../../services/toy.service')
const router = express.Router()

module.exports = router

// LIST
router.get('/', (req, res) => {
    const filterBy = { txt: req.query.name || '', maxPrice: req.query.maxPrice || Infinity, minPrice: req.query.minPrice ||0 }
    // if (req.query.pageIdx) filterBy.pageIdx = req.query.pageIdx
    // if (req.query.userId) filterBy.userId = req.query.userId
    console.log('test LIST');
    console.log('filterBy', filterBy);
    toyService.query(filterBy)
        .then(toys => res.send(toys))
})


// READ
router.get('/:toyId', (req, res) => {
    const { toyId } = req.params
    console.log('test READ');
    toyService.getById(toyId)
        .then(toy => res.send(toy))
})


// CREATE
router.post('/', (req, res) => {
    // const loggedinUser = userService.validateToken(req.cookies.loginToken)
    // if (!loggedinUser) return res.status(401).send('Cannot add toy')

    // console.log('POST REQ from user', loggedinUser)
    console.log('test CREATE');
    const toy = req.body
    // toy.owner = loggedinUser
    toyService.save(toy)
        .then(toy => res.send(toy))
})

// UPDATE
router.put('/:toyId', (req, res) => {
    // const loggedinUser = userService.validateToken(req.cookies.loginToken)
    // if (!loggedinUser) return res.status(401).send('Cannot update toy')
    console.log('test UPDATE');
    const toy = req.body
    toyService.save(toy /*,loggedinUser*/)
        .then(toy => res.send(toy))
        .catch((err) => {
            console.log('error', err)
            res.status(400).send('Cannot update toy')
        })
})

// DELETE
router.delete('/:toyId', (req, res) => {
    // const loggedinUser = userService.validateToken(req.cookies.loginToken)
    // if (!loggedinUser) return res.status(401).send('Cannot remove toy')
    console.log('test DELETE');
    const { toyId } = req.params
    toyService.remove(toyId /*,loggedinUser*/)
        .then(() => res.send({ msg: 'Removed succesfully' }))
        .catch((err) => {
            console.log('error', err)
            res.status(400).send('Cannot remove toy')
        })
})

