import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Grid,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { recipesService } from '../../api/recipes.service';

export interface RecipeCreateDto {
  name: string;
  servingSize: number;
  preperationTimeSeconds: number;
  cookingTimeSeconds: number;
  ingredients: IngredientDto[];
}

export interface IngredientDto {
  name: string;
  weight?: number;
  volume?: number;
}

const RecipeEditor: React.FC = () => {
  const [formData, setFormData] = useState<RecipeCreateDto>({
    name: '',
    servingSize: 1,
    preperationTimeSeconds: 0,
    cookingTimeSeconds: 0,
    ingredients: [{ name: '', weight: undefined, volume: undefined }],
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number,
  ) => {
    const { name, value } = event.target;

    if (index != null) {
      setFormData((prevData) => {
        const updatedIngredients = [...prevData.ingredients];
        updatedIngredients[index] = {
          ...updatedIngredients[index],
          [name]: value === '' ? undefined : value,
        };
        return { ...prevData, ingredients: updatedIngredients };
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const addIngredient = () => {
    setFormData((prevData) => ({
      ...prevData,
      ingredients: [
        ...prevData.ingredients,
        { name: '', weight: undefined, volume: undefined },
      ],
    }));
  };

  const removeIngredient = (index: number) => {
    setFormData((prevData) => ({
      ...prevData,
      ingredients: prevData.ingredients.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await recipesService.create(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="flex flex-col gap-8 w-full p-3 max-w-xl"
    >
      <Typography variant="h4" textAlign="center">
        Create a Recipe
      </Typography>

      <TextField
        label="Recipe Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Serving Size"
        name="servingSize"
        type="number"
        value={formData.servingSize}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Preparation Time (Seconds)"
        name="preperationTimeSeconds"
        type="number"
        value={formData.preperationTimeSeconds}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Cooking Time (Seconds)"
        name="cookingTimeSeconds"
        type="number"
        value={formData.cookingTimeSeconds}
        onChange={handleChange}
        fullWidth
      />

      <Typography variant="h6">Ingredients</Typography>
      {formData.ingredients.map((ingredient, index) => (
        <Grid container spacing={2} alignItems="center" key={index}>
          <Grid item xs={4}>
            <TextField
              label="Ingredient Name"
              name="name"
              value={ingredient.name}
              onChange={(e) => handleChange(e, index)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Weight (g)"
              name="weight"
              type="number"
              value={ingredient.weight || ''}
              onChange={(e) => handleChange(e, index)}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Volume (ml)"
              name="volume"
              type="number"
              value={ingredient.volume || ''}
              onChange={(e) => handleChange(e, index)}
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton
              color="error"
              onClick={() => removeIngredient(index)}
              disabled={formData.ingredients.length <= 1}
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}

      <Button
        type="button"
        onClick={addIngredient}
        variant="outlined"
        startIcon={<AddCircleOutlineIcon />}
        fullWidth
      >
        Add Ingredient
      </Button>

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit Recipe
      </Button>
    </Box>
  );
};

export default RecipeEditor;
