import "./globals.css";

export const metadata = {
  title: "Color Picker",
  description: "Color Picker App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
