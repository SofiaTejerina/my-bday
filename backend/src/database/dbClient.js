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