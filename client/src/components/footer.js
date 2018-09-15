import React from 'react';
import logo from '../assests/olx-logo.png';
import '../static/css/app.css';
import {Link} from 'react-router-dom';
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id="footer">

                <div id="footer-detail">
                    <img src={logo} alt="Logo" id="flogo" style={{maxWidth:'60px', maxHeight:'60px'}} />
                    <div id="fterm">
                        <ul>
                            <Link to="#"><li>Location</li></Link>
                            <Link to="#"><li>Popular</li></Link>
                            <Link to="#"><li>Term & Condiiton</li></Link>
                        </ul>
                    </div>
                    <div id="flink">
                        <ul>
                            <Link to="http://www.facebook.com"><li>Facebook</li></Link>
                            <Link to="http://www.twitter.com"><li>Twitter</li></Link>
                            <Link to="http://www.youtube.com"><li>Youtube</li></Link>
                        </ul>
                    </div>
                </div>


            </div>


        );
    }
}

export default Footer;