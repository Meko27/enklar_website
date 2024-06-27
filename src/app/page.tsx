import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import config from "@/config/config.json";
import Advantages from "@/partials/Advantages";
import { Button, Feature } from "@/types";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import Head from "next/head";
import Script from 'next/script';
import React from "react";
import PageHeader from "@/partials/PageHeader";
import CallToAction from "@/partials/CallToAction";
import Tabs from "@/shortcodes/Tabs"; 
import Tab from "@/shortcodes/Tab";
import { RegularPage } from "@/types";
import Image from 'next/image';
import Advantages_therm from "@/partials/Advantages_therm";
import Numbers from "@/partials/Numbers";
import Examples_foerderung from "@/partials/Examples_foerderservice";
import FAQ_foerderung from "@/partials/FAQ_foerderservice";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FaCircle } from "react-icons/fa";

const GA_TRACKING_ID = 'G-THJP4GMD8G'

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const advantages = getListPage("sections/advantages.md")
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  return (
    <>
      <Head>
        <meta name="google-site-verification" content="xGfKcUzJYFOYPCbx6ac-nRsL600rVekYV-60SYL3p48" />
         {/* favicon */}
         <link rel="shortcut icon" href={config.site.favicon} />
      </Head>
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
      <Script 
          id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/cb78db5a365ffbf4f2d14700/script.js" strategy="afterInteractive">
      </Script>
      <SeoMeta />
      <section className="section pt-14 pb-28">
        <div className="container">

          <div className="row flex-col lg:flex-row items-center lg:items-start justify-between">

            <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
              <h1 className="mb-4 text-h3 lg:text-h1" dangerouslySetInnerHTML={markdownify(banner.title)} />
                <ul className="space-y-4 items-center justify-center mb-8">
                  <li className="flex items-center lg:justify-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 mr-2 left-0" color="#87CEFA" />
                    <span>Förderservice</span>
                  </li>
                  <li className="flex items-center lg:justify-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 mr-2 left-0" color="#87CEFA" />
                    <span>Energieberatung</span>
                  </li>
                  <li className="flex items-center lg:justify-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 mr-2 left-0" color="#87CEFA" />
                    <span>Portfolioanalyse</span>
                  </li>
                </ul>
              {banner.button!.enable && (
                <>
                <Link
                  className="btn btn-primary text-lg px-12 py-4 hover:bg-teal-900"
                  href={banner.button!.link}
                  target={
                    banner.button!.link.startsWith("http") ? "_blank" : "_self"
                  }
                  rel="noopener"
                >
                  {banner.button!.label}
                </Link>
                </>
              )}
            </div>
            <div className="lg:w-1/2" >
            {banner.image && (
              <div className="col-12 rounded-lg">
                <ImageFallback
                  src={banner.image}
                  className="mx-auto rounded-lg"
                  width="800"
                  height="420"
                  alt="banner image"
                  priority
                />
              </div>
            )}
            </div>
            
          </div>
        </div>
      </section>

      <Advantages data={advantages} />

      {features.map((feature, index: number) => (
        <section
          key={index}
          className={`section-sm ${index % 2 === 0 && "bg-gradient"}`}
        >
          <div className="container">
            <div className="row items-center justify-between">
              <div
                className={`mb:md-0 mb-6 md:col-5 ${
                  index % 2 !== 0 && "md:order-2"
                }`}
              >
                <ImageFallback
                  src={feature.image}
                  height={480}
                  width={520}
                  alt={feature.title}
                  className="rounded-lg"
                />
              </div>
              <div
                className={`md:col-7 lg:col-6 ${
                  index % 2 !== 0 && "md:order-1"
                }`}
              >
                <h2
                  className="mb-4" 
                  dangerouslySetInnerHTML={markdownify(feature.title)}
                />
                <p
                  className="mb-8 text-lg"
                  dangerouslySetInnerHTML={markdownify(feature.content)}
                />
                <ul>
                  {feature.bulletpoints.map((bullet: string) => (
                    <li className="relative mb-4 pl-6" key={bullet}>
                      <FaCheck className={"absolute left-0 top-1.5"} style={{color: '#016D5D'}}/>
                      <span dangerouslySetInnerHTML={markdownify(bullet)} />
                    </li>
                  ))}
                </ul>
                {feature.button.enable && (
                  <Link
                    className="btn btn-primary mt-5"
                    href={feature.button.link}
                  >
                    {feature.button.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/*<Testimonials data={testimonial} />*/}
      {/*<CallToAction data={callToAction} />*/}
      
    </>
  );
};

export default Home;
