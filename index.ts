import 'reflect-metadata';
import 'module-alias/register';
import container from 'src/utils/container';
import { Client } from 'src/entities/client';
import { config as configDotEnv } from 'dotenv';

configDotEnv();

const client = container.get(Client);

(async function init() {
  await client.run();
}());

process.on('unhandledRejection', (e: Error) => {
  console.error(`unhandledRejection: ${e.message}`, e.stack);
});

process.on('uncaughtException', (e: Error) => {
  console.error(`uncaughtException: ${e.message}`, e.stack);
});
