import "@/styles/globals.css";
import MainLayout from "@/layouts/MainLayout";

function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default App;
