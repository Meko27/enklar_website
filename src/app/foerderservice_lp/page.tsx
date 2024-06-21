import React from "react";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Button, Feature } from "@/types";
import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import CallToAction from "@/partials/CallToAction";
import Tabs from "@/shortcodes/Tabs"; 
import Tab from "@/shortcodes/Tab";
import SeoMeta from "@/partials/SeoMeta";
import Script from 'next/script';
import { RegularPage } from "@/types";
import Image from 'next/image';
import Link from 'next/link';
import Head from "next/head";
import Advantages_therm from "@/partials/Advantages_therm";
import Numbers from "@/partials/Numbers";
import Examples_foerderung from "@/partials/Examples_foerderservice";
import FAQ_foerderung from "@/partials/FAQ_foerderservice";


import Process_therm from "@/partials/Process_therm";
import Process_foerderservice from "@/partials/Process_foerderservice";
import Testimonials from "@/partials/Testimonials";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FaCircle } from "react-icons/fa";

const Foerderservice = async () => {
  const foerderservice = getListPage("foerderservice_lp/_index.md");
  const { frontmatter: advantagesData } = getListPage("sections/advantages_foerderservice.md");
  const { frontmatter: numbersData } = getListPage("sections/numbers_foerderservice.md");
  const { frontmatter: processData } = getListPage("sections/process_foerderservice.md");
  const { frontmatter: tabsContent } = getListPage("sections/overview_foerderung.md");
  const testimonialData = getListPage("sections/testimonial_therm.md");
  const callToActionData = getListPage("sections/call-to-action_foerderservice.md");
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

  const GA_TRACKING_ID = 'G-THJP4GMD8G'

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
      <Script src="https://static.heyflow.com/widget/latest/webview.js"></Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <SeoMeta title={banner.title} description={banner.description} image={banner.image} />

      {/* Banner Section */}
      <section className="relative section pt-14 pb-12 mb-12">
        <div className="absolute inset-0 h-2/3 lg:w-full w-auto">
          <Image 
            src={banner.image} 
            className="w-auto lg:w-full" 
            alt="banner image" 
            priority 
            layout="fill" 
          />
        </div>
        <div 
          className="absolute inset-0 bg-black opacity-50 h-2/3">
        </div>
        
        <div className="container relative z-10">
          <div className="flex justify-center">
            <div className="row w-full lg:w-4/5 items-center lg:items-center justify-center">
              <div className="w-auto lg:w-3/4 mb-2 text-center lg:text-left text-white relative">
                <div className="relative top-0 w-auto lg:w-2/4 bg-[#FF8C69] text-white py-1 px-2 rounded mb-4">
                    Ihr Förderantrag in wenigen Minuten
                </div>
                <h1 
                className="mb-4 text-h3 lg:text-h2 lg:mx-auto text-white" dangerouslySetInnerHTML={markdownify(banner.title)} 
                />
                <ul className="flex justify-center lg:justify-center space-x-4 space-y-4 lg:space-y-0 mb-8">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 mr-2 left-0" color="#87CEFA" />
                    <span>Maximale Fördersumme</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 mr-2 left-0" color="#87CEFA" />
                    <span>Schnelle Durchführung</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 mr-2 left-0" color="#87CEFA" />
                    <span>Heizlastberechnung & BzA-Erstellung</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/4 flex flex-col items-center lg:items-end">
                <Image 
                  src="/images/eee_logo.png" 
                  alt="certificate icon" 
                  width={200} 
                  height={200} 
                  className="mb-4 lg:mb-2"
                />
                <Image 
                  src="/images/certificate.png" 
                  alt="certificate icon" 
                  width={200} 
                  height={200} 
                  className="mb-4 lg:mb-2"
                />
              </div>
            </div>
          </div>

          <div className="mt-1 flex justify-center">
            <heyflow-wrapper flow-id="lp-heizungstausch" dynamic-height scroll-up-on-navigation style-config='{"width": "auto"}'></heyflow-wrapper>
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
                {feature.bulletpoints && (
                  <ul>
                    {feature.bulletpoints.map((bullet: string) => (
                      <li className="relative mb-4 pl-6" key={bullet}>
                        <FaCircle className={"absolute left-0 top-2 size-1.5"} style={{color: '#016D5D'}}/>
                        <span dangerouslySetInnerHTML={markdownify(bullet)} />
                      </li>
                    ))}
                  </ul>
                )}
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

      {/* Tabs Sections */}
      <Examples_foerderung/>

      {/* FAQ Sections */}
      <FAQ_foerderung/>

      {/* CallToAction Sections */}
      <CallToAction data={callToActionData} />
    </>
  );
};

export default Foerderservice;