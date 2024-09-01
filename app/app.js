// _app.js หรือ _app.tsx
import '../styles/globals.css'; // เชื่อมโยงไปยังไฟล์ CSS ของคุณ

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
