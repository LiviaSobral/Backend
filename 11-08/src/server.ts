import express, {Application, json} from "express";
import routesUser from "./routes/UserRoutes";
import routesProd from "./routes/ProdutoRoutes";

const app: Application = express();
const PORT:number = 3000;

app.use(express.json());

app.use(routesUser);
app.use(routesProd);

app.listen(PORT, () => {
    console.log("Ta indo")
})

