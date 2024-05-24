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
import Testimonials from "@/partials/Testimonials";
import Script from 'next/script';

const Foerderservice = async () => {
  const therm = getListPage("therm/_index.md");
  const { frontmatter: advantagesData } = getListPage("sections/advantages_therm.md");
  const { frontmatter: numbersData } = getListPage("sections/numbers.md");
  const { frontmatter: processData } = getListPage("sections/process_therm.md");
  const testimonialData = getListPage("sections/testimonial_therm.md");
  const callToActionData = getListPage("sections/call-to-action.md");
  const { frontmatter } = therm;
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
    <Script
      id="heyflow" src="https://static.heyflow.com/widget/latest/webview.js">
    </Script>

    <heyflow-wrapper flow-id="f_rderservice" dynamic-height scroll-up-on-navigation style-config='{"width": "100%"}'></heyflow-wrapper>
    </>
  );
};

export default Foerderservice;

