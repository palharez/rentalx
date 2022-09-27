import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  findByName(name: string): Category;

  create(data: ICreateCategoryDTO): void;

  list(): Category[];
}

export { ICategoryRepository, ICreateCategoryDTO };
