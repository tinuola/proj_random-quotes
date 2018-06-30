
//const url = 'https://quotes.rest/qod.json';
//const url = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
const url = 'https://talaikis.com/api/quotes/random/'

const callQuotesAPI = async () => {
  try {
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      // console.log(data);
      return {
        // author: data.contents.quotes[0].author,
        // quote: data.contents.quotes[0].quote
        // author: data[0].title,
        // quote: data[0].content
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
// callQuotesAPI();

export default callQuotesAPI;