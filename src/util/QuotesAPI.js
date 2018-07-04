const url = 'https://talaikis.com/api/quotes/random/'

const nameSplit = (str) => {
  let pattern = /^\w*\.?\s?\w\.|\w*/;
  let firstNm = str.match(pattern)[0];
  let lastNm = str.split(firstNm).join("").trim();
  return [firstNm, lastNm];
}

const callQuotesAPI = async () => {
  try {
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      let name = nameSplit(data.author);
      return {
        authorFirstName: name[0],
        authorLastName: name[1],
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