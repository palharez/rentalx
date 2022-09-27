import { ListSpecificationUseCase } from "./ListSpecificationUseCase";
import { ListSpecificationController } from "./ListSpecificationController";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationRespository";

const categoriesRepository = SpecificationsRepository.getInstance();

const listSpecificationUseCase = new ListSpecificationUseCase(
  categoriesRepository
);

const listSpecificationController = new ListSpecificationController(
  listSpecificationUseCase
);

export { listSpecificationController };
