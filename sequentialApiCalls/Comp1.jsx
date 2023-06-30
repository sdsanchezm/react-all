import React, { useEffect } from 'react';

function Comp1() {

  useEffect(() => {
    apiCalls();
  }, []);

  async function apiCalls() {
    try {
      const firstResponse = await fetchFirstAPI();
      const firstData = await firstResponse.json();
      console.log('Response First: ', firstData);

      const secondResponse = await fetchSecondAPI(firstData.someKey);
      const secondData = await secondResponse.json();
      console.log('Response Second: ', secondData);

      const thirdResponse = await fetchThirdAPI(secondData.someKey);
      const thirdData = await thirdResponse.json();
      console.log('Response Third: ', thirdData);

      const fourthResponse = await fetchFourthAPI(thirdData.someKey);
      const fourthData = await fourthResponse.json();
      console.log('Response Fourth: ', fourthData);

      // Continue with further processing or state updates
    } catch (error) {
      console.error('Error occurred during API calls:', error);
    }
  }

  async function fetchFirstAPI(id) {
    return fetch(`https://api.example.com/api/${id}`);
  }

  async function fetchSecondAPI(id) {
    return fetch(`https://api.example.com/second?param=${id}`);
  }

  async function fetchThirdAPI(id) {
    return fetch(`https://api.example.com/third?param=${id}`);
  }

  async function fetchFourthAPI(id) {
    return fetch(`https://api.example.com/fourth?param=${id}`);
  }
  

  return (
    <div>
        <h1>Hello</h1>
    </div>
  );
}

export default Comp1;
