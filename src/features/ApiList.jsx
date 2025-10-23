import React, { useEffect, useState } from 'react'
import Button from '../components/Button'

const PAGE_SIZE = 10
const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export default function ApiList() {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [total, setTotal] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    const controller = new AbortController()
    const _fetch = async () => {
      try {
        const res = await fetch(`${API_URL}?_page=${page}&_limit=${PAGE_SIZE}`, { signal: controller.signal })
        if (!res.ok) throw new Error(`Status ${res.status}`)
        const data = await res.json()
        setItems(data)
        // jsonplaceholder doesn't send total; simulate
        setTotal(100)
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    _fetch()
    return () => controller.abort()
  }, [page])

  const filtered = items.filter((i) => i.title.includes(query) || i.body.includes(query))

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search in results..."
          className="flex-1 px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
        />
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => setPage(1)}>Reset</Button>
        </div>
      </div>

      {loading && <div className="text-sm">Loading...</div>}
      {error && <div className="text-sm text-red-500">Error: {error}</div>}

      {!loading && !error && (
        <>
          <div className="grid gap-3">
            {filtered.map((p) => (
              <div key={p.id} className="p-3 border rounded-md bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700">
                <div className="font-semibold">{p.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{p.body.slice(0, 140)}...</div>
              </div>
            ))}
            {filtered.length === 0 && <div className="text-sm text-gray-500">No results for that query on this page.</div>}
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">Page {page}</div>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
                Prev
              </Button>
              <Button variant="primary" onClick={() => setPage((p) => p + 1)} disabled={total && page * PAGE_SIZE >= total}>
                Next
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
