const baseUrl = 'https://red-ucate-api.herokuapp.com/projects'

export const loadProjects = () => {
  return fetch(baseUrl)
    .then(res => res.json())
}