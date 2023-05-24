import mysqldump from "mysqldump";
import { CronJob } from "cron";
import * as dotenv from 'dotenv';

dotenv.config({ path: './.env' }); // relative from third project root
const env = process.env;

//new CronJob(env.RUN_TIME, runDump, null, true);

const currentTime = new Date();
const backupPath = env.BACKUP_PATH || './';

async function runDump() {
  await mysqldump({
    connection: {
      host: env.DATABASE_HOST,
      user: env.DATABASE_USERNAME,
      password: env.DATABASE_PASSWORD,
      database: env.DATABASE_NAME,
    },
    dumpToFile: `${backupPath}/${currentTime.getFullYear()}-${currentTime.getMonth() + 1}-${currentTime.getDate()}-${currentTime.getHours()}-${currentTime.getMinutes()}.sql`,
  });
}
runDump()