import React from 'react'
import useHelloWorld from '../hooks/useHelloWorld'

export default function Dashboard() {

  const { isLoading, error, data } = useHelloWorld()
  console.log("HW", isLoading, error, data)

  return (
    <div>
      This is Dashboard!
      {error ? (<p>{JSON.stringify(error)}</p>) : null}
    </div>
  )
}
