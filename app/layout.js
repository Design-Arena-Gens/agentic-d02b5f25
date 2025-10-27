export const metadata = {
  title: 'Studio di Registrazione Professionale',
  description: 'Studio di registrazione professionale con attrezzature all\'avanguardia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body style={{ margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
