import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import { CategoryParsedDataInterface } from '../Interface/CategoryData';
import Questionnaire from './Questionnaire';

interface ChartData {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
      hoverBackgroundColor: string[];
      label: string;
    }[];
  }


const CategoryChart: React.FC<{ data: CategoryParsedDataInterface }> = ({ data }) => {
    const [chartData, setChartData] = useState<ChartData | null>(null);
    const [chartOptions, setChartOptions] = useState({});
    const [topCategories, setTopCategories] = useState<{ category: string, amount: number }[]>([]);

    useEffect(() => {
        if (data && data.categories) {
            // Filter out "Income" category, sort by total_amount, and get top 3 spending categories
            const sortedCategories = data.categories
                .filter(category => category.category.toLowerCase() !== 'income')
                .sort((a, b) => b.total_amount - a.total_amount)
                .slice(0, 3)
                .map(category => ({ category: category.category, amount: category.total_amount }));

            setTopCategories(sortedCategories);

            // Prepare chart data
            const newChartData = {
                labels: data.categories
                    .filter(category => category.category.toLowerCase() !== 'income')
                    .map((category) => category.category),
                datasets: [
                    {
                        data: data.categories
                            .filter(category => category.category.toLowerCase() !== 'income')
                            .map((category) => category.total_amount),
                        backgroundColor: [
                            '#FF6384', // Red
                            '#36A2EB', // Blue
                            '#FFCE56', // Yellow
                            '#4BC0C0', // Teal
                            '#9966FF', // Purple
                            '#FF9F40', // Orange
                            '#66FF66', // Green
                        ],
                        hoverBackgroundColor: [
                            '#FF6384AA',
                            '#36A2EBAA',
                            '#FFCE56AA',
                            '#4BC0C0AA',
                            '#9966FFAA',
                            '#FF9F40AA',
                            '#66FF66AA',
                        ],
                        label: 'Expenditure by Category',
                    },
                ],
            };

            // Chart options
            const newChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#333333',
                            font: {
                                size: 18,
                            },
                        },
                    },
                },
                scales: {
                    r: {
                        grid: {
                            color: '#e0e0e0',
                        },
                    },
                },
            };

            setChartData(newChartData);
            setChartOptions(newChartOptions);
        }
    }, [data]);

    return (
        <>
            <div className="card flex justify-content-center" style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
                {topCategories.length > 0 && (
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '20px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '16px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        backgroundColor: '#f9f9f9',
                    }}>
                        <h2 style={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: '#333',
                            marginBottom: '12px'
                        }}>
                            💰 Top 3 Spending Categories
                        </h2>
                        <ul style={{
                            listStyleType: 'none',
                            padding: 0,
                            fontSize: '16px',
                            color: '#555'
                        }}>
                            {topCategories.map((category, index) => (
                                <li key={index} style={{
                                    margin: '8px 0',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <span style={{
                                        fontWeight: 'bold',
                                        color: '#FF6384'
                                    }}>
                                        {index + 1}. {category.category}
                                    </span>
                                    <span style={{
                                        color: '#333',
                                        backgroundColor: '#e0f7fa',
                                        padding: '4px 8px',
                                        borderRadius: '5px'
                                    }}>
                                        ${category.amount.toFixed(2)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            {chartData && chartOptions && (
                <div style={{ width: '100%', maxWidth: '500px', height: '500px', margin: '0 auto' }}>
                    <Chart type="polarArea" data={chartData} options={chartOptions} />
                </div>
            )}
            <Questionnaire />
        </>
    );
};

export default CategoryChart;
