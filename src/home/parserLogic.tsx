import pdfToText from "react-pdftotext";
import OpenAI from "openai";
import { v4 as uuidv4 } from 'uuid';
import { FetchData } from "./fetchdata";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAIAPI_KEY,
  dangerouslyAllowBrowser: true,
});

export const parserLogic = (pdfFile: File) => {
  const testmode = true;
  let ssuid = uuidv4();
  const testResponse = `{
  "statements": [
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-01",
      "time": "00:00:00",
      "name": "John Doe",
      "category": "Income",
      "amount": "1904.08",
      "currency": "USD",
      "description": "",
      "money_out": "0.0",
      "money_in": "1904.08"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-01",
      "time": "00:00:00",
      "name": "John Doe",
      "category": "Rent",
      "amount": "408.01",
      "currency": "USD",
      "description": "",
      "money_out": "408.01",
      "money_in": "0.0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-02",
      "time": "00:00:00",
      "name": "John Doe",
      "category": "Utilities",
      "amount": "273.96",
      "currency": "USD",
      "description": "",
      "money_out": "273.96",
      "money_in": "0.0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-23",
      "time": "00:00:00",
      "name": "John Doe",
      "category": "Dining",
      "amount": "138.51",
      "currency": "USD",
      "description": "Restaurant meal",
      "money_out": "138.51",
      "money_in": "0.0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-03",
      "time": "00:00:00",
      "name": "John Doe",
      "category": "Entertainment",
      "amount": "152.3",
      "currency": "USD",
      "description": "Concert tickets",
      "money_out": "152.3",
      "money_in": "0.0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-12",
      "time": "00:00:00",
      "name": "John Doe",
      "category": "Entertainment",
      "amount": "104.23",
      "currency": "USD",
      "description": "Streaming subscription",
      "money_out": "104.23",
      "money_in": "0.0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-26",
      "time": "00:00:00",
      "name": "John Doe",
      "category": "Dining",
      "amount": "179.81",
      "currency": "USD",
      "description": "Cafe purchase",
      "money_out": "179.81",
      "money_in": "0.0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-04",
      "time": "00:00:00",
      "name": "John Doe",
      "category": "Groceries",
      "amount": "86.39",
      "currency": "USD",
      "description": "Weekly groceries",
      "money_out": "86.39",
      "money_in": "0.0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-03",
      "time": "00:00:00",
      "name": "John Doe",
      "category": "Shopping",
      "amount": "120.57",
      "currency": "USD",
      "description": "Clothing store",
      "money_out": "120.57",
      "money_in": "0.0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-13",
      "time": "00:00:00",
      "name": "John Doe",
      "category": "Dining",
      "amount": "77.48",
      "currency": "USD",
      "description": "Restaurant meal",
      "money_out": "77.48",
      "money_in": "0.0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-12",
      "time": "00:00:00",
      "name": "John Doe",
      "category": "Shopping",
      "amount": "66.88",
      "currency": "USD",
      "description": "Clothing store",
      "money_out": "66.88",
      "money_in": "0.0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-15",
      "time": "00:00:00",
      "name": "John Doe",
      "category": "Dining",
      "amount": "52.78",
      "currency": "USD",
      "description": "Takeaway order",
      "money_out": "52.78",
      "money_in": "0.0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-28",
      "time": "00:00:00",
      "name": "John Doe",
      "category": "Shopping",
      "amount": "70.06",
      "currency": "USD",
      "description": "Online purchase",
      "money_out": "70.06",
      "money_in": "0.0"
    }
  ]
}`;
  let customPrompt: string = `
*WHAT EVER YOU DO PLEASE FOR THE LOVE OF GOD ONLY REPLY IN JSON AS THIS DATA WILL BE PARSED	*
I have Provided a json schema and my values that I would like you to use to populate the schema and produce the statements. Please find them under the appropiate headings.
Now for all bank_statement_uid please assign this ${ssuid}. 
SCHEMA:
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "statements": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "bank_statement_uid": {
            "type": "string"
          },
          "date": {
            "type": "string",
            "format": "date"  // Expecting date in YYYY-MM-DD format
          },
          "time": {
            "type": "string",
            "format": "time"  // Expecting time in HH:MM:SS format
          },
          "name": {
            "type": "string"
          },
          "category": {
            "type": "string"
          },
          "amount": {
            "type": "string"  // Can also be a number if desired
          },
          "currency": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "money_out": {
            "type": "string"  // Can also be a number if desired
          },
          "money_in": {
            "type": "string"  // Can also be a number if desired
          }
        },
        "required": [
          "bank_statement_uid",
          "date",
          "time",
          "name",
          "category",
          "amount",
          "currency",
          "description",
          "money_out",
          "money_in"
        ]
      }
    }
  },
  "required": ["statements"]
}
  VALUES:
`;
  if (testmode) {
    console.log(testResponse);
  } else {
    processPdfAndSendToGPT3(pdfFile, customPrompt);
  }

  return <div></div>;
};

export const processPdfAndSendToGPT3 = async (pdfFile: File, customPrompt: string): Promise<string> => {
  try {
    if (!pdfFile) {
      throw new Error("No file selected");
    }
    let extractedText = await pdfToText(pdfFile);
    console.log(extractedText);

    const prompt = customPrompt + extractedText;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 150,
    });

    const gptResponse = response.choices[0]?.message?.content?.trim() || "";
    console.log(gptResponse);
    return gptResponse;

  } catch (error) {
    console.error("Error processing PDF or GPT-3 request:", error);
    throw error;
  }


};

export const createEntity = async () => {
  const apiUrl = "https://get-your-money-up-backend.onrender.com/";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include', // Include cookies if needed
    //body: JSON.stringify(),
  };

  const response = await FetchData(apiUrl, options);

  if (!response.ok) {
    // Handle errors by throwing the error data
    const errorData = await response.json();
    console.error("Error creating board: ", errorData);
    throw { status: response.status, ...errorData };
  }

  return response.json();
}
