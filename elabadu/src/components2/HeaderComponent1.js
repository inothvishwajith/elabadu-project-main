import React, { Component } from 'react'

class HeaderComponent1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://javaguides.net" className="navbar-brand">Product Management System</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent1
