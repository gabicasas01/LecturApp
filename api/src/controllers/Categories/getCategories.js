import { categories } from '../../utils/data'

export const getCategories = (req, res) => {
  try {
    if (!categories) {
      throw new Error("Categories file not found");
    }
    res.status(200).json(categories);
  } catch (error) {
    console.log('ESTE ES EL ERROR:', error.message)
    res.status(500).send(error.message);
  }
};
