const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()
// This event listener guives us whats being typped in
filter.addEventListener('input', (e) => filterData(e.target.value)) 
async function getData() {
    const res = await fetch('https://randomuser.me/api/?results=50')
    //const data = await res.json()
    //console.log(data)

    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''

    results.forEach(user => {
      const li = document.createElement('li')
      listItems.push(li)

      li.innerHTML = `
      <img src="${user.picture.large}" alt"${user.name.first}">
      <div class="user-info">
      <h4>${user.name.first} ${user.name.last}<h4>
      <p>${user.location.city} ${user.location.country}</p>
      </div>
      `
      result.appendChild(li)
    })
}
//This function helps us to search for people by name or location
function filterData(searchTerm) {
  listItems.forEach(item => {
    if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide')
    } else{
      item.classList.add('hide')
    }
  })
}