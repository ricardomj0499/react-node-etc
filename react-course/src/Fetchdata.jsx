
import {useState, useEffect} from 'react';

export function Api() {
  const [act, setAct] = useState(null);
    // https://www.boredapi.com/api/activity
    console.log("API func");
    useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then((con) => console.log(con))
    //.then((data) => setAct(data.activity))
    .finally(() => {
      console.log("jeje");
    });
    //.then((data) => data.toString());
  }, []);
    return (
      <div className="Api">
        {act && (
        <h1>{act}</h1>
      )}
        
      </div>
    );
}


export function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=2`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      });
  }, []);

  return (
    <div className="App">
      <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, title }) => (
            <li key={id}>
              <h3>{title}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}

