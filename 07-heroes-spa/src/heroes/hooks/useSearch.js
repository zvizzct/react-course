// hooks/useSearch.js
import { useState, useEffect } from 'react'
import queryString from 'query-string'
import { useNavigate, useLocation } from 'react-router-dom'
import { getHeroByName } from '../helpers/getHeroByName'
import { useForm } from '../../hooks/useForm'

export const useSearch = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)
  const { searchText, onInputChange } = useForm({ searchText: q })
  const [newHero, setNewHero] = useState([])

  useEffect(() => {
    setNewHero(getHeroByName(q))
  }, [q])

  const onSearchSubmit = (e) => {
    e.preventDefault()
    if (searchText.trim().length < 2) return
    navigate(`?q=${searchText}`)
  }

  return { q, searchText, onInputChange, onSearchSubmit, newHero }
}
