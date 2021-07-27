/**
 * @description Created WinnersOfTheYear interface to match up the response when expecting from the API. This is for scalability and reusability
 */
export interface WinnersOfTheYear {
  MRData: {
    RaceTable: {
      season: string,
      position: string,
      Races: [
        {
          season: string,
          round: string,
          url: string,
          raceName: string,
          Circuit: {
            circuitId: string,
            url: string,
            circuitName: string,
            Location: {
              lat: 24.4672,
              long: 54.6031,
              locality: string,
              country: string
            }
          },
          date: string,
          time: string,
          Results: [
            {
              number: string,
              position: string,
              positionText: string,
              points: string,
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
              Constructor: {
                constructorId: string,
                url: string,
                name: string,
                nationality: string
              },
              grid: string,
              laps: string,
              status: string,
              Time: {
                millis: string,
                time: string
              },
              FastestLap: {
                rank: string,
                lap: string,
                Time: {
                  time: string
                },
                AverageSpeed: {
                  units: string,
                  speed: string
                }
              }
            }
          ]
        }
      ]
    }
  }
}
