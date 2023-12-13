class DriverService {
  getDriver(year: string){
      fetch(`http://ergast.com/api/f1/${year}/drivers.json`, {
          method: 'GET',
          
      }).then(response => {
          return response.json();
      }).then(data => {
          
        console.log(JSON.stringify(data.MRData.DriverTable.Driver));
      }).catch()
  }
}
export const driverService = new DriverService;
