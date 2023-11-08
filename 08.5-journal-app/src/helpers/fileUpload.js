export const fileUpload = async (file) => {
  if (!file) throw new Error('There is no file tu upload')
  const cloudUrl = 'https://api.cloudinary.com/v1_1/drsq4pc4k/upload'
  const formData = new FormData()
  formData.append('upload_preset', 'react-journal')
  formData.append('file', file)
  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData
    })
    if (!resp.ok) throw new Error('Error when uploading image')
    const cloudResp = await resp.json()
    return cloudResp.secure_url
  } catch (error) {
    throw new Error(error.message)
  }
}
