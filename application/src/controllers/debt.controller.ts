// import { Request, Response } from "express";
// import GenericFunctions from "./genericFunctions";
// import { DebtModel as model } from "../models/debt.model"; // Schema

// export class DebtController {
//   // ***************** CRUD *********************************
//   public static create = async (req: Request, res: Response) => {
//     const newItem = { ...req.body };
//     return await GenericFunctions.create(model, newItem, req, res);
//   };
//   public static getById = async (req: Request, res: Response) => {
//     return await GenericFunctions.getById(model, req, res);
//   };
//   public static updateById = async (req: Request, res: Response) => {
//     let updatedData = { ...req.body };
//     return await GenericFunctions.updateById(model, updatedData, req, res);
//   };
//   public static deleteById = async (req: Request, res: Response) => {
//     return await GenericFunctions.deleteById(model, req, res);
//   };
//   // *********************************************************
//   // public static test = async (req: Request, res: Response) => {
//   //   const pageContent: string = `<h1>Obligation test api 📑</h1>`;
//   //   return /* not need await */ await res.send(pageContent);
//   // };
// }
