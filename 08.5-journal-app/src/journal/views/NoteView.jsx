import {
  DeleteOutline,
  Note,
  SaveOutlined,
  UploadOutlined
} from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from './../../hooks/useForm'
import { useEffect, useMemo, useRef } from 'react'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import {
  setActiveNote,
  startDeletingNote,
  startSavingNote,
  startUploadingFiles
} from '../../store/journal'

export const NoteView = () => {
  const dispatch = useDispatch()
  const { active, messageSaved, isSaving } = useSelector(
    (state) => state.journal
  )
  const { body, title, date, onInputChange, formState } = useForm(active)
  const dateString = useMemo(() => {
    const newDate = new Date(date)
    return newDate.toUTCString()
  }, [date])

  const fileInputRef = useRef()
  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [body, title])

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire({
        title: 'Note Updated ',
        text: messageSaved,
        icon: 'success'
      })
    }
  }, [messageSaved])
  const onSaveNote = () => {
    dispatch(startSavingNote())
  }
  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return
    console.log('subiendo archivos')
    dispatch(startUploadingFiles(target.files))
  }
  const onDeleteNote = () => {
    dispatch(startDeletingNote())
    Swal.fire({
      title: 'Note deleted',
      text: `${title} successfully deleted`,
      icon: 'success'
    })
  }

  return (
    <Grid
      container
      className="animate__animated animate__fadeIn animate__faster"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <input
          type="file"
          multiple
          onChange={onFileInputChange}
          style={{ display: 'none' }}
          ref={fileInputRef}
        />
        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>
        <Button
          color="primary"
          sx={{ padding: 2 }}
          onClick={onSaveNote}
          disabled={isSaving}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Add a title"
          name="title"
          value={title}
          onChange={onInputChange}
          sx={{ border: 'none', mb: 1 }}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What happened today?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <Grid container justifyContent={'end'}>
        <Button onClick={onDeleteNote}>
          <DeleteOutline />
          Delete
        </Button>
      </Grid>
      <ImageGallery images={active?.imageUrls} />
    </Grid>
  )
}
