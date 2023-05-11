import { TurnedInNot } from '@mui/icons-material'
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'

export const SideBarItem = ({ title = '', body, id, date, imageUrl = [] }) => {
  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + '...' : title
  }, [title])

  const newBody = useMemo(() => {
    return body.length > 30 ? body.substring(0, 30) + '...' : body
  }, [body])
  const dispatch = useDispatch()
  const handleActiveNote = () => {
    dispatch(setActiveNote({ id, title, body, date, imageUrl }))
  }
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleActiveNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={newBody} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
