function ForecastBox(props) {
    let styleObject = {
        background: props.color,
        margin: "5px",
        borderRadius: props.borderradius,
    };

    return <div className="forecastBox" style={styleObject}>{props.children}</div>;
}

export default ForecastBox;

