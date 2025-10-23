import React from 'react'
import Card from '../components/Card'
import ApiList from '../features/ApiList'

export default function ApiPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">API Explorer</h1>
      <Card>
        <ApiList />
      </Card>
    </div>
  )
}
