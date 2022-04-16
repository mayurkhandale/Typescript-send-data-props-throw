import axios from 'axios';
import React, { useState, useEffect, Component } from 'react';
import { render } from 'react-dom';
import Demo from './Demo';
const URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [mockData, setMockData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(mockData, '1212');

  const getAxiosData = async () => {
    const apiData = await axios.get(URL).then((res) => setMockData(res.data));
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    console.log(apiData);
  };

  useEffect(() => {
    getAxiosData();
  }, []);
  const [name, setName] = useState('Mayur');
  return (
    <div>
      {loading ? <h1>Loading...</h1> : <Demo name={name} data={mockData} />}
    </div>
  );
};
render(<App />, document.getElementById('root'));
