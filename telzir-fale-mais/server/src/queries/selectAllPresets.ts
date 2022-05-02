import { connection } from "../data/connection";

export default async function selectAllPresets(): Promise<any>{
    const result = await connection("preset_list");
    
    return result;
};