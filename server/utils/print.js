const fs = require('fs')
const { stringify } = require('querystring')
const axios = require('axios')
const { AUTH_USER, AUTH_PASS } = process.env

axios.defaults.baseURL = 'https://api.epsonconnect.com/api/1/printing'

const getToken = async (printerEmail) => {
  const { data } = await axios.post(
    '/oauth2/auth/token?subject=printer',
    stringify({
      grant_type: 'password',
      username: printerEmail,
      password: ''
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      auth: { username: AUTH_USER, password: AUTH_PASS }
    }
  )
  return {
    accessToken: data.access_token,
    printerId: data.subject_id
  }
}

const createJob = async (printerId) => {
  const { data } = await axios.post(`/printers/${printerId}/jobs`, {
    job_name: 'paper_cast',
    print_mode: 'photo',
    print_setting: {
      media_size: 'ms_a5',
      media_type: 'mt_plainpaper',
      borderless: false,
      print_quality: 'normal',
      source: 'rear',
      color_mode: 'color'
    }
  })

  return {
    jobId: data.id,
    uploadUri: data.upload_uri
  }
}

const sendImageFile = (uploadUri, filePath) => axios.post(
  `${uploadUri}&File=1.jpeg`,
  fs.readFileSync(filePath),
  { headers: { 'Content-Type': 'image/jpeg' } }
)

const printJob = async (printerId, jobId) => (await axios.post(`/printers/${printerId}/jobs/${jobId}/print`, {})).status

module.exports = async (printerEmail, filePath) => {
  const { accessToken, printerId } = await getToken(printerEmail)
  axios.defaults.headers.common = {
    'Authorization': `Bearer ${accessToken}`
  }

  const { jobId, uploadUri } = await createJob(printerId)
  await sendImageFile(uploadUri, filePath)

  const status = await printJob(printerId, jobId)
  return status
}
