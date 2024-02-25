import sql from './sqlClient.js'

class ResponsesDB {

    async getResponses() {
      const responses = await sql`
        select
          *
        from responses
      `;
      return responses;
    }
    
    async insertResponse({selectedGames = [], name="", threeWords="", flavours=""}) {
      const responses = await sql`
        insert into responses
          (selectedGames, name, threeWords, flavours)
        values
          (${ selectedGames }, ${ name }, ${ threeWords }, ${ flavours })
        returning selectedGames, name, threeWords, flavours, id
      `
      return responses
    }
}

export default new ResponsesDB();
