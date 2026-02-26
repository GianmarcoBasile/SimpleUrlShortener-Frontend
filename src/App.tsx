import { Header } from "./components"
import axios from "axios"
import { useState, type SubmitEvent } from "react"
import { Button, Input } from "./components/ui"
  
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT

export const App = () => {
  const [url, setUrl] = useState('')
  const [shortenedUrl, setShortenedUrl] = useState('')
  const [copied, setCopied] = useState(false)
  const [shortened, setShortened] = useState(false)

  function handleSubmit(e: SubmitEvent<HTMLFormElement>, url: string) {
    e.preventDefault()
    if(!shortened) {
      axios.post(`${BACKEND_URL}:${BACKEND_PORT}/url`, { originalUrl: url })
        .then(response => {
          console.log('Shortened URL:', response.data)
          setShortenedUrl(`${BACKEND_URL}:${BACKEND_PORT}/url/${response.data.shortURL}`)
          setShortened(true)
        })
        .catch(error => {
          console.error('Error shortening URL:', error)
        })
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(shortenedUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <>
      <Header/>
      <div className="flex justify-center items-center pt-40">
        <form onSubmit={(e) => handleSubmit(e, url)} className="flex gap-2 w-1/2">
          <Input type="text" placeholder="Enter URL to shorten" className="border p-2 flex-1" value={url} onChange={(e) => setUrl(e.target.value)}/>
          <Button type="submit" className="bg-blue-500 text-white p-2 cursor-pointer">Shorten</Button>
        </form>
      </div>
      {shortenedUrl && (
        <div className="flex justify-center items-center pt-4">
          <Input type="text" value={shortenedUrl} readOnly className="border p-2 w-auto"/>
          {copied ? (
            <Button className="bg-green-500 text-white p-2 ml-2 cursor-pointer">Copied!</Button>
          ) : (
            <Button onClick={handleCopy} className="bg-green-500 text-white p-2 ml-2 cursor-pointer">Copy</Button>
          )}
        </div>
      )}
    </>
  )
}