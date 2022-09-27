import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";
import { Specification } from "../../model/Specification";

class ListSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute(): Specification[] {
    return this.specificationRepository.list();
  }
}

export { ListSpecificationUseCase };
