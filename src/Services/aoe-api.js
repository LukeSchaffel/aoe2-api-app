const BASE_URL = "https://age-of-empires-2-api.herokuapp.com/api/v1"

console.log(`${BASE_URL}/civilizations`);

export function getAllCivilizations() {
  return fetch(`${BASE_URL}/civilizations`, {
    headers: 'mode: no-cors'
  })
  .then(res => res.json())
}


