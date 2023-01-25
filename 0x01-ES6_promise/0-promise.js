export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const response = { data: "API Response" };
    resolve(response);
  });
}
