import React from 'react'

const InvestmentQuestionnaire: React.FC = () => {

    // questionnaire for investment
    const investmentDescription = 'Select your preferred investment level: Low, Medium, or High. Adjust using the slider below to match your risk tolerance and goals'


    return (
        <>
        <div className="investmentComponent">
            {/* header */}
            <h1>{investmentDescription}</h1>

            {/* range component here */}

        </div>
        </>
    )
}

export default InvestmentQuestionnaire