import * as Yup from 'yup';

export type Product = {
  id: string,
  name: string,
  description: string,
  price: number,
  media: string,
};

export const ProductSchema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
});
