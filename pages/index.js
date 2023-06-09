import ItemCarousel from "@/components/Carousels/ItemCarousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <Header />
      <ItemCarousel
        items={[
          {
            src: "https://picsum.photos/200/100",
            title: "First slide",
            text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
          },
          {
            src: "https://picsum.photos/200/100",
            title: "Second slide",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ]}
        count={6}
      />
      <Footer />
    </>
  );
}

