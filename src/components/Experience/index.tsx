import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { getRangeYear } from "../../lib/Helpers";

interface ExperienceInterfaceItem {
  title: string;
  company: string;
  location: string;
  from: string;
  to: string;
  current: boolean;
  description: string[];
  url: string;
}

interface ExperienceInterface {
  experience: Array<ExperienceInterfaceItem>;
}

const Experience = React.forwardRef<HTMLDivElement, ExperienceInterface>(
  (props, ref) => {
    return (
      <div
        className="justify-content-start experience"
        id="experience"
        ref={ref}
      >
        <div className="container">
          <h2 className="section-title text-center">Experience.</h2>
          <section className="timeline">
            <div className="timeline-container">
              <VerticalTimeline>
                {props.experience.map((item, index) => (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={getRangeYear(item.from, item.to)}
                    iconClassName="timeline-icon"
                    key={index}
                  >
                    <div className="timeline-card--head">
                      <h3 className="vertical-timeline-element-title">
                        {item.title} @{" "}
                        <a target="__blank" href={item.url}>
                          {item.company}
                        </a>
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        {item.location}
                      </h4>
                    </div>
                    <div className="timeline-card--body">
                      {item.description.map((desc, index) =>
                        item.description.length > 1 ? (
                          <li key={index}>{desc}</li>
                        ) : (
                          <p key={index}>{desc}</p>
                        )
                      )}
                    </div>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </section>
        </div>
      </div>
    );
  }
);

Experience.displayName = "Experience";

export default Experience;