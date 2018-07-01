const url = 'https://talaikis.com/api/quotes/random/'

const callQuotesAPI = async () => {
  try {
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      return {
        author: data.author,
        quote: data.quote
      }
    }
    throw new Error('Request failed!');
  }
  catch (error) {
    console.log(error);
  }
}

export default callQuotesAPI;