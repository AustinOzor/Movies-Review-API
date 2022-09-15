import React from 'react';
import { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import GodFather from "../images/gf.png"
import Gang from "../images/gsgf.png"
import GodFather3 from "../images/ygf.png"
import logo from "../images/logo.png"


class MovieReview extends Component{
    constructor(props) {
        super();
        this.state={movies:[]}
    }
    componentDidMount() {
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=udzTqqx054ss2KEgOacQyAjApilAvn0N")
            .then((data) => {
                data.json()
                    .then((moviesinfo) => {
                        this.setState({ movies: moviesinfo.results })
                        console.log(moviesinfo)
                    }).catch((error) => {
                        console.log(error);
                    })
            })
            
    }
    
    render() {
        return (
            <>
                <Container>
         
                    <div className="users">
                         <img src={logo} alt='God Father' className="logo-img"/>
                        <h1 >Movie Reviews With <br /> "Big" in the title that opened in the U.S. between 1980 and 1990</h1>
                       
                </div>
            <Row className="section">
                        <Col md={3}>
                            <div>
                            
                             {this.state.movies.map((item, index) => {
                              return (
                                  <div key={index} className="card--body">
                                  <img src={GodFather} alt='God Father'/>
                                  <p>Title: {item.display_title}</p>
                                  <p>Headline: {item.headline}</p>
                                  <p>Summary: {item.summary_short}</p>
                                  <p>Critics: {item.critics_pick}</p>
                                      <p>Date: {item.date_updated}</p>
                                 <p>By Line: {item.byline}</p>

                                  </div>
                              )
                                })}
                                </div>
                        </Col>
                        <Col md={3}>
                            <div>
                            
                             {this.state.movies.map((item, index) => {
                              return (
                                  <div key={index} className="card--body">
                                  <img src={Gang} alt='God Father'/>
                                  <p>Title: {item.display_title}</p>
                                  <p>Headline: {item.headline}</p>
                                  <p>Summary: {item.summary_short}</p>
                                  <p>Critics: {item.critics_pick}</p>
                                  <p>Date: {item.date_updated}</p>
                                  <p>By Line: {item.byline}</p>
      
                                  </div>
                              )
                                })}
                                </div>
                        </Col>
                        <Col md={3}>
                            <div>
                            
                             {this.state.movies.map((item, index) => {
                              return (
                                  <div key={index} className="card--body">
                                  <img src={GodFather3} alt='God Father'/>
                                  <p>Title: {item.display_title}</p>
                                  <p>Headline: {item.headline}</p>
                                  <p>Summary: {item.summary_short}</p>
                                  <p>Critics: {item.critics_pick}</p>
                                  <p>Date: {item.date_updated}</p>
                                  <p>By Line: {item.byline}</p>
                                  </div>
                              )
                                })}
                                </div>
                        </Col>
                        <Col md={3}>
                            <div>
                            
                             {this.state.movies.map((item, index) => {
                              return (
                                  <div key={index} className="card--body">
                                  <img src={GodFather3} alt='God Father'/>
                                  <p>Title: {item.display_title}</p>
                                  <p>Headline: {item.headline}</p>
                                  <p>Summary: {item.summary_short}</p>
                                  <p>Critics: {item.critics_pick}</p>
                                  <p>Date: {item.date_updated}</p>
                                  <p>By Line: {item.byline}</p>
                                  </div>
                              )
                                })}
                                </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
   

export default MovieReview;
