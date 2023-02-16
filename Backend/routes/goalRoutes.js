const express = require('express')

const router = express.Router()
const {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')
// router.get('/', getGoals)

// router.post('/', setGoals)

//instead of using this use this routes

router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').put(protect, updateGoals).delete(protect, deleteGoals)

//instead of using this use this
// router.put('/:id', updateGoals)

// router.delete('/:id', deleteGoals)

module.exports = router;