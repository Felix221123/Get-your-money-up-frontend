// common function to fetch the data from a url
export async function FetchData(input:RequestInfo, init:ResponseInit | RequestInit) {
    const options: RequestInit = {
      ...init,
      // credentials: 'include',  // Ensure credentials are included in every request
    };
  
    const response = await fetch(input , options);
  
  
    if (response.ok){
      return response
    } else {
      const errorBody = await response.json();
      const errorMessage = errorBody.error;
      throw Error(errorMessage);
    }
  
  }