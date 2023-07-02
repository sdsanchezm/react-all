import { useState, useEffect } from "react";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data1 = [
    {
        name: 'Page A',
        priceUsd: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        priceUsd: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        priceUsd: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        priceUsd: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        priceUsd: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        priceUsd: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        priceUsd: 3490,
        pv: 4300,
        amt: 2100,
    },
];

function Rechart1({data}) {

    return (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data? data : data1 }
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* <Bar dataKey="name" fill="#8884d8" /> */}
            <Bar dataKey="priceUsd" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      );
}


export default Rechart1;