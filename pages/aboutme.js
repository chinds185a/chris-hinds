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
              <h3 className="uk-card-title">Who am I?</h3>
              <p>After completeing a degree in Advanced Computer Networks and Security at Boutnemouth University, I joined the BBC on their software engineering graduate scheme.</p>
              <p>During the graduate scheme I worked across multiple teams ranging from Broadcast Engineering to an internal content management system before entually landing in the BBC News WorldService team.</p>
              <p>Working with BBC News has given me the opportunity to develop on and deploy multiple websites that are used by hundreds of millions of people every week, all over the world with content being published in over 40 different languages.</p>
              <p></p>
            </div>
          </article>

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
