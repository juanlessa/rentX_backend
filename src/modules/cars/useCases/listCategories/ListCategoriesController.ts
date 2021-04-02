import { Request, Response } from "express";
import ListCategoriesService from "./ListCategoriesService";

class listCategoriesController {
    constructor(private listCategoriesService: ListCategoriesService) {}
    handle(request: Request, response: Response) {
        const all = this.listCategoriesService.execute();
        return response.json(all);
    }
}

export default listCategoriesController;
