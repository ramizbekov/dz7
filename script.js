async function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async function(position) {
      const lat = position.coords.latitude.toFixed(4);
      const lon = position.coords.longitude.toFixed(4);

      document.getElementById("latitude").textContent = lat;
      document.getElementById("longitude").textContent = lon;

      // Google Maps iframe
      document.getElementById("map").innerHTML = `
        <iframe
          width="100%"
          height="400"
          style="border:0"
          src="https://www.google.com/maps?q=${lat},${lon}&hl=uz&z=15&output=embed"
          allowfullscreen>
        </iframe>`;

      // IP va boshqa ma'lumotlarni olish
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();

      document.getElementById("ip").textContent = data.ip;
      document.getElementById("country").textContent = data.country;
      document.getElementById("city").textContent = data.city;
      document.getElementById("isp").textContent = data.org;
    });
  } else {
    alert("Brauzeringiz joylashuvni qo‘llab-quvvatlamaydi.");
  }
}
