import { connectDb, disConnectDb } from "./postgresql";

export default class Database {

    async connect(): Promise<void> {
        await connectDb()
    }

    async disconnect(): Promise<void> {
        await disConnectDb()
    }
}