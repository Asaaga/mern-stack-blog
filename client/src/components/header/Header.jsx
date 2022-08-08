import './header.css';
 
const Header = () => {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img 
         className="headerImg"
         src="https://media.istockphoto.com/photos/technology-in-the-field-digital-tablet-picture-id1364083209?k=20&m=1364083209&s=612x612&w=0&h=QQNe_olIV282E2m68ip-7796-EH4tZNzhKZDm76Mlac=" 
         alt="" 
         />
    </div>
  )
}

export  default Header;