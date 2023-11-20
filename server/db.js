const Pool = require("pg").Pool;
require('dotenv').config()

const pool = new Pool({
  // user: process.env.LOCAL_DATABASE_USER,
  // password: process.env.LOCAL_DATABASE_PASSWORD,
  // host: process.env.LOCAL_DATABASE_HOST,
  // port: process.env.LOCAL_DATATBASE_PORT,
  // database: process.env.LOCAL_DATABASE_NAME,

  connectionString: 'PGPASSWORD=0f5bIoJhXpH212i6vvrnNm6zNhK6sCKj psql -h dpg-cldcjmd4lnec73e8batg-a.oregon-postgres.render.com -U pern_stack_todo_db_user pern_stack_todo_db',
  ssl: { rejectUnauthorized: false },
  user: 'pern_stack_todo_db_user',
  password: '0f5bIoJhXpH212i6vvrnNm6zNhK6sCKj',
  host: 'dpg-cldcjmd4lnec73e8batg-a',
  port: '5432',
  database: 'pern_stack_todo_db',

  // connectionString: process.env.RENDER_DATABASE_CONNECTION_STRING,
  // ssl: { rejectUnauthorized: false },
  // user: process.env.RENDER_DATABASE_USER,
  // password: process.env.RENDER_DATABASE_PASSWORD,
  // host: process.env.RENDER_DATABASE_HOST,
  // port: process.env.RENDER_DATABASE_PORT,
  // database: process.env.RENDER_DATABASE_NAME,
});

module.exports = pool;