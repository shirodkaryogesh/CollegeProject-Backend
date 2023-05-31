import { NonvegSchema, VegSchema } from "../model";
import { getErrorMessage } from "../utils";

const getDiets = async (req, res) => {
  try {
    const { gender, calories, level } = req.params;
    const { isVeg } = req.query;
    let diets = null;
    const filter = {
      calories: {
        $gte: +calories - 100,
        $lte: +calories + 100,
      },
      gender,
      level: +level,
    };
    if (isVeg) {
      diets = await VegSchema.find(filter);
    } else {
      diets = await NonvegSchema.find(filter);
    }
    if (diets.length === 0) {
      return res.status(200).json({
        data: diets,
        isError: false,
        message: "No diets found in this range",
      });
    } else {
      return res.status(200).json({
        data: diets,
        isError: false,
        message: "Diets found successfully",
      });
    }
  } catch (error) {
    return res.status(200).json(`Failed due to ${getErrorMessage(error)}`);
  }
};

export { getDiets };
