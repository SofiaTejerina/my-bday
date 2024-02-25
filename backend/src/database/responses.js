import sql from './sqlClient.js'

class ResponsesDB {

    async getResponses() {
        await this.validateTableExist()
        const responses = await sql`
        select
            *
        from responses
        `;
        return responses;
    }
    
    async insertResponse({selectedGames = [], name="", threeWords="", flavours=""}) {
        await this.validateTableExist()
        const responses = await sql`
        insert into responses
            (selectedGames, name, threeWords, flavours)
        values
            (${ selectedGames }, ${ name }, ${ threeWords }, ${ flavours })
        returning selectedGames, name, threeWords, flavours, id
        `
        return responses
    }

    async validateTableExist() {
        await sql`create table if not exists responses (
            selectedGames VARCHAR[],
            name VARCHAR,
            threeWords VARCHAR,
            flavours VARCHAR,
            id SERIAL PRIMARY KEY
        )`
    }
}

export default new ResponsesDB();
