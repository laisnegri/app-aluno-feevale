require('dotenv').config();

module.exports = {
  dialect: process.env.DB_DIALECT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  define: {
    timestamps: true, // acrescenta o cratedAt e updatedAt como default nas tabelas
    underscored: true, // torna padrão o nome separado por _
    underscoredAll: true
  },
  native: true,
  ssl: true
};
