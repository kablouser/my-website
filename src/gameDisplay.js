import ImageCarousel from "./imageCarousel";

function GameDisplay(props)
{
    const backgroundImage = props.backgroundImage;
    const backgroundColor = props.backgroundColor;
    const isDark = props.isDark;
    const foregroundColor = props.foregroundColor;
    const titleImage = props.titleImage;
    const title = props.title;
    const URL = props.URL;
    const subtitle = props.subtitle;
    const carouselIsDark = props.carouselIsDark;
    const youtubeVideo = props.youtubeVideo;
    const carouselImages = props.carouselImages;
    const tags = props.tags;
    const body = props.body;
    const badges = props.badges;

    const isBackgroundImageDefined = typeof backgroundImage !== "undefined";
    const isBackgroundColorDefined = typeof backgroundColor !== "undefined";
    const isForegroundColorDefined = typeof foregroundColor !== "undefined";
    const isTitleImageDefined = typeof titleImage !== "undefined";
    const isURLDefined = typeof URL !== "undefined";
    const isYoutubeVideoDefined = typeof youtubeVideo !== "undefined";
    const isBadgesDefined = typeof badges !== "undefined";

    let backgroundStyle;
    if (isBackgroundImageDefined)
        backgroundStyle = { style: { backgroundImage: `url("${backgroundImage}")` } };
    else if (isBackgroundColorDefined)
        backgroundStyle = { style: { backgroundColor: backgroundColor } };
    else
        backgroundStyle = null;

    let foregroundStyle;
    if (isDark)
        foregroundStyle = { color: "white" };
    else
        foregroundStyle = {};
    if (isForegroundColorDefined)
        Object.assign(foregroundStyle, { backgroundColor: foregroundColor });
    foregroundStyle = { style: foregroundStyle };

    let titleElement;
    if (isTitleImageDefined)
    {
        if (isURLDefined)
            titleElement = <a href={URL}><img src={titleImage} alt="Game Title" /></a>;
        else
            titleElement = <img src={titleImage} alt="Game Title" />;
    }
    else
    {
        if (isURLDefined)
            titleElement = <h1><a href={URL}>{title}</a></h1>;
        else
            titleElement = <h1>{title}</h1>;
    }

    const youtubeVideoElement = isYoutubeVideoDefined ?
        <div className="video-responsive">
            <iframe
                src={`https://www.youtube.com/embed/${youtubeVideo}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrpyted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube"
            />
        </div> : null;

    const bodyParagraphs = body.split('\n').map((paragraph) =>
    {
        return <p>{paragraph}</p>;
    });

    const badgeElements = isBadgesDefined ? badges.map((badge) =>
    {
        return <img src={badge} style={{ objectFit: "contain" }} alt="badge" />
    }) : null;

    return (
        <div
            className="game-display-background"
            {...backgroundStyle}
        >
            <div
                className="game-display-foreground"
                style={{ color: "red" }}
                {...foregroundStyle}
            >
                <div style={{ textAlign: "center" }}>
                    {titleElement}
                    {
                        subtitle &&
                        <em>{subtitle}</em>
                    }
                    {youtubeVideoElement}
                    {
                        carouselImages &&
                        <ImageCarousel isDark={carouselIsDark} images={carouselImages} />
                    }
                    <em>{tags}</em>
                </div>
                <div style={{ margin: "10px" }}>
                    {bodyParagraphs}
                    {
                        badgeElements != null &&
                        <div style={{ height: "100px" }}>
                            {badgeElements}
                        </div>
                    }
                </div>
            </div>
        </div>);
}

export default GameDisplay;