export function validateAdnResult(result) {
  if (result) {
    return Promise.resolve(true)
  } else {
    return Promise.reject(false)
  }
}
