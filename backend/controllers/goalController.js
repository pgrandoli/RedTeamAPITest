const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');

//@desc Get goals
//@route GET /api/goals
//@access Private

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({});

    res.status(200).json(goals)
});

//@desc Set goal
//@route POST /api/goals
//@access Private

const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('No goal text');
    };
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
});

//@desc Update goals
//@route PUT /api/goals/:id
//@access Private

const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal) {
        res.status(400)
        throw new Error('No goal found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal)
});

//@desc Delete goals
//@route DELETE /api/goals:id
//@access Private

const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal) {
        res.status(400)
        throw new Error('No goal found')
    }

    await Goal.findByIdAndDelete(req.params.id);

    res.status(200).json({ id: req.params.id })
});

module.exports = {
    getGoals,
    setGoal,
    updateGoals,
    deleteGoals
};