import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Call_to_action } from "@/types";
import Image from 'next/image';
import ScrollButton from "@/helpers/ScrollButton";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Call_to_action;
}

const CallToAction = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="mb-20">
          <div className="container">
            <div className="rounded-xl px-4 py-16 dark:bg-darkmode-theme-light xl:p-20" style={{ backgroundColor: '#87CEFA'}}>
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
                  
                </div>
                <div className="md:col-4 md:order-2">
                  <div className="partner-logo justify-center mb-5">
                      <Image src="/images/eee_logo.png" alt="Expertenlogo" width={300} height={100} />
                  </div>

                  {data.frontmatter.button.enable && (
                    <ScrollButton
                      label={data.frontmatter.button.label}
                    />
                  )}
                  
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