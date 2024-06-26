// app/api/data/route.ts
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const date = searchParams.get('date')

  // Fetch data based on the date
  const data = await fetchDataForDate(date)

  return NextResponse.json(data)
}

async function fetchDataForDate(date: string | null) {
  // Simulate fetching data based on the date
  return {
    date,
    info: `Data for ${date}`
  }
}
