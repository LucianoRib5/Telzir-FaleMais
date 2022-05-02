import { Request, Response } from "express";
import selectAllPresets from "../queries/selectAllPresets";

export const getAllPresets = async( req: Request, res: Response): Promise<void> =>{
    try{
        const presets = await selectAllPresets();

        res.status(200).send(presets);
    } catch(error: any){
        res.send(error.message || error.sqlMessage)
    };
};