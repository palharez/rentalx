import { Request, Response } from "express";
import { ImportCategtoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private importCategtoryUseCase: ImportCategtoryUseCase) {}

  handle(request: Request, response: Response) {
    const { file } = request;

    this.importCategtoryUseCase.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };
