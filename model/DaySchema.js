import { Schema, model } from "mongoose";

export const daySchema = new Schema({
  breakfast: {
    type: Array,
    required: true,
  },
  snack: {
    type: Array,
    required: true,
  },
  Lunch: {
    type: Array,
    required: true,
  },
  Snack: {
    type: Array,
    required: true,
  },
  Dinner: {
    type: Array,
    required: true,
  },
});
