import getData from '@utils/getData'

const Home = async () => {
  const { results } = await getData()

  const view = `
    <div class="Characters">
    ${results
      .map(
        (character) => `
      <article class="Character-item">
        <a href="#/${character.id}/">
          <img src="${character.image}" alt="${character.id}" />
          <h2>${character.name}</h2>
        </a>
      </article>
    `
      )
      .join('')}
      
    </div>
  `
  return view
}

export default Home
