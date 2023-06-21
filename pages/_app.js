import Layout from "@/components/Layout";
import LayoutEditor from "@/components/Drawers/LayoutEditor";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <LayoutEditor />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}