import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import { DisposableIncomeData } from '../Interface/savingsProps';

const InvestmentChart: React.FC<{ data: DisposableIncomeData }> = ({ data }) => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const lineChartData = {
            labels: monthNames, // Use month names for the first 12 months
            datasets: [
                {
                    label: 'Projected Savings Over Time',
                    data: data.forcasted_savings_list.slice(0, 12).map(([_month, savings]) => savings),
                    borderColor: 'rgb(75, 192, 192)',
                    fill: false,
                    tension: 0.1,
                },
            ],
        };

        const lineChartOptions = {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#333',
                        font: {
                            size: 14,
                        },
                    },
                },
            },
            scales: {
                x: {
                    grid: {
                        color: '#e0e0e0',
                    },
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#e0e0e0',
                    },
                },
            },
        };

        setChartData(lineChartData);
        setChartOptions(lineChartOptions);
    }, [data]);

    return (
        <div style={{ width: '100%', maxWidth: '900px', height: '600px', margin: '0 auto' }}>
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    );
};

export default InvestmentChart;
