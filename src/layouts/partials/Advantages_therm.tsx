"use client";

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
  icon: keyof typeof iconMap;
}

interface AdvantagesData {
  enable: boolean;
  advantages: Advantage[];
}

const Advantages_therm = ({ data }: { data: AdvantagesData }) => {
  if (!data.enable) return null;

  return (
    <section className="section pt-1">
      <div className="container">
        <div className="row">
          {data.advantages.map((advantage, index) => (
            <div key={index} className="advantage-item">
              <div className="rounded-lg bg-theme-light px-7 py-10 dark:bg-darkmode-theme-light text-center">
                <FontAwesomeIcon icon={iconMap[advantage.icon]} size="2x" color="#016D5D" />
                <div className="text-container ml-2 mt-4">
                  <h3
                    dangerouslySetInnerHTML={markdownify(advantage.text)}
                    className="h6 font-primary font-semibold items-center justify-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .section {
          padding: 0px 0;
        }
        .row {
          display: flex;
          justify-content: center;
          gap: 1px;
          flex-wrap: wrap;
        }
        .advantage-item {
          flex: 1 1 20%;
          margin: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100px; // Ensures all items are the same height
          justify-content: center;
          height: 100px; // This line will ensure all items stretch to the same height
        }
        .rounded-lg {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%; // This line makes the content use all available height
        }
        .text-container {
          margin-top: 20px;
        }
      `}</style>
    </section>
  );
};

export default Advantages_therm;
