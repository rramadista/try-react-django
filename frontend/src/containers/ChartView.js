import React from 'react';
import ChartExample from '../components/ReactChart';

const ChartViz = props => (
    <div>
        <h2>Chart</h2>
        <p>This is a simple example of a React Chart JS component.</p>

        <ChartExample legendPosition="bottom" />

    </div>
);

export default ChartViz;