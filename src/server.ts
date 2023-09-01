import { app } from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then((): void => {
    console.log("Database connected.");

    const PORT = Number(process.env.PORT) || 3000;

    const runningMsg = `Server running on http://localhost:${PORT}`;

    app.listen(PORT, async (): Promise<void> => {
      console.log(runningMsg);
    });
  })
  .catch((error: unknown): void => {
    console.error(error);
  });
 