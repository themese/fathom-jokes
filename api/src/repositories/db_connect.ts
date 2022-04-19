import { Pool, QueryResult } from 'pg';

// this is not secure
const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'jokes_db',
  password: 'root',
  port: 5432,
});

export default {
  query: (text: string, params: any) => pool.query(text, params),
}