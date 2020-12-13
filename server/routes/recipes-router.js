const express = require('express');

const recipesController = require('../controllers/recipes-controller');

const router = express.Router();

router.post('/recipes/create', recipesController.createRecipe);
router.put('/recipes/:id', recipesController.updateRecipe);
router.delete('/recipes/:id', recipesController.deleteRecipe);
router.get('/recipes/:id', recipesController.getRecipeById);
router.get('/recipes/list', recipesController.getRecipes);

module.exports = router;