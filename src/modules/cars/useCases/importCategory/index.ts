import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategtoryUseCase } from "./ImportCategoryUseCase";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

const categoriesRepository = CategoriesRepository.getInstance();

const importCategtoryUseCase = new ImportCategtoryUseCase(categoriesRepository);

const importCategoryController = new ImportCategoryController(
  importCategtoryUseCase
);

export { importCategoryController };
