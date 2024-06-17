import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Button, Feature } from "@/types";
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
import Process_foerderservice from "@/partials/Process_foerderservice";
import Testimonials from "@/partials/Testimonials";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Foerderservice = async () => {
  const foerderservice = getListPage("foerderservice/_index.md");
  const { frontmatter: advantagesData } = getListPage("sections/advantages_foerderservice.md");
  const { frontmatter: numbersData } = getListPage("sections/numbers_foerderservice.md");
  const { frontmatter: processData } = getListPage("sections/process_foerderservice.md");
  const testimonialData = getListPage("sections/testimonial_therm.md");
  const callToActionData = getListPage("sections/call-to-action.md");
  const { frontmatter } = foerderservice;
  const { banner, features }: {
    banner: {
      meta_title: string;
      title: string;
      description: string;
      image: string;
      content: string;
      button_footer: string;
      button?: Button;
    };
    features: Feature[];
  } = frontmatter;

  console.log("Banner Meta Title:", banner.meta_title); // Log to debug

  if (!banner.meta_title) {
    console.error("Meta title is missing!");
    // Provide a fallback title
    banner.meta_title = "Enklar";
  }

  return (
    <>
      <Head>
        <title>{banner.meta_title}</title>
        <meta name="description" content={banner.description} />
        <link rel="shortcut icon" href={config.site.favicon} />
      </Head>
      <SeoMeta title={banner.title} description={banner.description} image={banner.image} />

      {/* Banner Section */}
      <section className="section pt-14 pb-12">
        <div className="container">
          <div className="row flex-col lg:flex-row items-center lg:items-start justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
              <h1 className="mb-4 text-h3 lg:text-h1" dangerouslySetInnerHTML={markdownify(banner.title)} />
              <ul className="space-y-4 mb-8">
                <li className="flex items-center justify-center lg:justify-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 mr-2" color="#B8860B" />
                  <span>Maximale Fördersumme sichern</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 mr-2" color="#B8860B" />
                  <span>Garantiert schnelle Durchführung</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 mr-2" color="#B8860B" />
                  <span>Heizlastberechnung & BzA-Erstellung</span>
                </li>
              </ul>
              {banner.button && banner.button.enable && (
                <>
                <Link
                  className="btn btn-primary text-lg px-12 py-4 hover:bg-teal-900"
                  href={banner.button.link}
                  target={banner.button.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener"
                >
                  {banner.button.label}
                </Link>
                <p className="text-sm text-gray-400 mt-2">kostenlos & unverbindlich</p>
                </>
              )}
            </div>
            <div className="lg:w-1/2">
              <Image src={banner.image} className="mx-auto rounded-lg" width={600} height={300} alt="banner image" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Advantage Sections */}
      <Advantages_therm data={advantagesData} />

      {/* Numbers Sections */}
      <Numbers data={numbersData} />

      {/* Process Sections */}
      <Process_foerderservice data={processData}/>

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
                {feature.button && feature.button.enable && (
                  <Link
                    className="btn btn-primary"
                    href={feature.button.link}
                    target={feature.button.link.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener"
                  >
                    {feature.button.label}
                  </Link>
                )}
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

export default Foerderservice;
