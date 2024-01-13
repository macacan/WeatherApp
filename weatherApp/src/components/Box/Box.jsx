function ResultBox(props) {
    let styleObject = {
        background: props.color,
        margin: "5px",
        borderRadius: props.borderradius,
    };

    return <div className="resultBox" style={styleObject}>{props.children}</div>;
}

export default ResultBox;