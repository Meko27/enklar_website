import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Call_to_action } from "@/types";
import Link from "next/link";
import ContactForm from "./contact_form";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Call_to_action;
}

const CallToAction = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="mb-28">
          <div className="container">
            <div className="rounded-xl px-4 py-16 dark:bg-darkmode-theme-light xl:p-20" style={{ backgroundColor: '#dbdbdb'}}>
              <div className="row items-center justify-between">

                <div className="md:col-7 md:order-1">
                  <h2
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.title,
                    )}
                    className="mb-2"
                  />
                  <p
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.description,
                    )}
                    className="mb-6"
                  />
                  {data.frontmatter.button.enable && (
                    <Link
                      className="btn btn-primary"
                      href={data.frontmatter.button.link}
                    >
                      {data.frontmatter.button.label}
                    </Link>
                  )}
                </div>
                <div className="md:col-5 md:order-2">
                  <div className=" p-6 rounded-lg shadow-md">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction;
