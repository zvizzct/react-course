import { TurnedInNot } from '@mui/icons-material'
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {
  const { active } = useSelector((state) => state.journal)
  const dispatch = useDispatch()
  const isActive = active?.id === id

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + '...' : title
  }, [title])

  const OnClickNote = () => {
    dispatch(
      setActiveNote({
        id,
        body,
        title,
        date,
        imageUrls
      })
    )
  }

  return (
    <ListItem key={id} disablePadding>
      <ListItemButton
        onClick={OnClickNote}
        sx={{ backgroundColor: isActive ? 'rgba(0, 0, 0, 0.1)' : '' }}
      >
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
