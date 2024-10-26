import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import parserLogic from './parserLogic';

// supabase client keys and url
const supabaseUrl = "https://zzbgglheuqzbwueaeino.supabase.co/";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6YmdnbGhldXF6Ynd1ZWFlaW5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5NTMxNDYsImV4cCI6MjA0NTUyOTE0Nn0.hrWh4QXGfrol8LFHd5_AjryOZL8t4kEsDM25ITXH2xo";

// supabase client
const supabaseClient = createClient(supabaseUrl, apiKey);

const SupabaseConnection: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  // Handler for file change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;

    // Only proceed if a file is selected and is a PDF
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      parserLogic(selectedFile);
    } else {
      alert("Only PDF files are allowed.");
    }
  };

  return (
    <div>
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
          Upload
        </button>
      </label>
      <div>
        {file && <p>Selected file: {file.name}</p>}
      </div>
    </div>
  );
};

export default SupabaseConnection;
