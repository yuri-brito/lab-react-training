import './BoxColor.css'
function BoxColor(props){
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
    let hex=rgbToHex(props.r, props.g, props.b)
    let back=`rgb(${props.r},${props.g},${props.b})`
    let colorText=''
    if ((props.r+props.g+props.b)<=255){
        colorText='white'
    }else{
        colorText='black'
    }
    return(
        <div className='boxColor' style={{backgroundColor:back,color:colorText}}>
            {back}<br></br>
            {hex}
        </div>
    )
}
export default BoxColor;