"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { markdownify } from '@/lib/utils/textConverter';

// Assuming a basic setup for icons
const iconMap = {
  bolt: faBolt,
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
              <FontAwesomeIcon icon={iconMap[advantage.icon]} size="3x" color="#016D5D" />
              <p dangerouslySetInnerHTML={markdownify(advantage.text)} />
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
          justify-content: space-around;
          align-items: center;
          text-align: center;
        }
        .advantage-item {
          flex: 1;
          margin: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .advantage-item p {
          margin-top: 10px;
          color: #333;
          font-size: 15px;
        }
      `}</style>
    </section>
  );
};

export default Advantages_therm;
