import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import { DisposableIncomeData } from '../Interface/savingsProps';

const CategoryLineChart: React.FC<{ data: DisposableIncomeData }> = ({ data }) => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const extendedMonthNames = [...monthNames, ...monthNames]; // Repeat for 24 months

        const lineChartData = {
            labels: extendedMonthNames,
            datasets: [
                {
                    label: 'Projected Savings Over Time',
                    data: data.forcasted_savings_list.slice(0, 24).map(([_month, savings]) => savings),
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
        <div style={{ width: '100%', height: '600%', margin: '0 auto' }}>
            <p className='font-bold text-center text-emerald-950'>Your Average Disposable Income for two 2 years is ${data.average_disposable_income} </p>
            <Chart type="line" data={chartData} options={chartOptions} style={{ height: '100%', width: '100%' }}/>
        </div>
    );
};

export default CategoryLineChart;
