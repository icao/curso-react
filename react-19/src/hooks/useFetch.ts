import { useEffect, useState } from 'react'
import type { Users } from '@/types/User'

export const useFetch = (url: string) => {
  const [data, setData] = useState<Users | null>(null)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((fetchedData) => setData(fetchedData.results))
  }, [url])

  return { data }
}
