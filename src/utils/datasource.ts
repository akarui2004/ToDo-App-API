import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  'todo_db',
  'db',
  'db',
  {
    host: 'localhost',
    port: 3320,
    dialect: 'mysql'
  }
);

export default sequelize;