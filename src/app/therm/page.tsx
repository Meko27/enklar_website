import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Button, Feature, Advantage_therm } from "@/types";
import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import Image from 'next/image';
import Link from 'next/link';
import Head from "next/head";
import Advantages_therm from "@/partials/Advantages_therm";
import Numbers from "@/partials/Numbers";
import Process_therm from "@/partials/Process_therm";
import Testimonials from "@/partials/Testimonials";

const Therm = async () => {
  const therm = getListPage("therm/_index.md");
  const { frontmatter: advantagesData } = getListPage("sections/advantages_therm.md");
  const { frontmatter: numbersData } = getListPage("sections/numbers.md");
  const { frontmatter: processData } = getListPage("sections/process_therm.md");
  const testimonialData = getListPage("sections/testimonial_therm.md");
  const callToActionData = getListPage("sections/call-to-action.md");
  const { frontmatter } = therm;
  const { banner, features}: {
    banner: {meta_title: string; title: string; description: string; image: string; content:string; button_footer: string; button?: Button};
    features: Feature[];
  } = frontmatter;

  return (
    <>
       <Head>
        <title>{banner.meta_title}</title>
        <meta name="description" content={banner.description} />
        <link rel="shortcut icon" href={config.site.favicon} />
      </Head>
      <SeoMeta title={banner.title} description={banner.description} image={banner.image} />

       {/* Banner Section */}
       <section className="section pt-14 pb-2">
        <div className="container">
          <div className="row justify-center">
          <div className="col-12 rounded-lg">
              <ImageFallback src={banner.image} className="mx-auto rounded-lg" width="600" height="300" alt="banner image" priority />
            </div>
            <div className="lg:col-7 md:col-9 mb-8 text-center rounded-lg">
              <h1 className="mb-4 text-h3 m:text-h1" dangerouslySetInnerHTML={markdownify(banner.title)} />
              <p className="mb-8" dangerouslySetInnerHTML={markdownify(banner.content)} />
              {banner.button!.enable && (
                <Link
                  className="btn btn-primary"
                  href={banner.button!.link}
                  target={
                    banner.button!.link.startsWith("http") ? "_blank" : "_self"
                  }
                  rel="noopener"
                >
                  {banner.button!.label}
                </Link>
              )}
              <p className="mb-8 pt-2" dangerouslySetInnerHTML={markdownify(banner.button_footer)} />
            </div>
          </div>
        </div>
      </section>

      {/* Advantage Sections */}
      <Advantages_therm data={advantagesData} />

      {/* Process Sections */}
      <Process_therm data={processData} />

      {/* Numbers Sections */}
      <Numbers data={numbersData} />

      {/* Testimonial Sections */}
      <Testimonials data={testimonialData} />


      {/* Additional Sections */}
      {features.map((feature, index) => (
        <section key={index} className={`section-sm ${index % 2 === 0 ? "bg-gradient" : ""}`}>
          <div className="container">
            <div className="row items-center justify-between">
              <div className={`mb:md-0 mb-6 md:col-5 ${index % 2 !== 0 ? "md:order-2" : ""}`}>
                <ImageFallback src={feature.image} height={480} width={520} alt={feature.title} className="rounded-lg" />
              </div>
              <div className={`md:col-7 lg:col-6 ${index % 2 !== 0 ? "md:order-1" : ""}`}>
                <h2 className="mb-4" dangerouslySetInnerHTML={markdownify(feature.title)} />
                <p className="mb-8 text-lg" dangerouslySetInnerHTML={markdownify(feature.content)} />
                <Link
                  className="btn btn-primary"
                  href={banner.button!.link}
                  target={
                    banner.button!.link.startsWith("http") ? "_blank" : "_self"
                  }
                  rel="noopener"
                >
                  {banner.button!.label}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CallToAction Sections */}
      <CallToAction data={callToActionData} />

    </>
  );
};

export default Therm;
