import useSWR from 'swr'

import './App.css'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function App() {
  const { data, error, isLoading } = useSWR('https://cat-fact.herokuapp.com/facts', fetcher)

  console.log({ data, error, isLoading })

  if (isLoading) return <p>Loading...</p>

  return (
    <>
     {data?.map(fact => (
      <div style={{ borderRadius: "8px", border: "1px solid white", margin: "32px 0", padding: "8px" }}>
        <p><b>{fact.text}</b></p>
        <p><small>{new Date(fact.updatedAt).toString()}</small></p>
      </div>
     ))}
    </>
  )
}

export default App
