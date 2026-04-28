import "./globals.css";

export const metadata = {
  title: "Northline Studio",
  description: "A digital studio for clear identities, websites, and launch systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
