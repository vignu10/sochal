// app/[date]/page.tsx
"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

interface PageProps {
  params: {
    date: string
  }
}

const DatePage = ({ params }: PageProps) => {
  const { date } = params
  const [data, setData] = useState(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/data?date=${date}`)
      const result = await response.json()
      setData(result)
    }

    fetchData()
  }, [date])

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value
    router.push(`/${newDate}`)
  }

  return (
    <div>
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
        className="border p-2"
      />
      <div>
        <h1>Data for {date}</h1>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
      </div>
    </div>
  )
}

export default DatePage
