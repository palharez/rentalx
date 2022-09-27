import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { ListCategoryController } from "./ListCategoriesController";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoriesController = new ListCategoryController(
  listCategoriesUseCase
);

export { listCategoriesController };
