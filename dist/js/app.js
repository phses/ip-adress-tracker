const ipGeolocation = new IpGeolocation(); 
const map = new Map(51.505, -0.09);
const ui = new UI();
const formControl = document.querySelector('.form-control');

map.makeMap();

function getIpUser() {
  ipGeolocation.getIpUser()
  .then(result => getIpData(result.ip))
  .catch(err => console.log(err));
}

getIpUser();

function validateIPaddress(ipaddress) {  
  const ip = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const dn = /^(?![0-9]+$)(?!-)[a-zA-Z0-9%-]{,63}(?<!-)$/;
  if (ip.test(ipaddress) || dn.test(ipaddress)) {  
    return (true)  
  }  return (false)  
}  

function handleResult(result) {
  map.setMapLocation(result.location.lat, result.location.lng);
  console.log(result);
  ui.print(result);
}

function getIpData(ip) {
  ipGeolocation.getIpData(ip)
    .then(result => handleResult(result))
    .catch(err => console.log(err));
}

formControl.addEventListener('submit', (e) => {
  const ip = document.getElementById('ip');
  
  if (validateIPaddress(ip.value)) {
    getIpData(ip.value);
  } else {
    alert('ip wrong');
  }
  ip.value = '';
  e.preventDefault()
})