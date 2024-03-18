async function fetchPeople() {
  const response = await fetch("https://swapi.dev/api/people/");
  const data = await response.json();
  return data;
}

async function fetchPlanets() {
  const response = await fetch("https://swapi.dev/api/planets/");
  const data = await response.json();
  return data;
}

const ApiService = {
  fetchPeople,
  fetchPlanets,
};

export default ApiService;
