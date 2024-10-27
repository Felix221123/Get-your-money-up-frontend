import pdfToText from "react-pdftotext";
import OpenAI from "openai";
import { v4 as uuidv4 } from 'uuid';
import { FetchData } from "./fetchdata";
import { StatementDataInterface } from '../Interface/BankStatementProps'
import { CategoryParsedDataInterface } from "../Interface/CategoryData";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAIAPI_KEY,
  dangerouslyAllowBrowser: true,
});

const ssuid = uuidv4();
console.log("ssuid is ", ssuid);
const testResponse = `{
  "statements": [
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Income",
      "amount": "1904.08",
      "currency": "USD",
      "description": "null",
      "money_out": "0",
      "money_in": "1904.08"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Rent",
      "amount": "408.01",
      "currency": "USD",
      "description": "null",
      "money_out": "408.01",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-02",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Utilities",
      "amount": "273.96",
      "currency": "USD",
      "description": "null",
      "money_out": "273.96",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-23",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "138.51",
      "currency": "USD",
      "description": "null",
      "money_out": "138.51",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-03",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "152.3",
      "currency": "USD",
      "description": "null",
      "money_out": "152.3",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-12",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "104.23",
      "currency": "USD",
      "description": "null",
      "money_out": "104.23",
      "money_out": "150.00",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-26",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "179.81",
      "currency": "USD",
      "description": "null",
      "money_out": "179.81",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-04",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "86.39",
      "currency": "USD",
      "description": "null",
      "money_out": "86.39",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-03",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Shopping",
      "amount": "120.57",
      "currency": "USD",
      "description": "null",
      "money_out": "120.57",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-13",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "77.48",
      "currency": "USD",
      "description": "null",
      "money_out": "77.48",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-12",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Shopping",
      "amount": "66.88",
      "currency": "USD",
      "description": "null",
      "money_out": "66.88",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-15",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "52.78",
      "currency": "USD",
      "description": "null",
      "money_out": "52.78",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-01-28",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Shopping",
      "amount": "70.06",
      "currency": "USD",
      "description": "null",
      "money_out": "70.06",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-02-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Income",
      "amount": "1868.27",
      "currency": "USD",
      "description": "null",
      "money_out": "0",
      "money_in": "1868.27"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-02-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Rent",
      "amount": "794.33",
      "currency": "USD",
      "description": "null",
      "money_out": "794.33",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-02-02",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Utilities",
      "amount": "191.28",
      "currency": "USD",
      "description": "null",
      "money_out": "191.28",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-02-11",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Shopping",
      "amount": "97.28",
      "currency": "USD",
      "description": "null",
      "money_out": "97.28",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-02-12",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "59.36",
      "currency": "USD",
      "description": "null",
      "money_out": "59.36",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-02-16",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Shopping",
      "amount": "177",
      "currency": "USD",
      "description": "null",
      "money_out": "177",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-02-13",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "156.41",
      "currency": "USD",
      "description": "null",
      "money_out": "156.41",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-02-04",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "130.36",
      "currency": "USD",
      "description": "null",
      "money_out": "130.36",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-02-26",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Travel",
      "amount": "92.41",
      "currency": "USD",
      "description": "null",
      "money_out": "92.41",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-03-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Income",
      "amount": "2116.35",
      "currency": "USD",
      "description": "null",
      "money_out": "0",
      "money_in": "2116.35"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-03-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Rent",
      "amount": "657.35",
      "currency": "USD",
      "description": "null",
      "money_out": "657.35",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-03-02",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Utilities",
      "amount": "172.29",
      "currency": "USD",
      "description": "null",
      "money_out": "172.29",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-03-24",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "132.26",
      "currency": "USD",
      "description": "null",
      "money_out": "132.26",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-03-09",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Travel",
      "amount": "121.85",
      "currency": "USD",
      "description": "null",
      "money_out": "121.85",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-03-14",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "190.72",
      "currency": "USD",
      "description": "null",
      "money_out": "190.72",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-03-08",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "184.43",
      "currency": "USD",
      "description": "null",
      "money_out": "184.43",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-03-10",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Shopping",
      "amount": "52.72",
      "currency": "USD",
      "description": "null",
      "money_out": "52.72",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-03-27",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "106.5",
      "currency": "USD",
      "description": "null",
      "money_out": "106.5",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-03-07",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "80.77",
      "currency": "USD",
      "description": "null",
      "money_out": "80.77",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-03-25",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "65.19",
      "currency": "USD",
      "description": "null",
      "money_out": "65.19",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-03-06",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "101.21",
      "currency": "USD",
      "description": "null",
      "money_out": "101.21",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-03-23",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Travel",
      "amount": "58.66",
      "currency": "USD",
      "description": "null",
      "money_out": "58.66",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-04-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Income",
      "amount": "2247.22",
      "currency": "USD",
      "description": "null",
      "money_out": "0",
      "money_in": "2247.22"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-04-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Rent",
      "amount": "722.25",
      "currency": "USD",
      "description": "null",
      "money_out": "722.25",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-04-02",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Utilities",
      "amount": "107.06",
      "currency": "USD",
      "description": "null",
      "money_out": "107.06",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-04-28",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "133.7",
      "currency": "USD",
      "description": "null",
      "money_out": "133.7",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-04-24",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "66.77",
      "currency": "USD",
      "description": "null",
      "money_out": "66.77",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-04-26",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "173.29",
      "currency": "USD",
      "description": "null",
      "money_out": "173.29",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-04-25",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "66.9",
      "currency": "USD",
      "description": "null",
      "money_out": "66.9",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-04-05",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Travel",
      "amount": "160.28",
      "currency": "USD",
      "description": "null",
      "money_out": "160.28",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-04-13",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "179.61",
      "currency": "USD",
      "description": "null",
      "money_out": "179.61",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-04-17",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "120.35",
      "currency": "USD",
      "description": "null",
      "money_out": "120.35",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-04-28",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "194.54",
      "currency": "USD",
      "description": "null",
      "money_out": "194.54",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-04-04",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "118.18",
      "currency": "USD",
      "description": "null",
      "money_out": "118.18",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-05-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Income",
      "amount": "1626.46",
      "currency": "USD",
      "description": "null",
      "money_out": "0",
      "money_in": "1626.46"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-05-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Rent",
      "amount": "582.81",
      "currency": "USD",
      "description": "null",
      "money_out": "582.81",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-05-02",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Utilities",
      "amount": "208.39",
      "currency": "USD",
      "description": "null",
      "money_out": "208.39",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-05-26",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "114.66",
      "currency": "USD",
      "description": "null",
      "money_out": "114.66",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-05-04",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "123.12",
      "currency": "USD",
      "description": "null",
      "money_out": "123.12",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-05-12",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "125.07",
      "currency": "USD",
      "description": "null",
      "money_out": "125.07",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-05-20",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "68.37",
      "currency": "USD",
      "description": "null",
      "money_out": "68.37",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-05-12",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "73.11",
      "currency": "USD",
      "description": "null",
      "money_out": "73.11",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-05-05",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "183.07",
      "currency": "USD",
      "description": "null",
      "money_out": "183.07",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-06-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Income",
      "amount": "1929.39",
      "currency": "USD",
      "description": "null",
      "money_out": "0",
      "money_in": "1929.39"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-06-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Rent",
      "amount": "692.01",
      "currency": "USD",
      "description": "null",
      "money_out": "692.01",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-06-02",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Utilities",
      "amount": "194.48",
      "currency": "USD",
      "description": "null",
      "money_out": "194.48",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-06-16",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "53.39",
      "currency": "USD",
      "description": "null",
      "money_out": "53.39",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-06-10",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "120.96",
      "currency": "USD",
      "description": "null",
      "money_out": "120.96",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-06-10",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "105.52",
      "currency": "USD",
      "description": "null",
      "money_out": "105.52",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-06-13",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "160.8",
      "currency": "USD",
      "description": "null",
      "money_out": "160.8",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-06-07",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Travel",
      "amount": "82.8",
      "currency": "USD",
      "description": "null",
      "money_out": "82.8",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-06-20",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Shopping",
      "amount": "122.42",
      "currency": "USD",
      "description": "null",
      "money_out": "122.42",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-06-03",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "54.3",
      "currency": "USD",
      "description": "null",
      "money_out": "54.3",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-06-04",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "167.31",
      "currency": "USD",
      "description": "null",
      "money_out": "167.31",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-07-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Income",
      "amount": "1387.66",
      "currency": "USD",
      "description": "null",
      "money_out": "0",
      "money_in": "1387.66"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-07-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Rent",
      "amount": "478.82",
      "currency": "USD",
      "description": "null",
      "money_out": "478.82",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-07-02",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Utilities",
      "amount": "180.88",
      "currency": "USD",
      "description": "null",
      "money_out": "180.88",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-07-17",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "101.02",
      "currency": "USD",
      "description": "null",
      "money_out": "101.02",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-07-10",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Travel",
      "amount": "134.22",
      "currency": "USD",
      "description": "null",
      "money_out": "134.22",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-07-24",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Travel",
      "amount": "119.07",
      "currency": "USD",
      "description": "null",
      "money_out": "119.07",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-07-05",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "194.14",
      "currency": "USD",
      "description": "null",
      "money_out": "194.14",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-07-24",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "53.36",
      "currency": "USD",
      "description": "null",
      "money_out": "53.36",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-08-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Income",
      "amount": "1824.39",
      "currency": "USD",
      "description": "null",
      "money_out": "0",
      "money_in": "1824.39"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-08-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Rent",
      "amount": "370.37",
      "currency": "USD",
      "description": "null",
      "money_out": "370.37",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-08-02",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Utilities",
      "amount": "138.98",
      "currency": "USD",
      "description": "null",
      "money_out": "138.98",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-08-06",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "143.94",
      "currency": "USD",
      "description": "null",
      "money_out": "143.94",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-08-10",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "125.4",
      "currency": "USD",
      "description": "null",
      "money_out": "125.4",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-08-07",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Shopping",
      "amount": "177.63",
      "currency": "USD",
      "description": "null",
      "money_out": "177.63",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-08-15",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "51.62",
      "currency": "USD",
      "description": "null",
      "money_out": "51.62",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-08-08",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Travel",
      "amount": "127.17",
      "currency": "USD",
      "description": "null",
      "money_out": "127.17",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-08-12",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "189.83",
      "currency": "USD",
      "description": "null",
      "money_out": "189.83",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-08-12",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "129.67",
      "currency": "USD",
      "description": "null",
      "money_out": "129.67",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-08-23",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Travel",
      "amount": "146.87",
      "currency": "USD",
      "description": "null",
      "money_out": "146.87",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-08-18",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Travel",
      "amount": "57.06",
      "currency": "USD",
      "description": "null",
      "money_out": "57.06",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-09-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Income",
      "amount": "1812.11",
      "currency": "USD",
      "description": "null",
      "money_out": "0",
      "money_in": "1812.11"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-09-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Rent",
      "amount": "639.89",
      "currency": "USD",
      "description": "null",
      "money_out": "639.89",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-09-02",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Utilities",
      "amount": "225.86",
      "currency": "USD",
      "description": "null",
      "money_out": "225.86",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-09-04",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Shopping",
      "amount": "69.18",
      "currency": "USD",
      "description": "null",
      "money_out": "69.18",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-09-06",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "127.69",
      "currency": "USD",
      "description": "null",
      "money_out": "127.69",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-09-03",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "86.27",
      "currency": "USD",
      "description": "null",
      "money_out": "86.27",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-09-03",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Travel",
      "amount": "59.13",
      "currency": "USD",
      "description": "null",
      "money_out": "59.13",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-09-25",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "73.86",
      "currency": "USD",
      "description": "null",
      "money_out": "73.86",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-09-04",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "117.5",
      "currency": "USD",
      "description": "null",
      "money_out": "117.5",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-09-05",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Shopping",
      "amount": "128.84",
      "currency": "USD",
      "description": "null",
      "money_out": "128.84",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-09-12",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Travel",
      "amount": "119.15",
      "currency": "USD",
      "description": "null",
      "money_out": "119.15",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-10-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Income",
      "amount": "1504.29",
      "currency": "USD",
      "description": "null",
      "money_out": "0",
      "money_in": "1504.29"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-10-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Rent",
      "amount": "390.34",
      "currency": "USD",
      "description": "null",
      "money_out": "390.34",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-10-02",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Utilities",
      "amount": "223.67",
      "currency": "USD",
      "description": "null",
      "money_out": "223.67",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-10-16",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Travel",
      "amount": "62.69",
      "currency": "USD",
      "description": "null",
      "money_out": "62.69",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-10-23",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "151.76",
      "currency": "USD",
      "description": "null",
      "money_out": "151.76",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-10-27",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Travel",
      "amount": "83",
      "currency": "USD",
      "description": "null",
      "money_out": "83",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-10-13",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Shopping",
      "amount": "179.93",
      "currency": "USD",
      "description": "null",
      "money_out": "179.93",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-10-20",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Shopping",
      "amount": "84.66",
      "currency": "USD",
      "description": "null",
      "money_out": "84.66",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-10-20",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Shopping",
      "amount": "90.83",
      "currency": "USD",
      "description": "null",
      "money_out": "90.83",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-10-08",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Travel",
      "amount": "100.66",
      "currency": "USD",
      "description": "null",
      "money_out": "100.66",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-11-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Income",
      "amount": "2089.79",
      "currency": "USD",
      "description": "null",
      "money_out": "0",
      "money_in": "2089.79"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-11-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Rent",
      "amount": "757.76",
      "currency": "USD",
      "description": "null",
      "money_out": "757.76",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-11-02",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Utilities",
      "amount": "157.09",
      "currency": "USD",
      "description": "null",
      "money_out": "157.09",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-11-28",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Shopping",
      "amount": "114.64",
      "currency": "USD",
      "description": "null",
      "money_out": "114.64",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-11-24",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "52.26",
      "currency": "USD",
      "description": "null",
      "money_out": "52.26",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-11-08",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Travel",
      "amount": "197.96",
      "currency": "USD",
      "description": "null",
      "money_out": "197.96",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-11-12",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "191.27",
      "currency": "USD",
      "description": "null",
      "money_out": "191.27",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-11-21",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "64.34",
      "currency": "USD",
      "description": "null",
      "money_out": "64.34",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-11-09",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Dining",
      "amount": "195.41",
      "currency": "USD",
      "description": "null",
      "money_out": "195.41",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-11-28",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "169.08",
      "currency": "USD",
      "description": "null",
      "money_out": "169.08",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-12-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Income",
      "amount": "2027.96",
      "currency": "USD",
      "description": "null",
      "money_out": "0",
      "money_in": "2027.96"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-12-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Rent",
      "amount": "600.22",
      "currency": "USD",
      "description": "null",
      "money_out": "600.22",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-12-02",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Utilities",
      "amount": "161.85",
      "currency": "USD",
      "description": "null",
      "money_out": "161.85",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-12-18",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Travel",
      "amount": "158.69",
      "currency": "USD",
      "description": "null",
      "money_out": "158.69",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-12-15",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Travel",
      "amount": "102.4",
      "currency": "USD",
      "description": "null",
      "money_out": "102.4",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-12-13",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Shopping",
      "amount": "177.48",
      "currency": "USD",
      "description": "null",
      "money_out": "177.48",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-12-18",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Shopping",
      "amount": "96.56",
      "currency": "USD",
      "description": "null",
      "money_out": "96.56",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-12-04",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "111.22",
      "currency": "USD",
      "description": "null",
      "money_out": "111.22",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-12-14",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Shopping",
      "amount": "81.54",
      "currency": "USD",
      "description": "null",
      "money_out": "81.54",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-12-14",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "82.84",
      "currency": "USD",
      "description": "null",
      "money_out": "82.84",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-12-12",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "70.27",
      "currency": "USD",
      "description": "null",
      "money_out": "70.27",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-12-09",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "88.67",
      "currency": "USD",
      "description": "null",
      "money_out": "88.67",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-12-10",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Shopping",
      "amount": "111.86",
      "currency": "USD",
      "description": "null",
      "money_out": "111.86",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2011-01-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Income",
      "amount": "1859.35",
      "currency": "USD",
      "description": "null",
      "money_out": "0",
      "money_in": "1859.35"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-06-04",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Travel",
      "amount": "127.27",
      "currency": "USD",
      "description": "null",
      "money_out": "127.27",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-06-03",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "105.77",
      "currency": "USD",
      "description": "null",
      "money_out": "105.77",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-06-20",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "127.27",
      "currency": "USD",
      "description": "null",
      "money_out": "127.27",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-06-11",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "105.77",
      "currency": "USD",
      "description": "null",
      "money_out": "105.77",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-06-22",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "127.27",
      "currency": "USD",
      "description": "null",
      "money_out": "127.27",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-06-14",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Groceries",
      "amount": "127.27",
      "currency": "USD",
      "description": "null",
      "money_out": "127.27",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-07-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Income",
      "amount": "1859.35",
      "currency": "USD",
      "description": "null",
      "money_out": "0",
      "money_in": "1859.35"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-07-01",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Rent",
      "amount": "54.3",
      "currency": "USD",
      "description": "null",
      "money_out": "54.3",
      "money_in": "0"
    },
    {
      "bank_statement_uid": "${ssuid}",
      "date": "2010-12-14",
      "time": "00:00:00",
      "name": "JohnDoe",
      "category": "Entertainment",
      "amount": "82.84",
      "currency": "USD",
      "description": "null",
      "money_out": "82.84",
      "money_in": "0"
    }
  ]
}`;






