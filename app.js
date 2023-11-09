const dropdownDiv = document.querySelector(".dropdown-content")
const dropBtn = document.querySelector(".dropbtn")
const countryContainers = document.querySelectorAll(".country-container")
const leftBtn = document.querySelector(".left-btn")
const rightBtn = document.querySelector(".right-btn")
import data from "./data.json" assert { type: "json" }
let count

const numberFormatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  maximumFractionDigits: 2
});

function firstLoad() {
  countryContainers.forEach((countryContainer, id) => {
    count = id
    countryContainer.addEventListener("click", () => {
      let storageId = Number(countryContainer.getAttribute("data-value"))+count-7
      localStorage.setItem("id", storageId)
      window.open('./detail.html', '_self')
    })
    countryContainer.childNodes[1].src = data[id].flags.svg
    countryContainer.childNodes[3].textContent = data[id].name
    countryContainer.childNodes[5].textContent =  `Population: ${numberFormatter.format(data[id].population)}`
    countryContainer.childNodes[7].textContent = `Region: ${data[id].region}`
    countryContainer.childNodes[9].textContent = `Capital: ${data[id].capital}`
  })
  leftBtn.disabled = true
}

firstLoad()

leftBtn.addEventListener("click", (e) => {
  count -= 8
  countryContainers.forEach((countryContainer, id) => {
    id+=count
    countryContainer.childNodes[1].src = data[id].flags.svg
    countryContainer.childNodes[3].textContent = data[id].name
    countryContainer.childNodes[5].textContent =  `Population: ${numberFormatter.format(data[id].population)}`
    countryContainer.childNodes[7].textContent = `Region: ${data[id].region}`
    countryContainer.childNodes[9].textContent = `Capital: ${data[id].capital}`
  })
  rightBtn.disabled = false
  if (count<8)  {
    leftBtn.disabled = true
  }
})

rightBtn.addEventListener("click", (e) => {
  count += 8
  countryContainers.forEach((countryContainer, id) => {
    id+=count
    countryContainer.childNodes[1].src = data[id].flags.svg
    countryContainer.childNodes[3].textContent = data[id].name
    countryContainer.childNodes[5].textContent =  `Population: ${numberFormatter.format(data[id].population)}`
    countryContainer.childNodes[7].textContent = `Region: ${data[id].region}`
    countryContainer.childNodes[9].textContent = `Capital: ${data[id].capital}`
  })
  leftBtn.disabled = false
  if (count>238) {
    rightBtn.disabled = true
  }
})

dropBtn.addEventListener("click", (e) => {
  dropdownDiv.classList.toggle("show")
})