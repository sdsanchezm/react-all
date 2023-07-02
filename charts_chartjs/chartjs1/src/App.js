import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// used the 5.5.3 version `npm i --save-dev faker@5.5.3`
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


function App() {
  return (
    <div className="container">
      <h1>Chart.js example</h1>
      <Card>
        <Card.Header>
          asd
        </Card.Header>
        <Card.Body>
        
          <Bar options={options} data={data} />;

        </Card.Body>
        <Card.Footer>
          ads
        </Card.Footer>
      </Card>
    </div>
  );
}

export default App;
