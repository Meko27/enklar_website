"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBolt, faArrowTrendUp, faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons';
import { markdownify } from '@/lib/utils/textConverter';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

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
  number: string;
  suffix: string;
}

interface AdvantagesData {
  title: string;
  description: string;
  enable: boolean;
  advantages: Advantage[];
}

const Numbers = ({ data }: { data: AdvantagesData }) => {
  if (!data.enable) return null;

  return (
    <section className="section pt-1">
      <div className="container">
        <div className="row">
          <div className="mx-auto mt-12 mb-6 text-center md:col-10 lg:col-8 xl:col-6">
            <h2
              dangerouslySetInnerHTML={markdownify(data.title)}
              className="mb-2"
            />
            <p
              dangerouslySetInnerHTML={markdownify(data.description!)}
            />
          </div>
          <div className="row2">
            {data.advantages.map((advantage, index) => (
              <AdvantageItem key={index} advantage={advantage} />
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
          gap: 1px;
          flex-wrap: wrap;
        }
        .row2 {
          display: flex;
          justify-content: center;
          gap: 1px;
          flex-wrap: wrap;
          background-color: #dbdbdb;
          border-radius: 8px;
        }
        .advantage-item {
          flex: 1 1 20%;
          margin: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100px; /* Ensures all items are the same height */
          justify-content: center;
          height: 150px; /* This line will ensure all items stretch to the same height */
        }
        .rounded-lg {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%; /* This line makes the content use all available height */
          background-color: #dbdbdb; /* Use a CSS variable */
        }
        .text-container {
          margin-top: 20px;
        }
        .number-text {
          color: #016D5D !important!;
        }
      `}</style>
    </section>
  );
};

const AdvantageItem = ({ advantage }: { advantage: Advantage }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensure the animation triggers only once
    threshold: 0.1, // Adjust the threshold as needed
  });

  const [showSuffix, setShowSuffix] = useState(false);

  return (
    <div ref={ref} className="advantage-item">
      <div className="rounded-lg px-7 py-10 dark:bg-darkmode-theme-light text-center">
        <h2 className="h1 font-primary font-semibold items-center justify-center number-text"  style={{ color: '#016D5D' }}>
          {inView && (
            <CountUp
              end={parseInt(advantage.number, 10)}
              duration={2.5}
              delay={0}
              onEnd={() => setShowSuffix(true)}
            />
          )}
          {showSuffix && advantage.suffix}
        </h2>
        <div className="text-container ml-2 mt-4">
          <h3
            dangerouslySetInnerHTML={markdownify(advantage.text)}
            className="h6 font-primary font-semibold items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Numbers;
