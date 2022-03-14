import { object, string, TypeOf } from "zod";

export const searchCurrentProduct = object({
  params: object({
    id: string(),
  }),
});

export type SearchCurrentProductInput = TypeOf<typeof searchCurrentProduct>["params"];
