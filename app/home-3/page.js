import AboutSection3 from "@/component/about/AboutSection3";
import ActivitySection2 from "@/component/activity/ActivitySection2";
import BannerSection3 from "@/component/banner/BannerSection3";
import BlogSection2 from "@/component/blog/BlogSection2";
import CategorySection3 from "@/component/category/CategorySection3";
// import CategorySection from "@/component/category/CategorySection";
import ContactSection from "@/component/contact/ContactSection";

import ContactSection2 from "@/component/contact/ContactSection2";
import CourseSection2 from "@/component/course/CourseSection2";
import FooterSection2 from "@/component/footer/FooterSection2";
import VideoModal from "@/component/modal/VideoModal";
import NavbarSection from "@/component/navbar/NavbarSection";
// import TeamSection from "@/component/team/TeamSection";
// import AboutSection from "@/component/about/AboutSection";
import TopbarSection from "@/component/topbar/TopbarSection";
import ScrollToTopButton from "@/component/utils/ScrollToTopButton";
export const metadata = {
  title: "Hayle Bariise Technical Development Center",
  description: "Developed by Azizur Rahman",
};
export default function Home3() {
  return (
    <div className="home_3">
      <TopbarSection style="tf__topbar tf__topbar_2" />
      <NavbarSection
        style="main_menu_3"
        logo="images/myimages/loghaylebariise.png"
      />
      <BannerSection3 />
      <CategorySection3 />
      <AboutSection3 style="about_3" />
      {/* <CustomAboutSection /> */}
      <ContactSection />
      {/* <EventSection section="tf__event mt_95" startIndex={0} endIndex={4} /> */}
      <CourseSection2 />
      {/* <CounterSection /> */}
      {/* <TeamSection style="tf__team_3 pt_250 pb_100" /> */}
      <ContactSection2 />
      <ActivitySection2 style="tf__activities_3 tf__activities_slider_area mt_100 pt_95 pb_100" />
      <BlogSection2 />
      <FooterSection2
        style="tf__footer_3"
        logo="images/myimages/loghaylebariise.png"
      />
      <VideoModal />
      <ScrollToTopButton style="style-3" />
    </div>
  );
}
