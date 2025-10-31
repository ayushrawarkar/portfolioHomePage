import './globals.css'

export const metadata = {
  title: 'Portfolio Templates - Create Your Professional Portfolio',
  description: 'Get noticed with stunning portfolio templates designed to showcase your work and impress clients.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}