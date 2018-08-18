import Layout from "../components/layout";
import Icons from "react-fontawesome";
import {Timeline, TimelineEvent, TimelineBlip} from 'react-event-timeline';

// Components
import Hero from "../components/hero";

const colorTheme = 'yellow';

export default () => (
  <Layout title="Welcome" hero={colorTheme}>
    <div className="aboutme-content__container">
      <Hero title="about me" backgroundColor={colorTheme} />
      <div className="uk-grid-collapse uk-child-width-1-1 uk-child-width-1-2@m uk-child-width-1-3@l uk-grid-match uk-grid">

          <article>
            <div className="uk-card uk-card-hover uk-card-body uk-card-large">
              <h3 className="uk-card-title">Timeline</h3>
              <Timeline>
                <TimelineEvent
                  title="Software Engineer @ British Broadcasting Corporation (BBC)"
                  subtitle="Dave to dave"
                  icon={<Icons name="book"/>}
                />
                <TimelineBlip
                  title="Freelance Web designer/Developer @ Pixel-FX"
                  icon={<Icons name="object-group"/>}
                />
                <TimelineBlip
                  title="Advanced Networks &amp; Security @ Bournemouth University"
                  icon={<Icons name="graduation-cap"/>}
                />
                <TimelineBlip
                  title="IT Enginner &amp; Windows Deployment Technician @ National Oceanography Centre"
                  icon={<Icons name="laptop"/>}
                />
                <TimelineBlip
                  title="Computing @ Bournemouth University"
                  icon={<Icons name="graduation-cap"/>}
                />
              </Timeline>
            </div>
          </article>



          <article>
            <div className="uk-card uk-card-hover uk-card-body uk-card-large">
              <h3 className="uk-card-title">What I do</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </article>



          <article>
            <div className="uk-card uk-card-hover uk-card-body uk-card-large">
              <h3 className="uk-card-title">Projects</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </article>



          <article>
            <div className="uk-card uk-card-hover uk-card-body uk-card-large">
              <h3 className="uk-card-title">Interests</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </article>
      </div>
    </div>
  </Layout>
);
