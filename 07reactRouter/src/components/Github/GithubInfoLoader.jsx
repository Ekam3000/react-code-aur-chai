export default async function GithubInfoLoader() {
  const response = await fetch('https://api.github.com/users/Ekam3000');
  return response.json();
}