export const processPdfAndSendToGPT3 = async (pdfFile: File, customPrompt: string): Promise<string> => {
  try {
    if (!pdfFile) {
      throw new Error("No file selected");
    }
    let extractedText = await pdfToText(pdfFile);
    // console.log(extractedText);

    const prompt = customPrompt + extractedText;
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 4096,
    });

    const gptResponse = response.choices[0]?.message?.content?.trim() || "";
    console.log("gpt response is", gptResponse);
    console.log("normal response is", response);
    return testResponse;

  } catch (error) {
    console.error("Error processing PDF or GPT-3 request:", error);
    throw error;
  }


};



export const formatBankStatementData = (rawData: StatementDataInterface): StatementDataInterface => {
  return {
    statements: rawData.statements.map((statement) => ({
      ...statement,
      amount: statement.amount, // Convert to number if needed for calculations
      money_out: statement.money_out,
      money_in: statement.money_in,
      date: new Date(statement.date).toISOString().split('T')[0], // Ensure ISO format for date
      time: statement.time || "00:00:00", // Default if time is missing
    })),
  };
};


export const createEntity = async (bankStatementData: StatementDataInterface) => {
  console.log("here is your bank statement ", bankStatementData);
  const apiUrl = "https://get-your-money-up-backend.onrender.com/";
  const options = {
    method: "POST",
    // mode:"no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    // credentials: 'include', // Include cookies if needed
    body: JSON.stringify(bankStatementData),
  };

  const response = await FetchData(apiUrl, options);

  if (!response.ok) {
    // Handle errors by throwing the error data
    const errorData = await response.json();
    throw { status: response.status, ...errorData };
  }

  return response.json();
}

