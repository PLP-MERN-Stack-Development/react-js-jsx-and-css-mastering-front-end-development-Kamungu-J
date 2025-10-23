import React from 'react'
import TaskManager from '../features/TaskManager'
import Card from '../components/Card'

export default function TasksPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <Card>
        <TaskManager />
      </Card>
    </div>
  )
}
