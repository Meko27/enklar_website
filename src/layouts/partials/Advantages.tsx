"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Advantage } from "@/types";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBolt, faPiggyBank, faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faBolt, faPiggyBank, faHandshakeSimple); 

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: {
    enable?: boolean;
    title: string;
    description?: string;
    testimonials: Array<Advantage>;
  };
}

const Advantages = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="mx-auto mb-12 text-center md:col-10 lg:col-8 xl:col-6">
                <h2
                  dangerouslySetInnerHTML={markdownify(data.frontmatter.title)}
                  className="mb-2"
                />
                <p
                  dangerouslySetInnerHTML={markdownify(
                    data.frontmatter.description!,
                  )}
                />
              </div>
              <div className="col-12">
                <Swiper    
                  modules={[Autoplay, Pagination]}
                  pagination={{ clickable: true }}
                  loop={true}              
                  centeredSlides={false}
                  spaceBetween={12}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {data.frontmatter.testimonials.map(
                    (item: Advantage, index: number) => (
                      <SwiperSlide key={index}>
                        <div className="rounded-lg bg-theme-light px-7 py-10 dark:bg-darkmode-theme-light text-center">
                          <div className="text-dark dark:text-white">
                          <div className="text-dark dark:text-white flex flex-col items-center justify-center">
                            <FontAwesomeIcon icon={item.icon} color="#016D5D" className="rounded-full fa-2xl" />
                          </div>
                          </div>
                          <blockquote
                            className="mt-8 items-center justify-center"
                            dangerouslySetInnerHTML={markdownify(item.content)}
                          />
                          <div className="mt-11 flex items-center justify-center">
                           
                            <div className="ml-4">
                              <h3
                                dangerouslySetInnerHTML={markdownify(item.name)}
                                className="h5 font-primary font-semibold items-center justify-center"
                              />
                              <p
                                dangerouslySetInnerHTML={markdownify(
                                  item.designation,
                                )}
                                className="text-dark dark:text-white"
                              />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ),
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Advantages;
