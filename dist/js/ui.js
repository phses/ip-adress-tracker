class UI {
  constructor() {
    this.card = document.querySelector('.card-results')
    this.ipAddress = document.getElementById('ip-address');
    this.location = document.getElementById('location');
    this.timeZone = document.getElementById('timezone');
    this.isp = document.getElementById('isp');
  }
  print(result) {

    this.card.classList.remove('hidden');

    this.ipAddress.innerHTML = `
      <h3>Ip Address</h3>
      <p>${result.ip}</p>
    ` 
    this.location.innerHTML = `
      <h3>Location</h3>
      <p>${result.location.region}, ${result.location.country} ${result.location.postalCode}</p>
    ` 
    this.timeZone.innerHTML = `
      <h3>Timezone</h3>
      <p>UTC  ${result.location.timezone}</p>
    ` 
    this.isp.innerHTML = `
      <h3>Isp</h3>
      <p>${result.isp}</p>
    ` 
  }
}