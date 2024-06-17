"use client";
import { Button } from "@/types"
import config from "@/config/config.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBolt, faArrowTrendUp, faFaceSmileBeam, faLaptop, faFileAlt, faCoins } from '@fortawesome/free-solid-svg-icons';
import { markdownify } from '@/lib/utils/textConverter';
import Link from 'next/link'

// Assuming a basic setup for icons
const iconMap: { [key: string]: any } = {
  laptop: faLaptop,
  file: faFileAlt,
  check: faCheckCircle,
  coins: faCoins
};

// Define the props structure based on expected data
interface Advantage {
  id: string;
  text: string;
  description_card: string;
  icon: string;
}

interface AdvantagesData {
  title: string;
  description: string;
  enable: boolean;
  advantages: Advantage[];
  button: Button;
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
          <div className="row advantages-container">
            {data.advantages.map((advantage, index) => (
              <div key={index} className="advantage-item">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="rounded-lg bg-custom px-2 py-10 pt-3 text-center">
                      
                      {/* Number in a circle */}
                      <div className="number-circle">
                        {advantage.id}
                      </div>

                      {/* Icon container */}
                      <div className="icon-container">
                        <FontAwesomeIcon icon={iconMap[advantage.icon]} size="3x" />
                      </div>

                      {/* Title text container */}
                      <div className="title-container mt-2">
                        <h3 dangerouslySetInnerHTML={markdownify(advantage.text)} className="h6 font-primary font-semibold text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    {/* Description text container */}
                    <div className="description-container mt-1">
                      <p dangerouslySetInnerHTML={markdownify(advantage.description_card)} className="text-sm font-light text-white" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Add line only if it's not the last item */}
              {index < data.advantages.length - 1 && (
                <div className="connector"></div>
              )}
            </div>
            ))}
          </div>
        </div>
        
        {/* Render the button if enabled */}  
        <Link
            className="btn btn-primary  hover:bg-teal-900 mt-5"
            href={data.button.link}
            >
            {data.button.label}
          </Link>

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
          position: relative;
        }
        .advantage-item {
          flex: 1 1 20%;
          margin: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 200px; // Ensures all items are the same height
          position: relative; // Required for absolute positioning of number-circle
        }
        .flip-card {
          background-color: transparent;
          width: 100%;
          height: 100%;
          perspective: 1000px; /* Remove this if you don't want the 3D effect */
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden; /* Safari */
          backface-visibility: hidden;
        }
        .flip-card-front {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #016D5D; /* Use the provided background color */
          border: 0px solid black; /* Adds a solid black line around the container */
          border-radius: 40px;
        }
        .flip-card-back {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #00ab92; /* Use the provided background color */
          border: 0px solid black; /* Adds a solid black line around the container */
          border-radius: 40px;
          transform: rotateY(180deg);
        }
        .rounded-lg {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%; // This line makes the content use all available height
          background-color: #016D5D; // Use the provided background color
          border: 0px solid black; // Adds a solid black line around the container
          border-radius: 40px;
          position: relative; // Ensure number circle is positioned correctly
        }
        .number-circle {
          position: absolute;
          top: -15px;
          left: -15px;
          width: 60px;
          height: 60px;
          background-color: #00975f;
          color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 26px; // Ensure the number is visible
        }
        .icon-container {
        color: white;
          margin-top: 40px; // Adjusts the space between the number circle and icon
        }
        .title-container {
          width: 100%;  // Ensure text areas use full card width
          color: white;
          text-align: center;
          padding: 0 20px;
          margin-top: 10px;  // Spacing between elements
        }
        .description-container {
          width: 100%;  // Ensure text areas use full card width
          color: white;
          text-align: center;
          padding: 0 20px;
          margin-top: 10px;  // Spacing between elements
        }
        .connector {
          position: absolute;
          top: 50%;
          left: 100%;
          width: 20px;
          height: 2px;
          background-color: black;
          display: flex;
          align-items: center;
        }
        @media (max-width: 767px) {
          .row {
            flex-direction: column;
          }
          .advantage-item {
            width: 100%;  // Stacks items vertically on mobile
          }
          .connector {
            top: auto;
            left: 50%;
            width: 2px;
            height: 20px;
            top: 100%;
            transform: translateX(-50%);
          }
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