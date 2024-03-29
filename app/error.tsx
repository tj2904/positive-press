"use client" // Error components must be Client components

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error,
  reset: () => void,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    throw error
  }, [error])

  return (
    <div className="mx-auto">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl">Something went wrong!</h2>
      <p className="italic text-gray-500 mt-0 mb-4">We were not able to retrive the latest ranked news, please try again.</p>
      <button
        className="rounded-md border border-transparent bg-gray-700 mt-8 py-2 px-4 text-md font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try to load news again...
      </button>
    </div>
  )
}
