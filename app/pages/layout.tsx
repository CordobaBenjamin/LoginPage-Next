
export const metadata = {
  title: 'Cordoba Market',
  description: 'Created by Benjamin Cordoba',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <> 
    <head>
      <link rel="icon" href="/favicon.ico"/>
    </head>
    <html lang="en">
      <body>{children}</body>
    </html>
    </>
  )
}
