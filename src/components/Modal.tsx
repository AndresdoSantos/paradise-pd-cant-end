import * as Dialog from '@radix-ui/react-dialog'
import { useRef } from 'react'

export function Modal() {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmit() {
    console.log(inputRef.current?.value)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex items-center justify-center p-5 max-w-[200px] bg-[#E50914] rounded">
        <p className="text-white font-semibold">Ask for season 4</p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-zinc-900/70 inset-0 fixed" />

        <Dialog.Content className="fixed top-1/2 left-1/2 p-5 bg-[#141414] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-zinc-800 w-[400px]">
          <Dialog.Title className="text-xl font-semibold text-white">
            Submit your email
          </Dialog.Title>

          <input
            ref={inputRef}
            type="text"
            className="h-12 w-full border border-zinc-800 rounded-md bg-zinc-900 bg-inherit mt-5 outline-none px-2 text-white"
            placeholder="Your best email"
          />

          <button
            onClick={handleSubmit}
            className="flex items-center justify-center h-12 w-full bg-[#E50914] rounded mt-2"
          >
            <p className="text-white">Submit</p>
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
