import React, { Component } from 'react'

class FooterComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="container ">
                <footer className="footer text-center">
                    <span className="text-muted " >All Rights Reserved 2020 @Wenodev</span>
                </footer>
            </div>
        )
    }


}

export default FooterComponent