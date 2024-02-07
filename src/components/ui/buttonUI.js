import './buttonUI.scss'

const ButtonUi = ({text, linkURL}) => {
    return ( <a href={linkURL}><button>{text}</button></a> );
}
 
export default ButtonUi;