import fs from 'fs'

class DBClient {
    writeJSON(data) {
        fs.writeFileSync(`./src/database/responses.json`, JSON.stringify(data, null, 4))
    }

    readJSON() {
        return JSON.parse(fs.readFileSync(`./src/database/responses.json`, 'utf8'))
    }
}

export default new DBClient();

// docker run --name some-postgres -e POSTGRES_PASSWORD=123123 -e POSTGRES_DB=responsesDB -p  5432:5432 -d postgres

