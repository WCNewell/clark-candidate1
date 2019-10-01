import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/181228DevClarkweb.jpg'
import pic02 from '../images/ZenMedHomepage.jpg'
import pic03 from '../images/Anchorage.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
      <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <h2 className="major">Intro</h2>
        <span className="image main">
          <img src={pic01} alt="Clark Newell at home" />
        </span>
        <p>
          Hello World! I am currently working at <strong>
            <a href="https://redpeppersoftware.com">Red Pepper Software</a></strong> where the mantra is you are an efficient problem solver no mater what tech-stack or programming language gets thrown at you.
      As a Full Stack Software Development Intern, using Jira as the productivity tool inline with scrum methodology and agile workflow, I assist my team with QA, pair programming, code review and full stack coding assignments building proprietary software for multiple clients.
      Simultaneously managing multiple tickets on strict tempo timers, I switch between multiple tech stacks and languages throughout the day.
      I'm becoming proficient in frontend web development using HTML, CSS, Sass, JavaScript, PHP, Razor, JS frameworks such as AngularJS and Angular using VS Code, customize templates on e-commerce platforms such as Shopify and blog-sites such as WordPress, and interfacing with CRM APIs such as Zoho.
      I'm also becoming proficient in full stack and backend development using C#, ASP.NET, Entity framework and SQL using Visual Studio and SSMS.
          </p>
        <p>
          <p>I graduated in June 2018 from <strong>
            <a href="https://www.galvanize.com/denver-platte">
              Galvanize-Denver
              </a>
          </strong>, a web development immersive program where I trained in JavaScript ES6, HTML5, CSS, Vue.js, React,
                  React Native, Node.js, PostgreSQL, git, Visual Studio, AWS, consuming APIs, and Agile methodology. There I also
                  gained experience with various JavaScript libraries such as Vuetify, React-table, Stripe, Chart.js, Google maps, Cypress, Knex.js, and Express.
          </p>
          <p>
            Post graduation studies provided a deeper dive into
            React/Redux, GatsbyJS, GraphQL and headless WordPress. I am also very interested in
            learning more about Sass, TypeScript, backend developing using C#, ASP.NET, Entity framework, SQL, Automated Testing, DevOps and Continuous Integration/Continuous Deployment.
          </p>

          Prior career and educational experiences provided me with managerial and adminstriative experience, and span a wide range of industries including higher education, retail, finance,
            health care, food and beverage, and music. I lived in Germany for 2 years and am German bilingual. I earned a BA in Music with a German minor from the <strong>
            <a href="https://utah.edu">University of Utah</a>
          </strong>.
          </p>
        <ul className="icons">
          <li>
            <a href="https://twitter.com/WCNewell" className="icon fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/william-clark-newell/" className="icon fa-linkedin">
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/WCNewell" className="icon fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
        {close}
      </article>

      <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <h2 className="major">Work</h2>
        <span className="image main">
          <img src={pic02} alt="Zenmed home page" />
        </span>
        <p>
          {' '}
          This app itself is designed to be a clean, uncluttered, progressive web app that is responsive to multiple media formats, with a mobile-first approach. App also features original logo and photography meant to represent my passion for the outdoors, an artistic aesthetic, and desire to achieve optimal health and positivity. <strong
          >
            {' '}
            Tech:{' '}
          </strong>
          Built on the "JAMstack" using GatsbyJS, featuring React, Sass, and GraphQL. SEO is employed via react-helmet and site metadata configurations. Currently exploring the GraphQL functionality more while creating a headless WordPress blog section in the next iteration. Front-end deployed to Bluehost.
          </p>
        <p>
          <strong>
            <a href="https://WCNewell.github.io/max-hamburger">
              BurgerBuilder
              </a>
          </strong> Completed the entire Udemy React course and this is one of the resulting projects, an app that allows the user to create a login, build and order hamburger sandwiches and view all previous orders.
            <strong>Tech:</strong> this is a React app which employs React Router, Axios, Redux, Redux-Thunk, Redux-Saga, and Jest-testing libraries. Front-end deployed to GitHub pages, back-end hosted on Firebase.
          </p>
        <p>
          <strong>
            <a href="https://vuetiful-goals.firebaseapp.com/#/goals">
              VuetifulGoals
              </a>
          </strong> is a prototype goal-setting and visualization app. User goals can be added, updated or deleted. Goal form entry fields require data or give warnings. <strong
          >
            Tech:
            </strong> this is my first full-stack, de-coupled app featuring CRUD functionality built in Vue.js with the Vuetify library (Google Materialize bootstrap for Vue.js) on the front, and a PostgreSQL backend using the Knex.js and Express libraries. In future iterations, I would love to include user login so personal data persists and combine it with "ZenMed" as a progressive web app built in React. Front-end deployed to Firebase, back-end deployed to Heroku.
          </p>
        <p>
          <strong>
            <a href="https://zenmedvue.firebaseapp.com/#/">ZenMed</a>
          </strong> is a prototype meditation app featuring clean design, a music player with a soothing visualizer, a random quote generator for daily inspiration, and ZenBoard, which is a collection of white-noise buttons to bring focus while meditating. <strong
          >
            Tech:
            </strong> this app was designed with Vue.js and connects to the Quotes REST API. In future iterations I would love to connect to a music API, create further white-noise options featuring continuous looping of sounds and combine it with “VuetifulGoals” as a progressive web app built in React. Front-end deployed to Firebase.
          </p>
        <p>
          Please view my <strong>
            <a href="https://github.com/WCNewell">GitHub</a>
          </strong> profile for more projects and futher information on the projects mentioned above.
          </p>
        <ul className="icons">
          <li>
            <a href="https://twitter.com/WCNewell" className="icon fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/william-clark-newell/" className="icon fa-linkedin">
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/WCNewell" className="icon fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
        {close}
      </article>

      <article id="blog" className={`${this.props.article === 'blog' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <h2 className="major">Blog</h2>
        <span className="image main">
          <img src={pic03} alt="Clark Newell on saddle of Mount Timpanogos Utah" />
        </span>
        <p>
          Coming next...a blog section covering my web development and fitness journeys. Meanwhile, my posts are available on <strong>
            <a href="https://medium.com/@williamcnewell">Medium</a>
          </strong>.
          </p>
        <p>
          {' '}
          When not coding, I thoroughly enjoy the outdoors, long distance biking, working out, hot yoga, pets, playing the piano, and pop culture. I am proud to have been involved in the Denver area tech community as an active Co-organizer for a monthly meetup group with 30+ attendees.
          In the Salt Lake City, Utah area, I also co-host a monthly tech
          <strong><a href="https://www.meetup.com/Queer-Tech-SLC/"> meetup </a></strong>
          group and am a regular attendee at <strong>
            <a href="https://utahjs.com">UtahJS</a>
          </strong> events.
          </p>
        <p>
          I invite you to connect with me via social
          media links.
          </p>
        <ul className="icons">
          <li>
            <a href="https://twitter.com/WCNewell" className="icon fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/william-clark-newell/" className="icon fa-linkedin">
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/WCNewell" className="icon fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
        {close}
      </article>

      {/* <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <h2 className="major">Contact</h2>
        <form action="https://my.bluehost.com/bluemail" encType="multipart/form-data" method="POST">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4" />
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>

            <input type="hidden" name="cgiemail-mailopt" value="sync" />
            <input type="hidden" name="sendtoemail" value="clark@clarknewell.tech" />
            <input type="hidden" name="redirect" value="https://clarknewell.tech" />

            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </form>
        <ul className="icons">
          <li>
            <a href="https://twitter.com/WCNewell" className="icon fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/william-clark-newell/" className="icon fa-linkedin">
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/WCNewell" className="icon fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
        {close}
      </article> */}
    </div>
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main