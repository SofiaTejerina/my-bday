import postgres from 'postgres'

const sql = postgres({ 
    host: 'postgres',
    port:  process.env.DATABASE_PORT,
    database: 'postgres',
    username: 'postgres',
    password: 'postgres',
})

export default sql;