export const categoriseStatement = async (bank_statement_id: string): Promise<CategoryParsedDataInterface | void> => {
  const apiUrl = `https://get-your-money-up-backend.onrender.com/summarize/${bank_statement_id}`;
  const options = {
    method: "GET",
  };

  const response = await FetchData(apiUrl, options);
  console.log("response for category ", response);

  if (!response.ok) {
    const errorData = await response.json();
    throw { status: response.status, ...errorData };
  }

  const data = await response.json();
  console.log("Parsed response data for category:", data);

  return data;
}


export const savingStrategy = async (bank_statement_id: string): Promise<any> => {
  const apiUrl = `https://get-your-money-up-backend.onrender.com/savings/${bank_statement_id}`;
  const options = {
    method: "GET",
  };

  const response = await FetchData(apiUrl, options);
  console.log("response for category ", response);

  if (!response.ok) {
    const errorData = await response.json();
    throw { status: response.status, ...errorData };
  }

  const data = await response.json();
  console.log("Parsed response data for savings strategy:", data);

  return data;
}


export const portfolioStrategy = async (bank_statement_id: string): Promise<any> => {
  const apiUrl = `https://get-your-money-up-backend.onrender.com/portfolio/${bank_statement_id}`;
  const options = {
    method: "GET",
  };

  const response = await FetchData(apiUrl, options);
  console.log("response for category ", response);

  if (!response.ok) {
    const errorData = await response.json();
    throw { status: response.status, ...errorData };
  }

  const data = await response.json();
  console.log("Parsed response data for savings strategy:", data);

  return data;
}


