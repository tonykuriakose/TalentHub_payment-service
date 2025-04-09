import { config } from "dotenv";
import { DataSource } from "typeorm";
config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: process.env.NODE_ENV === "development",
  // logging: true,
  entities:
    process.env.NODE_ENV === "production"
      ? ["dist/**/*.entity.js"]
      : ["src/**/*.entity.ts"],
  migrations: [],
  subscribers: [],
});

export const connectDb = async () => {
  try {
    await AppDataSource.initialize();
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection failure");

    process.exit(1);
  }
};

export const disConnectDb = async () => {
  await AppDataSource.destroy();
};








