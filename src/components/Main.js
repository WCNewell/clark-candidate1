import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/WCNewell_Dec2017.jpg'
import pic02 from '../images/ZenMedHomePage.png'
import pic03 from '../images/UCfromTimp.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Hello World! W. Clark Newell here. I recently graduated in June 2018 from Galvanize-Denver, a web development immersive program where I trained in JavaScript ES6, HTML5, CSS, Node.js, Vue.js, Vuetify, React Native, Express, Knex, PostgreSQL, Cypress testing and Agile workflow.</p>
          <p>Post graduation, I have been studying React, Typescript, GatsbyJS, GraphQL, Flow, DevOps, Sovereign blockchain, and Python.</p>
          <p>Prior career and educational experiences have provided me with a lot of management experience, spanning a wide range of industries including higher education, retail, finance, health care, food and beverage, and music. I lived in Germany for 2 years and am German bilingual. I earned a BA in Music with a German minor from the University of Utah.</p>
          <p>These experiences have broadened my communication skills and adaptability within a wide variety of settings and cultures. I am proud to come from a diverse background that I draw upon for creative output and meaningful interactions with colleagues and clients.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p><a href='https://zenmedvue.firebaseapp.com/#/'>ZenMed</a> is one of the first apps I built and is a prototype meditation app built in Vue.js, which includes a music player with visualizer, daily quote api, and white noise generator. The next iteration of this app will be combined with "VuetifulGoals" as a PWA built in React.</p>
          <p><a href='vuetiful-goals.firebaseapp.com/#/goals'>VuetifulGoals</a> is another newbie project and is a "full stack" app built with the Vuetify library and a PosgreSQL backend. The next iteration of this app will be combined with "ZenMed" as PWA built in React.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>As I embark on this new career path, I 'm in search of a supportive environment to hone my developer skills with the mentality that learning never ends. In turn, I bring my past experiences to your team. I am personable and highly motivated to quickly earn a trusted position as liaison between your clients and developers as a project manager. I would love to travel and interact with our clients both domestic and international in person when needed.</p>
          <p>When not coding, I thoroughly enjoy the outdoors, my road bike, my cat, walking shelter dogs, choir singing, playing the piano, and devouring pop culture.I am proud to have been involved in the Denver area tech community as an active Co - organizer for the Denver LGBTQ in Tech meetup group.I 've recently returned to my roots in Utah and look forward to bringing these experiences to the Silicon Slopes!</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
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