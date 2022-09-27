import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const alreadyExistisSpecification =
      this.specificationsRepository.findByName(name);

    if (alreadyExistisSpecification) {
      throw new Error("Specificaiton already exists!");
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
