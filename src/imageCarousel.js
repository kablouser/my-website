import Carousel from 'react-bootstrap/Carousel';

export default function ImageCarousel(props)
{
    const isDark = props.isDark;
    const images = props.images;

    const isImagesDefined = typeof images !== "undefined";

    const variantProperty = isDark ? { variant: "dark" } : null;

    let styleProperty = { borderStyle: "ridge" };
    if (isDark)
        Object.assign(styleProperty, { borderColor: "black" });
    styleProperty = { style: styleProperty };

    const carouselImages = isImagesDefined ? images.map((src) =>
    {
        return (
            <Carousel.Item>
                <img
                    className="full-fit-image"
                    src={src}
                    alt="Screenshot of Game"
                />
            </Carousel.Item>
        );
    })
        : null;

    return (
        <div {...styleProperty}>
            <Carousel {...variantProperty} interval={null} >{carouselImages}</Carousel>
        </div>);
}