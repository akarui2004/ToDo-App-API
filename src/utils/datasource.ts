import { Options, Sequelize } from "sequelize";
import { config } from "src/config";

export class SequelizeConnection {
  private static instance: Sequelize;

  static getInstance(): Sequelize {
    if (!SequelizeConnection.instance) {
      const dbConfig: Options = {};
      
      dbConfig.port = config.database.port as number;
      dbConfig.host = config.database.host;
      dbConfig.ssl = config.database.ssl ?? false;
      dbConfig.database = config.database.name;
      dbConfig.username = config.database.username;
      dbConfig.password = config.database.password;
      dbConfig.logging = config.database.logging ?? false;
      dbConfig.dialect = config.database.dialect;

      if (config.database.ssl) {
        dbConfig.dialectOptions = {
          ssl: {
            require: config.database.ssl,
            rejectUnauthorized: false,
          }
        }
      }

      SequelizeConnection.instance = new Sequelize(dbConfig);
    }
    return SequelizeConnection.instance;
  }

  static async connect(): Promise<Sequelize> {
    const sequelize = SequelizeConnection.getInstance();
    try {
      await sequelize.authenticate();
      console.log("Database connection authenticated successfully");
      return sequelize;
    } catch (e: any) {
      console.log("Error while creation connection to database :: " + e?.message);
      return sequelize;
    }
  }

  static async close(): Promise<Sequelize> {
    const sequelize = SequelizeConnection.getInstance();
    try {
      await sequelize.close();
      console.log("Database connection closed successfully");
      return sequelize;
    } catch (e: any) {
      console.log("Error while closing database connection :: " + e?.message);
      return sequelize;
    }
  }
}
