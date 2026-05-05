import './globals.css';

export const metadata = {
  title: 'Carly Reports',
  description: 'Marketing reports — internal use only',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#f8f9fa' }}>
        {children}
      </body>
    </html>
  );
}
