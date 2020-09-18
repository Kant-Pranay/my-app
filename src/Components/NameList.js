import React, { useEffect } from "react"
import Nav from './Nav'
import axios from "axios"
import { useObserver } from "mobx-react"
import { useStore } from '../Contexts/Context'



function NameList() {
  const Store = useStore()
  useEffect(() => {
    Store.isLoading && axios
      .get(Store.randomurl)
      .then((res) => {
        Store.persons = res.data
        Store.isLoading = false
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })

  useEffect(() => {
    Store.persons = []
    Store.isLoading = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return useObserver(() => (
    <div className="name-list-box">
      {Store.isLoading ?
        <p>Loading....</p> :
        Store.persons.map((person) =>
          <p key={person.first + person.last}>
            {person.first} {person.last}
          </p>
        )
      }
      <Nav prev='/time' next='/currency' />
    </div>
  ))
}

export default NameList
