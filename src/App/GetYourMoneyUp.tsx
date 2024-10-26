import React from 'react'
import "./styles.css"




const GetYourMoneyUp: React.FC = () => {

    // text content
    const header1 = 'Welcome to Get Your Money Up!'
    const description = 'Get Your Money Up is a platform where individuals upload bank statements to track spending patterns, highlights high-expense categories, estimates disposable income, and offers recommended and customizable savings and investment strategies. It also provides insights on project spending and recommends financial literacy resources based on spending patterns.'
    const header2 = 'Upload Your Bank Statement (PDF only) – Minimum 2 Years of Statements Required'



    return (
        <>
            <div className="mainApp">
                {/* header content */}
                <div className="content">
                    <h1 className='text-center font-bold'>{header1}</h1>
                    <p className='text-center font-medium'>{description}</p>
                </div>

                {/* upload file section */}
                <div className="uploadFileSection">
                    <h2 className='text-center font-bold'>{header2}</h2>

                    {/* upload file button or component */}
                </div>
            </div>
        </>
    )
}

export default GetYourMoneyUp