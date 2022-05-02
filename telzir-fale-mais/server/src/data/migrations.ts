import { connection } from "./connection";
import presets from "./presets.json";

const printError = (error: any) => { console.log(error.sqlMessage || error.message) };

const createTable = () => connection.schema.hasTable('preset_list').then(exists =>{
   if(!exists){
       return connection.schema.createTable('preset_list', table =>{
           table.increments('id');
           table.string('source').notNullable();
           table.string('destiny').notNullable();
           table.double('value_per_minute').notNullable();
       });
   };
})
.then(() => { console.log("Tabela criada") })
.catch(printError)

const insertPresets = () => connection("preset_list")
   .insert(presets)
   .then(() => { console.log("Predefinições geradas") })
   .catch(printError)

const closeConnection = () => { connection.destroy() };

createTable()
   .then(insertPresets)
   .finally(closeConnection);