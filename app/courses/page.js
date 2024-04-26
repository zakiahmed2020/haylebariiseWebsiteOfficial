import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import CourseSection2 from "@/component/course/CourseSection2";
import Layout from "@/component/layout/Layout";
export const metadata = {
  title: "Eduor Courses Page",
  description: "Developed by Azizur Rahman",
};
export default function Courses() {
  return (
    <Layout>
      <BreadcrumbSection header="All Course" title="All Course" />
      {/* <AllCourseSection/> */}
      <CourseSection2 />
    </Layout>
  );
}
