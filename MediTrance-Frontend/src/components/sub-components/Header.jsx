import './substyles/Header.css';

function Header()
{ 
    const toreg=()=>{
          window.location.href='/Registration'
    }
    const toguest=()=>{
        window.location.href='/Guest'
    }
    
return(
        <div className="home-header">
            
                    <p id="home-head-medit">MediTrance</p>
                    <div className="nav-div">
                        <li onClick={toguest} className="nav-div-li">Basic Features</li>
                        <span>{`\t`}</span>
                            <li onClick={toreg} className="nav-div-li" id="nav-div-adv">Advanced Features</li>
                    </div>
            
        </div>
    )
}
export default Header;