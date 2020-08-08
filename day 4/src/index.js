// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const selectElement = document.querySelector(".national");
selectElement.addEventListener("change", (nara) => {
  localStorage.setItem("country", nara.target.value);
});