export const parserLogic = async (pdfFile: File): Promise<{ categoryData: CategoryParsedDataInterface; savingsData:any } | void> => {
  const testmode = true;
  //   let ssuid = uuidv4();
  //   console.log("ssuid is ", ssuid);
  //   const testResponse = `{
  //   "statements": [
  //     {
  //       "bank_statement_uid": "${ssuid}",
  //       "date": "2010-01-01",
  //       "time": "00:00:00",
  //       "name": "John Doe",
  //       "category": "Income",
  //       "amount": "1904.08",
  //       "currency": "USD",
  //       "description": "",
  //       "money_out": "0.0",
  //       "money_in": "1904.08"
  //     },
  //     {
  //       "bank_statement_uid": "${ssuid}",
  //       "date": "2010-01-01",
  //       "time": "00:00:00",
  //       "name": "John Doe",
  //       "category": "Rent",
  //       "amount": "408.01",
  //       "currency": "USD",
  //       "description": "",
  //       "money_out": "408.01",
  //       "money_in": "0.0"
  //     },
  //     {
  //       "bank_statement_uid": "${ssuid}",
  //       "date": "2010-01-02",
  //       "time": "00:00:00",
  //       "name": "John Doe",
  //       "category": "Utilities",
  //       "amount": "273.96",
  //       "currency": "USD",
  //       "description": "",
  //       "money_out": "273.96",
  //       "money_in": "0.0"
  //     },
  //     {
  //       "bank_statement_uid": "${ssuid}",
  //       "date": "2010-01-23",
  //       "time": "00:00:00",
  //       "name": "John Doe",
  //       "category": "Dining",
  //       "amount": "138.51",
  //       "currency": "USD",
  //       "description": "Restaurant meal",
  //       "money_out": "138.51",
  //       "money_in": "0.0"
  //     },
  //     {
  //       "bank_statement_uid": "${ssuid}",
  //       "date": "2010-01-03",
  //       "time": "00:00:00",
  //       "name": "John Doe",
  //       "category": "Entertainment",
  //       "amount": "152.3",
  //       "currency": "USD",
  //       "description": "Concert tickets",
  //       "money_out": "152.3",
  //       "money_in": "0.0"
  //     },
  //     {
  //       "bank_statement_uid": "${ssuid}",
  //       "date": "2010-01-12",
  //       "time": "00:00:00",
  //       "name": "John Doe",
  //       "category": "Entertainment",
  //       "amount": "104.23",
  //       "currency": "USD",
  //       "description": "Streaming subscription",
  //       "money_out": "104.23",
  //       "money_in": "0.0"
  //     },
  //     {
  //       "bank_statement_uid": "${ssuid}",
  //       "date": "2010-01-26",
  //       "time": "00:00:00",
  //       "name": "John Doe",
  //       "category": "Dining",
  //       "amount": "179.81",
  //       "currency": "USD",
  //       "description": "Cafe purchase",
  //       "money_out": "179.81",
  //       "money_in": "0.0"
  //     },
  //     {
  //       "bank_statement_uid": "${ssuid}",
  //       "date": "2010-01-04",
  //       "time": "00:00:00",
  //       "name": "John Doe",
  //       "category": "Groceries",
  //       "amount": "86.39",
  //       "currency": "USD",
  //       "description": "Weekly groceries",
  //       "money_out": "86.39",
  //       "money_in": "0.0"
  //     },
  //     {
  //       "bank_statement_uid": "${ssuid}",
  //       "date": "2010-01-03",
  //       "time": "00:00:00",
  //       "name": "John Doe",
  //       "category": "Shopping",
  //       "amount": "120.57",
  //       "currency": "USD",
  //       "description": "Clothing store",
  //       "money_out": "120.57",
  //       "money_in": "0.0"
  //     },
  //     {
  //       "bank_statement_uid": "${ssuid}",
  //       "date": "2010-01-13",
  //       "time": "00:00:00",
  //       "name": "John Doe",
  //       "category": "Dining",
  //       "amount": "77.48",
  //       "currency": "USD",
  //       "description": "Restaurant meal",
  //       "money_out": "77.48",
  //       "money_in": "0.0"
  //     },
  //     {
  //       "bank_statement_uid": "${ssuid}",
  //       "date": "2010-01-12",
  //       "time": "00:00:00",
  //       "name": "John Doe",
  //       "category": "Shopping",
  //       "amount": "66.88",
  //       "currency": "USD",
  //       "description": "Clothing store",
  //       "money_out": "66.88",
  //       "money_in": "0.0"
  //     },
  //     {
  //       "bank_statement_uid": "${ssuid}",
  //       "date": "2010-01-15",
  //       "time": "00:00:00",
  //       "name": "John Doe",
  //       "category": "Dining",
  //       "amount": "52.78",
  //       "currency": "USD",
  //       "description": "Takeaway order",
  //       "money_out": "52.78",
  //       "money_in": "0.0"
  //     },
  //     {
  //       "bank_statement_uid": "${ssuid}",
  //       "date": "2010-01-28",
  //       "time": "00:00:00",
  //       "name": "John Doe",
  //       "category": "Shopping",
  //       "amount": "70.06",
  //       "currency": "USD",
  //       "description": "Online purchase",
  //       "money_out": "70.06",
  //       "money_in": "0.0"
  //     }
  //   ]
  // }`;

  let customPrompt: string = `
I have attached a pdf file of a bank statement, convert it to a json format. ONLY RETURN THE JSON FORMAT IN YOUR RESPONSE, NOTHING ELSE.  Now for all bank_statement_uid please assign this ${ssuid}.  Once again, only output a json, NOTHING ELSE. This is the format it should output in:

{ "statements": [ { "bank_statement_uid": "a3b75ace-2ed2-4223-89c5-1c5ea81e5287", "date": "2024-10-01", "time": "14:30:00", "name": "John Doe", "category": "Groceries", "amount": "150.75", "currency": "USD", "description": "Weekly grocery shopping", "money_out": "150.75", "money_in": "0.00" }, { "bank_statement_uid": "a3b75ace-2ed2-4223-89c5-1c5ea81e5287", "date": "2024-10-02", "time": "09:15:00", "name": "Jane Smith", "category": "Salary", "amount": "3000.00", "currency": "USD", "description": "Monthly salary payment", "money_out": "0.00", "money_in": "3000.00" }, { "bank_statement_uid": "a3b75ace-2ed2-4223-89c5-1c5ea81e5287", "date": "2024-10-05", "time": "18:45:00", "name": "Emily Johnson", "category": "Utilities", "amount": "200.50", "currency": "USD", "description": "Electricity bill for September", "money_out": "200.50", "money_in": "0.00" } ] }
`;
  if (testmode) {
    const formattedData = formatBankStatementData(JSON.parse(testResponse));
    console.log("formatted data is ", formattedData);

    // Create the entity in the backend
    await createEntity(formattedData);

    const categoryData = await categoriseStatement(ssuid);
    if (!categoryData) {
      throw new Error("Failed to fetch category data.");
    }

    // Fetch savings data
    const savingsData = await savingStrategy(ssuid);
    if (!savingsData) {
      throw new Error("Failed to fetch savings data.");
    }



    // Return both category data and savings data
    return { categoryData, savingsData };
  } else {
    const rawData = await processPdfAndSendToGPT3(pdfFile, customPrompt);
    console.log("raw data is ", rawData);
    const formattedData = formatBankStatementData(JSON.parse(rawData));
    await createEntity(formattedData);

    const categoryData = await categoriseStatement(ssuid);
    if (!categoryData) {
      throw new Error("Failed to fetch category data.");
    }

    const savingsData = await savingStrategy(ssuid);
    if (!savingsData) {
      throw new Error("Failed to fetch savings data.");
    }

    

    return { categoryData, savingsData };
  }
}