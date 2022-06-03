
const getData= async () =>{
    
      try {
          const response = await fetch('https://firebasestorage.googleapis.com/v0/b/interview-498d3.appspot.com/o/news.json?alt=media&token=63f227b0-7774-4016-b7fe-42507315ac9e', {
            method: 'GET',
            headers: {
              accept: 'application/json',
            },
          });

          if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
          }
        
          const result = await response.json();
          return result;

        }catch (err) {
          console.log(err);
        }
  }

  export default getData;