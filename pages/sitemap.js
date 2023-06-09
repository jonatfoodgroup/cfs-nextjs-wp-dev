import Posts from "@/components/Posts";
import Pages from "@/components/Pages";
import Categories from "@/components/Categories";
import Tags from "@/components/Topics";
import Brands from '@/components/Brands';

const Sitemap = () => {
  return (
    <>
      <Posts />
      <Pages />
      <Categories />
      <Tags />
      <Brands />     
    </>
  );
}

export default Sitemap;