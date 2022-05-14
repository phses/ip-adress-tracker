class IpGeolocation {
  constructor() {
    this.apiKey = 'at_yY0aZLgjsft5flizmOYYOVFuEEHC8' 
  }

  async getIpUser() {
    const response = await fetch('https://api64.ipify.org?format=json');
    
    const responseData = await response.json();

    return responseData
  }

  async getIpData(ip) {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${this.apiKey}&ipAddress=${ip}`);

    const responseData = await response.json();

    return responseData;
  }
}