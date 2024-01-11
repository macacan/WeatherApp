
const Box = (props) => {


    //inline styling CSS in JS, sker genom att ett styling object skapas
        let styleObject={
            background: props.color,
            margin:"5px",
           
            borderRadius:props.borderradius

        };


        return (<div style={styleObject}>{props.children}</div>)
    
    }
    
    
    export default Box;

