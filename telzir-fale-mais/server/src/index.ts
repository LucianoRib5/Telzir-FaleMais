import { app } from "./app";
import { getAllPresets } from "./endpoints/getAllPresets";

app.get("/presets", getAllPresets)