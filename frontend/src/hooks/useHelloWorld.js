import React from 'react'
import { request, gql } from 'graphql-request'
import { useQuery } from 'react-query'

const query = gql`
  {
    query MyQuery {
      helloWorld {
        helloMessage
      }
    }    
  }
`
export default function useHelloWorld(){
  return useQuery(
    'helloWorld',
    () => request('http://localhost:8080/v1/graphql', query)
  )
}
