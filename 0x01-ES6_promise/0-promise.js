export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    const response = { data: 'API Response' };
    resolve(response);
  });
}
