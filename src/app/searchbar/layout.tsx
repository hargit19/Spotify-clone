export default function HomeLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main>
        <body>{children}</body>
        </main>
    )
  }
  