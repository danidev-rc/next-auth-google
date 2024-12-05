export { default } from 'next-auth/middleware'

export const config = { matcher: ['/dashboard'] }

// export const config = { matcher: ['/dashboard', 'otra-ruta-proteger'] }
