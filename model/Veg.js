import { Schema, model } from "mongoose";
import { daySchema } from "./DaySchema";

const vegSchema = new Schema({
  Monday: daySchema,
  Tuesday: daySchema,
  Wednesday: daySchema,
  Thursday: daySchema,
  Friday: daySchema,
  Saturday: daySchema,
  Sunday: daySchema,
  level: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

export const VegSchema = model("veg", vegSchema);
