const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api';
const squad = 2;
const team = 5;
const name = "Sjors";
const fullUrl = `${url}/squads/${squad}/teams/${team}/members`

// GET REQUEST
const teams = fetch(`${fullUrl}`)
  .then(response => response.json())
  .then(data => useData(data));

function useData(data) {
  console.log(data);
  if (data) {
    putData(data);
    displayData(data);
  }
}

// PUT REQUEST
function putData(data) {
  const putData = {
    ...data,
    mugshot: '',
    githubHandle: '',
    other: {
      sport: '',
      muziek: '',
      werkplek: ''
    }
  }
  postData(`${fullUrl}/1`, putData)
    .then(data => {
      console.log('put', data);
    });
}

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
}

function displayData(data) {
  // Set document title
  const htmlTitle = `Visitekaartje van ${name}`;
  document.title = htmlTitle;
}
