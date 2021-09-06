import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';

import GamesPage from './gamesPage';
import AboutPage from './aboutPage';
import ContactPage from './contactPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class Navigation extends React.Component
{
    pages = [<GamesPage />, <AboutPage />, <ContactPage />]
    buttonLabels = ["Games", "About", "Contact"]

    constructor(props)
    {
        super(props);
        this.state = { currentPage: 0 };
    }

    handleTabButton(newPage)
    {
        this.setState({ currentPage: newPage });
    }

    render()
    {
        const tabButtons = this.buttonLabels.map((label, index) =>
        {
            let style = index === this.buttonLabels.length - 1 ? null :
                { style: { marginRight: "10px" } };
            let variant = this.state.currentPage === index ? "primary" : "secondary";
            return (
                <Button
                    variant={variant}
                    onClick={() => { this.handleTabButton(index) }}
                    {...style}
                >
                    {label}
                </Button>);
        });

        return (
            <>
                <div className="foreground" style={{ textAlign: "center" }}>
                    <h1>Zecheng Hu Portfolio</h1>
                    {tabButtons}
                </div>
                {this.pages[this.state.currentPage]}
            </>);
    }
}

ReactDOM.render(<Navigation />, document.getElementById('root'));