export default function serializeApiUrl(url: string, value: number, key = 'id') {
  return url.replace(`{${key}}`, `${value}`)
}
