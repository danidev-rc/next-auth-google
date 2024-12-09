'use client'

import Link from 'next/link'
import { signIn, useSession, signOut } from 'next-auth/react'
import { ModeToggle } from './theme-toggle-button'

function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="flex items-center justify-between bg-slate-900 px-24 py-3">
      <Link href="/">
        <h1 className="text-white">Google</h1>
      </Link>
      {session?.user ? (
        <div className="flex items-center gap-4">
          <Link href="/dashboard">Dashboard</Link>
          <div>
            <p>{session.user.name}</p>
            <p>{session.user.email}</p>
          </div>
          {session.user.image && (
            <img
              src={session.user.image}
              alt=""
              className="h-10 w-10 cursor-pointer rounded-full"
            />
          )}
          <button
            onClick={async () => {
              await signOut({
                callbackUrl: '/',
              })
            }}
            className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
          >
            Log out
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn()}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Sign in
        </button>
      )}
      <ModeToggle />
    </nav>
  )
}

export default Navbar
