import { runMigration } from '../src/database/migration';

runMigration().finally(() => process.exit(1));
