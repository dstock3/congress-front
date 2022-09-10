import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [bills, setBills] = useState(false)
  
  useEffect(()=> {
    const fetchBills = (async () => {
      try {
        let res = await fetch(`https://api.congress.gov/v3/bill/`, {
          method: "GET"
        });

        let resJson = await res.json();
        if (res.status === 200) {
          setBills(resJson.bills)

        }
        
      } catch(err) {
  
      }

    })();

  
  }, [])

  return (
    <div className="App">
      {bills ? <div>{bills}</div> : null}
    </div>
  );
}

export default App;
