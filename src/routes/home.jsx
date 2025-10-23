import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl font-semibold mb-2">Task Manager</h2>
          <p className="mb-4">Create, complete, delete and filter tasks. Saved to localStorage.</p>
          <Link to="/tasks"><Button variant="primary">Open Tasks</Button></Link>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold mb-2">API Explorer</h2>
          <p className="mb-4">Fetch posts from JSONPlaceholder with search and pagination.</p>
          <Link to="/api"><Button variant="primary">Open API</Button></Link>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold mb-2">Notes</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>React + JSX + Tailwind</li>
          <li>Theme switcher using Context</li>
          <li>Custom hook useLocalStorage</li>
        </ul>
      </Card>
    </div>
  )
}
