import Layout from "../components/layout";
import Icons from "react-fontawesome";
import {Timeline, TimelineEvent, TimelineBlip} from 'react-event-timeline';

// Components
import Hero from "../components/hero";

const colorTheme = 'yellow';
const iconColour = '#00a2ad';

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
                <TimelineBlip
                  title="Software Engineer for BBC News @ British Broadcasting Corporation (BBC)"
                  subtitle="CURRENT"
                  icon={<Icons name="book"/>}
                  iconColor={iconColour}
                />
                <TimelineBlip
                  title="Graduate Software Engineer @ British Broadcasting Corporation (BBC)"
                  icon={<Icons name="book"/>}
                  iconColor={iconColour}
                />
                <TimelineBlip
                  title="Freelance Web designer/Developer @ Pixel-FX"
                  icon={<Icons name="object-group"/>}
                  iconColor={iconColour}
                />
                <TimelineBlip
                  title="Advanced Networks &amp; Security @ Bournemouth University"
                  icon={<Icons name="graduation-cap"/>}
                  iconColor={iconColour}
                />
                <TimelineBlip
                  title="IT Enginner &amp; Windows Deployment Technician @ National Oceanography Centre"
                  icon={<Icons name="laptop"/>}
                  iconColor={iconColour}
                />
                <TimelineBlip
                  title="Computing @ Bournemouth University"
                  icon={<Icons name="graduation-cap"/>}
                  iconColor={iconColour}
                />
              </Timeline>
            </div>
          </article>

          <article>
            <div className="uk-card uk-card-hover uk-card-body uk-card-large">
              <h3 className="uk-card-title">What I do</h3>
              <p>At the moment I work for BBC News, specifically the WorldService team who build and maintains the 41 BBC News Language sites, from <a href="https://www.bbc.com/mundo" target="_blank" rel="noopener">BBC Mundo</a> to <a href="https://www.bbc.com/pidgin" target="_blank" rel="noopener">BBC Pidgin</a></p>
              <p>Over the past two years I have been a key member of the team, helping to launch 12 new language sites around the world as well as building AMP (Accelerated Mobile Pages) for all of <a href="https://www.google.co.uk/amp/s/www.bbc.co.uk/news/amp/technology-45273087" target="_blank" rel="noopener">BBC News</a> and <a href="https://www.google.co.uk/amp/s/www.bbc.co.uk/sport/amp/football/45274881" target="_blank" rel="noopener">BBC Sport</a></p>
              <h4>What else?</h4>
              <ul>
                <li>Involved in moving the BBC news estate to HTTPS</li>
                <li>Contionously working to help improve web performance</li>
                <li>Working to support a vast array of older and new devices and browsers for our users in emerging markets</li>
                <li>Building soloutions to help track web performace and see where it could be improved</li>
                <li>Developing soloutions for problem alerting and notifications</li>
                <li>DevOps, helping to support our infrastructure and Build &amp; Deployment pipelines</li>
              </ul>
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
