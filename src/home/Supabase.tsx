import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { parserLogic } from './parserLogic';
import "./styles.css";
import { Loading } from '../Components/Loading';
import { CategoryParsedDataInterface } from '../Interface/CategoryData';
import CategoryChart from '../Components/CategoryChat';

// Supabase client keys and url
const supabaseUrl = "https://zzbgglheuqzbwueaeino.supabase.co/";
const apiKey = import.meta.env.VITE_SUPERBASE;

// Supabase client
const supabaseClient = createClient(supabaseUrl, apiKey);

const SupabaseConnection: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [categoryData, setCategoryData] = useState<CategoryParsedDataInterface | null>(null);
  const [loading, setLoading] = useState(false);

  // Handler for file change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;

    // Only proceed if a file is selected and is a PDF
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
    } else {
      alert("Only PDF files are allowed.");
    }
  };

  // Handle file upload and process the data
  const handleFileUpload = async () => {
    if (file) {
      setLoading(true); // Start loading
      try {
        const data = await parserLogic(file);
        if (data) {
          setCategoryData(data);
        }
      } catch (error) {
        console.error("Error processing file:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    } else {
      alert("Please choose a file before uploading.");
    }
  };

  return (
    <div className='flex flex-col justify-center align-center gap-4'>
      <label htmlFor="myFile" className="file-input-label">
        <input
          type="file"
          id="myFile"
          name="filename"
          accept=".pdf"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <button type="button" onClick={() => document.getElementById('myFile')?.click()}>
          Choose file
        </button>
      </label>

      <div className='text-center font-medium'>
        {file && <p>Selected file: {file.name}</p>}
      </div>

      <button
        onClick={handleFileUpload}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        style={{ display: 'block', margin: '0 auto' }}
      >
        Upload file
      </button>

      {/* Display loading component while loading */}
      {loading && <Loading />}

      {/* Display chart after loading and once data is available */}
      { categoryData && !loading && (
        <div>
          <CategoryChart data={categoryData} />
        </div>
      )}
    </div>
  );
};

export default SupabaseConnection;
