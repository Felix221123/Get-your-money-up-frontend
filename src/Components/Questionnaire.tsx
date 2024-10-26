import React from 'react'
import "./styles.css"



const Questionnaire: React.FC = () => {

    // questionnaire for savings and investment
    const incomeSplit = 'How would you like to allocate your disposable income? We recommend 80% for investment and 20% for savings, but feel free to adjust based on your goals.'

    return (
        <>
            <div className="questionnaireComponent">
                <h1>{incomeSplit}</h1>
            </div>
        </>
    )
}

export default Questionnaire