"use client";
import ImageFallback from "@/helpers/ImageFallback";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBolt, faArrowTrendUp, faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons';
import { markdownify } from '@/lib/utils/textConverter';

// Assuming a basic setup for icons
const iconMap = {
  bolt: faBolt,
  check: faCheckCircle,
  trend: faArrowTrendUp,
  smile: faFaceSmileBeam
};

// Define the props structure based on expected data

interface Advantage {
  id: string;
  text: string;
  description_card: string;
  image: string;
}

interface AdvantagesData {
  title: string;
  description: string;
  enable: boolean;
  advantages: Advantage[];
}

const Process_therm = ({ data }: { data: AdvantagesData }) => {
  if (!data.enable) return null;

  return (
    <section className="section pt-1">
      <div className="container">
        <div className="row">
        <div className="mx-auto mb-4 mt-12 text-center md:col-10 lg:col-8 xl:col-6">
                <h2
                  dangerouslySetInnerHTML={markdownify(data.title)}
                  className="mb-2"
                />
                <p
                  dangerouslySetInnerHTML={markdownify(
                    data.description!,
                  )}
                />
              </div>
              <div className="row">
              {data.advantages.map((advantage, index) => (
                <div key={index} className="advantage-item">
                  <div className="rounded-lg bg-theme-light px-2 py-10 pt-3 dark:bg-darkmode-theme-light text-center">
                  
                    {/* Image container */}
                    <div className="image-container">
                      <ImageFallback src={advantage.image} className="mx-auto rounded-md mb-4" width="300" height="150" alt={advantage.text} priority />
                    </div>

                    {/* Title text container */}
                    <div className="title-container mt-2">
                      <h3 dangerouslySetInnerHTML={markdownify(advantage.text)} className="h6 font-primary font-semibold" />
                    </div>

                    {/* Description text container */}
                    <div className="description-container mt-1">
                      <p dangerouslySetInnerHTML={markdownify(advantage.description_card)} className="text-sm font-light" />
                    </div>
                  
                  </div>
                </div>
              ))}

          </div>
        </div>
      </div>
      <style jsx>{`
        .section {
          padding: 0px 0;
        }
        .row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1px;
        }
        .advantage-item {
          flex: 1 1 20%;
          margin: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100px; // Ensures all items are the same height
          justify-content: center;
          height: auto; // This line will ensure all items stretch to the same height
        }
        .rounded-lg {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%; // This line makes the content use all available height
          background-color: #dbdbdb; // Use a CSS variable for theme color
        }
        .title-container {
          width: 100%;  // Ensure text areas use full card width
          text-align: left;
          padding-left: 20px;
          padding-right: 20px;
          margin-top: 10px;  // Spacing between elements
        }
        .description-container {
          width: 100%;  // Ensure text areas use full card width
          text-align: left;
          padding-left: 20px;
          padding-right: 20px;
          margin-top: 10px;  // Spacing between elements
        }
        @media (min-width: 768px) {
          .advantage-item {
            flex: 1 1 20%;  // Allows 5 items per row on larger screens
          }
        }
      `}</style>
    </section>
  );
};

export default Process_therm;
