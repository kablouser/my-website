import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Page1 extends React.Component
{
    render()
    {
        return (<h1>This is Page1.</h1>);
    }
}

class Page2 extends React.Component
{
    render()
    {
        return (
            <div>
                <h1>This is Page2.</h1>
                <div className="video-responsive">

                    <iframe
                        width="853"
                        height="480"
                        src={"https://www.youtube.com/embed/1bWXRDvfrs4"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrpyted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
            </div>);
    }
}

class Page3 extends React.Component
{
    render()
    {
        return (
            <div>
                <h1>This is Page3.</h1>
                <SlideShow
                    slides={[
                        <p>{"slide content"}</p>,
                        <p>{"slide content"}</p>,
                        <p>{"slide content"}</p>,
                        <div style={{ backgroundColor: "#2288FE", width: "100%", height: "100%", borderRadius: 50 }} />,
                        <div style={{ backgroundColor: "#2288FE", width: "100%", height: "100%", borderRadius: 50 }} />,
                        <div style={{ backgroundColor: "#2288FE", width: "100%", height: "100%", borderRadius: 50 }} />]}
                    delay={5000} />
            </div>
        );
    }
}

class Navigation extends React.Component
{
    pages = [<Page1 />, <Page2 />, <Page3 />]
    buttonLabels = ["Page1", "Page2", "Page3"]

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
            return (
                <li>
                    <button
                        onClick={() => { this.handleTabButton(index) }}>
                        {label}
                    </button>
                </li>);
        });

        return (
            <div>
                <ul>{tabButtons}</ul>
                {this.pages[this.state.currentPage]}
            </div>);
    }
}

function SlideShow(props)
{
    const slides = props.slides; // array of elements
    const delay = props.delay;  // number (can be undefined)
    const [slideIndex, setSlideIndex] = React.useState(0);

    const timeoutRef = React.useRef(null);

    function clearTimeoutRef()
    {
        if (timeoutRef.current)
        {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() =>
    {
        if (typeof delay != "undefined")
        {
            clearTimeoutRef();
            timeoutRef.current = setTimeout(
                () =>
                    setSlideIndex((previousIndex) =>
                        previousIndex === slides.length - 1 ? 0 : previousIndex + 1),
                delay
            );
            return () =>
            {
                clearTimeoutRef();
            };
        }
    }, [slideIndex, delay, slides.length]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate(${-slideIndex * 100}%, 0)` }}
            >
                {slides.map((slide, mapIndex) => (
                    <div
                        className="slide"
                        key={mapIndex}
                        style={{ backgroundColor: "#808080" }}>
                        {slide}
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {slides.map((_, mapIndex) => (
                    <div
                        key={mapIndex}
                        className={mapIndex === slideIndex ? "slideshowDot active" : "slideshowDot"}
                        onClick={() =>
                        {
                            setSlideIndex(mapIndex);
                        }}>
                    </div>
                ))}
            </div>
        </div>
    );
}

ReactDOM.render(<Navigation />, document.getElementById('root'));