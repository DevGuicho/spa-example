const API = 'https://rickandmortyapi.com/api/character/'

const getData = async (id) => {
  const apiUrl = id ? `${API}${id}` : API
  try {
    // eslint-disable-next-line no-undef
    const res = await fetch(apiUrl)
    const data = await res.json()
    return data
  } catch (error) {
    console.log('fetch error', error)
  }
}

export default getData
