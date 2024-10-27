import React from 'react';
import { Range } from 'react-range';

const InvestmentQuestionnaire: React.FC = () => {
    const [investmentLevel, setInvestmentLevel] = React.useState("Low");

    const handleSliderChange = (values: number[]) => {
        const value = values[0];
        if (value < 4) {
            setInvestmentLevel("Low");
        } else if (value >= 4 && value <= 7) {
            setInvestmentLevel("Medium");
        } else {
            setInvestmentLevel("High");
        }
    };

    const investmentDescription = 'Select your preferred investment level: Low, Medium, or High. Adjust using the slider below to match your risk tolerance and goals';

    return (
        <>
            <div className="investmentComponent">
                {/* header */}
                <h1>{investmentDescription}</h1>
                <p>{investmentLevel}</p>

                {/* range component here */}
                <Range
                    step={0.1}
                    min={0}
                    max={10}
                    values={[investmentLevel === "Low" ? 2 : investmentLevel === "Medium" ? 5 : 8]}
                    onChange={handleSliderChange}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: "0.3rem",
                                width: "30rem",
                                background: `linear-gradient(to right, #007AFF ${(investmentLevel === "Low" ? 20 : investmentLevel === "Medium" ? 50 : 80)}%, #aaaaaa ${(investmentLevel === "Low" ? 20 : investmentLevel === "Medium" ? 50 : 80)}%)`,
                                borderRadius: "0.5rem",
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: "42px",
                                width: "42px",
                                backgroundColor: "#007AFF",
                                borderRadius: "50%",
                            }}
                        />
                    )}
                />
                <div className="range-labels font-bold" style={{ display: "flex", justifyContent: "space-between", width: "30rem", marginTop: "0.5rem" }}>
                    <span>Low {"less than 4"}</span>
                    <span>Medium{"between 4 and 7"}</span>
                    <span>High{"more than 7"}</span>
                </div>

                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Apply changes</button>
            </div>
        </>
    );
};

export default InvestmentQuestionnaire;
