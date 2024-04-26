import BlogSection2 from "@/component/blog/BlogSection2";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
  title: "Eduor Blog Page",
  description: "Developed by Azizur Rahman",
};
export default function Blog() {
  return (
    <Layout>
      <BreadcrumbSection header="Blog" title="Blog" />
      {/* <AllBlogSection/> */}
      <BlogSection2 />
    </Layout>
  );
}
