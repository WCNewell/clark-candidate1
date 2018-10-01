import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/ClarkDec2017.jpg'
import pic02 from '../images/ZenMedHomepage.jpg'
import pic03 from '../images/ClarkTimp.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="Clark Newell on Galvanize Denver balcony" /></span>
          <p>Hello world! I graduated in June 2018 from <strong><a href='https://www.galvanize.com/denver-platte'>Galvanize-Denver</a></strong>, a web development immersive program where I trained in JavaScript ES6, HTML5, CSS, Vue.js, Vuetify, Express, Knex.js, PostgreSQL, Cypress testing and Agile workflow.</p>
          <p>Post graduation studies have provided a deeper dive into React/Redux, Node.js, Sass, TypeScript, GraphQL, DevOps and continuous testing/deployment.</p>
          <p>Prior career and educational experiences have provided me with a lot of management experience, spanning a wide range of industries including higher education, retail, finance, health care, food and beverage, and music. I lived in Germany for 2 years and am German bilingual. I earned a BA in Music with a German minor from the <strong><a href='https://utah.edu'>University of Utah</a></strong>.</p>
          <p>These experiences have broadened my communication skills and adaptability within a wide variety of settings and cultures. I am proud to come from a diverse background that I draw upon for creative output and meaningful interactions with clients and colleagues.</p>
          <ul className="icons">
            <li><a href="https://twitter.com/WCNewell" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.linkedin.com/in/william-clark-newell/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/WCNewell" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="Zenmed home page" /></span>
            <p>As a volunteer member of the <strong><a href="https://hirediversity.us/">Hire Diversity</a></strong> development team I am getting hands-on real world experience and mentorship. <strong>Tech:</strong> the HireDiversity app is built with a React front-end and a Node.js/MongoDB back-end.</p>
            <p>This app itself is my first personal website is designed to be clean, uncluttered, and feel like a progressive web app that is responsive to multiple media formats. <strong>Tech:</strong> I used a starter kit from GatsyJS, featuring React and QraphQL. The gorgeous Sass is from HTML5 UP, which I modified to fit my content and personal design needs. I’m excited to explore the GraphQL functionality more while creating a blog post section in the next iteration.</p>
            <p><strong><a href='https://vuetiful-goals.firebaseapp.com/#/goals'>VuetifulGoals</a></strong> is a prototype goal-setting and visualization app. User goals can be added, updated or deleted. <strong>Tech:</strong> this is my first full-stack, de-coupled app featuring CRUD functionality built in Vue.js with the Vuetify library (Google Materialize bootstrap for Vue.js) on the front, and a PostgreSQL backend using the Knex.js and Express libraries. In future iterations, I would love to include user login so personal data persists and combine it with "ZenMed" as a progressive web app built in React.</p>
            <p><strong><a href='https://zenmedvue.firebaseapp.com/#/'>ZenMed</a></strong> is a prototype meditation app featuring clean design, a music player with a soothing visualizer, a random quote generator for daily inspiration, and ZenBoard, which is a collection of white-noise buttons to bring focus while meditating. <strong>Tech:</strong> this app was designed with Vue.js and connects to the Quotes REST API. In future iterations I would love to connect to a music API, create rfurther white-noise options featuring continuous looping of sounds and combine it with “VuetifulGoals” as a progressive web app built in React.</p>
          <ul className="icons">
            <li><a href="https://twitter.com/WCNewell" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.linkedin.com/in/william-clark-newell/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/WCNewell" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="Clark Newell on saddle of Mount Timpanogos Utah" /></span>
          <p>As I embark on this new career path, I'm in search of a supportive environment to hone my developer arts with the mentality that learning never ends. In turn, I bring my unique set of past experiences and skills to your team and would love to begin my developer career as a Software Engineer.</p>
          <p>When not coding, I thoroughly enjoy the outdoors (here I'm on the saddle of Mount Timpanogos, Utah, July 24, 2018), my road bike, my cat, walking shelter dogs, choir singing, playing the piano, and pop culture. I am proud to have been involved in the Denver area tech community as an active Co-organizer for a meetup group. I've recently returned to my roots in Utah and look forward to bringing these experiences to the Silicon Slopes!</p>
          <ul className="icons">
            <li><a href="https://twitter.com/WCNewell" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.linkedin.com/in/william-clark-newell/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/WCNewell" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form action="https://www.bluehost.com/bluemail" encType="multipart/form-data" method="POST">
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
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>

              <input type='hidden' name='cgiemail-mailopt' value='sync' />
              <input type="hidden" name="sendtoemail" value="clark@clarknewell.tech" />
              <input type="hidden" name="redirect" value="https://clarknewell.tech" />

              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://twitter.com/WCNewell" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.linkedin.com/in/william-clark-newell/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/WCNewell" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
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