import { useEffect, useState } from "react"

export const CatsExample = () => {
  const [cats, setCats] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://cats.petiteweb.dev/api/single/bezzskilla/show')
      if (res.ok) {
        const data = await res.json()

        return setCats(data)
      }

      setError(true)
    }
    fetchData();
  }, [])

  if (error) return <div>Ошибка!</div>

  //Cannot read properties of undefined (reading 'map')
  return (
    <div>
      {cats.map(cat => <div key={cat.id}>{cat.name}</div>)}
    </div>
  )
}
