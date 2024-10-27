import React, { useState} from 'react'
import "./styles.css"
import { Range } from 'react-range'



const Questionnaire: React.FC = () => {
    // state for range
    const [savingsValue, setSavingsValue] = useState([20]);
   
    // users disposable income
    const disposable = 1000;
    // Calculate savings and investment amounts based on the slider value
    const savingsAmount = (savingsValue[0] / 100) * disposable;
    const investmentAmount = disposable - savingsAmount;

    console.log("here is the value ",savingsValue[0]);

    // questionnaire for savings and investment
    const incomeSplit = 'How would you like to allocate your disposable income? We recommend 80% for investment and 20% for savings, but feel free to adjust based on your goals.'

    return (
        <>
            <div className="questionnaireComponent">
                <h1 className='text-center font-bold'>{incomeSplit}</h1>
                <p className='text-center font-bold'>Disposable Income : ${disposable}</p>
                {/* range button component */}
                {/* Savings Component */}
                <div className="containers">
                    <h2 className='text-center font-bold'>Savings: {savingsValue[0]}%</h2>
                    <Range
                        label="Select your value"
                        step={1}
                        min={0}
                        max={100}
                        values={savingsValue}
                        onChange={(values) => setSavingsValue(values)}
                        renderTrack={({ props, children }) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: "0.3rem",
                                    width: "30rem",
                                    background: `linear-gradient(to right, #007AFF ${savingsValue[0]}%, #aaaaaa ${savingsValue[0]}%)`,
                                    borderRadius: "0.5rem",
                                }}
                            >
                                {children}
                            </div>
                        )}
                        renderThumb={({ props }) => (
                            <div
                                {...props}
                                key={props.key}
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
                        <span>Low</span>
                        <span>Medium</span>
                        <span>High</span>
                    </div>

                    {/* Investment Component */}
                    <h3 className='text-center font-bold'> Investment: {100 - savingsValue[0]}%</h3>

                    {/* Display Calculated Amounts */}
                    <div className="allocation-summary text-center font-bold" style={{ marginTop: "1rem" }}>
                        <p>Savings Amount: ${savingsAmount.toFixed(2)}</p>
                        <p>Investment Amount: ${investmentAmount.toFixed(2)}</p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Questionnaire