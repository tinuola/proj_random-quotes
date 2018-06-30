
const url = 'https://quotes.rest/qod.json';

const callQuotesAPI = async () => {
  try {
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      return {
        author: data.contents.quotes[0].author,
        quote: data.contents.quotes[0].quote
      }
    }
    throw new Error('Request failed!');
  }
  catch (error) {
    console.log(error);
  }
}
// callQuotesAPI();

export default callQuotesAPI;