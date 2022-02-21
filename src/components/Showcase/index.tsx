import React from "react";
import Image from "next/image";
import FadeInAnimation from "@/lib/Helpers/FadeInAnimation";

interface PortofolioInterfaceItem {
  url: string;
  image: string;
  alt: string;
  name: string;
  type: string;
}

interface ShowcaseInterface {
  portofolio: Array<PortofolioInterfaceItem>;
}

const Showcase = React.forwardRef<HTMLDivElement, ShowcaseInterface>(
  (props) => {
    return (
      <div className="justify-content-start showcase" id="showcase">
        <div className="container">
          <h2 className="section-title text-center">Showcase.</h2>
          <div className="row">
            {props.portofolio.map((item, key) => (
              <FadeInAnimation
                wrapperElement="div"
                direction={key % 2 ? "right" : "left"}
                className="col-lg-6 col-sm-12 mt-3 showcase-cards"
                delay={1 + key / 10}
                key={key}
              >
                <a href={item.url} target="__blank" className="showcase-card">
                  <Image
                    className="showcase-image image"
                    src={item.image}
                    alt={item.alt}
                    layout="fill"
                  />
                  <div className="image-overlay">
                    <div className="image-overlay-text">
                      <p className="project-company mb-0">{item.name}</p>
                      <p className="project-title">{item.type}</p>
                    </div>
                  </div>
                </a>
              </FadeInAnimation>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

Showcase.displayName = "Showcase";

export default Showcase;
