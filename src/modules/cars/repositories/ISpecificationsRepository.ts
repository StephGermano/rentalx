import { Specification } from '../model/Specification';

// DTO => Data Transfer Object
interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  list(): Specification[];
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
