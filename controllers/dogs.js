const Dog = require('../models/Dogs')
const router = require('express').Router()

router.get('/dogs', async (req, res) => {
    const allDogs = await Dog.find()
    res.render('dogs/index.ejs', { dogs: allDogs })
})

router.get('/dogs/new', (req, res) => {
    res.render('dogs/new.ejs')
})

router.post('/dogs', async (req, res) => {
    await Dog.create(req.body)
    res.redirect('/dogs/')
})

router.get('/dogs/:dogId', async (req, res) => {
    const foundDog = await Dog.findById(req.params.dogId)
    res.render('dogs/show.ejs', { dog: foundDog })
})

router.delete('/dogs/:dogId', async (req, res) => {
    await Dog.findByIdAndDelete(req.params.dogId)
    res.redirect('/dogs')
})

router.get('/dogs/:dogId/edit', async (req, res) => {
    const foundDog = await Dog.findById(req.params.dogId)
    res.render('dogs/edit.ejs', {
    dog: foundDog
    })
})

router.put('/dogs/:dogId', async (req, res) => {
    await Dog.findByIdAndUpdate(req.params.dogId, req.body)

    res.redirect(`/dogs/${req.params.dogId}`)
})



module.exports = router