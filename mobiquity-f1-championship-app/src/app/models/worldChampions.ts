/**
 * @description Created WorldChampions interface to match up the response when expecting from the API. This is for scalability and reusability
 */
export interface WorldChampions {
  MRData: {
    StandingsTable:{
      StandingsLists:[
        {
          season: string,
          round: string,
          DriverStandings: [
            {
              position: string,
              positionText: string,
              points: string,
              wins: string,
              Driver: {
                driverId: string,
                permanentNumber: string,
                code: string,
                url: string,
                givenName: string,
                familyName: string,
                dateOfBirth: string,
                nationality: string
              },
              Constructors: [
                {
                  constructorId: string,
                  url: string,
                  name: string,
                  nationality: string
                }
              ]
            }
          ]
        }
      ]
    }
  };
}
