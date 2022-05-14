class IpGeolocation {
  constructor() {
    this.apiKey = 'at_yY0aZLgjsft5flizmOYYOVFuEEHC8' 
  }

  async getIpData(ip) {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${this.apiKey}&ipAddress=${ip}`);

    const responseData = await response.json();

    return responseData;
  }
}