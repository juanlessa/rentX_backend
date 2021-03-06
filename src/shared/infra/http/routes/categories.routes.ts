import { Router, Request, Response } from "express";
import multer from "multer";

import { CreateCategoryController } from "@modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "@modules/cars/useCases/listCategories/ListCategoriesController";

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post("/", (request: Request, response: Response) => {
    return createCategoryController.handle(request, response);
});
categoriesRoutes.post(
    "/import",
    upload.single("file"),
    importCategoryController.handle
);

export default categoriesRoutes;
