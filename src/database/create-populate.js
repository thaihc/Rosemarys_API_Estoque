import sqlite3 from "sqlite3";
sqlite3.verbose();

import { dirname } from "path";
import { fileURLToPath } from "url";
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";

const db = new sqlite3.Database(filePath);

const ESTOQUE_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ESTOQUE" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "PRECO" varchar(64),
    "QUANTIDADE" INTEGER,
    "TIPO" varchar(64)
    
  )`;

const ADD_ESTOQUE_ITEM = `
INSERT INTO ESTOQUE (NOME, PRECO, QUANTIDADE, TIPO)
VALUES
    ('Agulha Esterelizada', '27.90', 10, 'Estudio'),
    ('Biqueiras', '51.30', 15, 'Estudio'),
    ('Piercing Industrial', '50.00', 50, 'Estudio'),
    ('Piercing Septo', '70.00', 30, 'Estudio'),
    ('Cartuchos', '280.00', 30, 'Estudio'),
    ('Agulha Soldada', '94.84', 60, 'Estudio'),
    ('Tips Descartáveis', '44.90', 30, 'Estudio'),
    ('Cerveja Bred Artesanal', '20.50', 15, 'Loja'),
    ('Cigarro Eletronico', '159.90', 5,'Loja'),
    ('Tatoo Gel', '24.99', 100,'Loja'),
    ('Vaselina FreshTatoo', '64.90', 40,'Loja'),
    ('Camiseta Rosemarys', '49.90', 30,'Loja')

`;

function criaTabelaEst() {
  db.run(ESTOQUE_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de estoque");
  });
}

function populaTabelaEst() {
  db.run(ADD_ESTOQUE_ITEM, (error) => {
    if (error) console.log("Erro ao popular tabela de estoque");
  });
}

db.serialize(() => {
  criaTabelaEst();
  populaTabelaEst();
});
