import '../Styles/SideBar.css';
import { HomeOutlined } from '@mui/icons-material';
import { WatchOutlined } from '@mui/icons-material';
import { DiamondOutlined } from '@mui/icons-material';
import { BsSunglasses } from 'react-icons/bs';
import { ShoppingBagOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
export default function SideBar(){
    return(
        <>
        <div className="all">
        <div className="sidebar">
            <ul>
                
                <div className='Menulist'>
                    <li>
                        <NavLink to="">
                        <div className="icon"><HomeOutlined/></div>
                        <div className="text">Home</div>
                        </NavLink >
                    </li>
                    <li>
                        <NavLink to="/Watches">
                        <div className="icon"><WatchOutlined/></div>
                        <div className="text">Watches</div>
                        </NavLink >
                    </li>
                    <li>
                        <NavLink to="/Jewelry">
                        <div className="icon"><DiamondOutlined/></div>
                        <div className="text">Jewelry</div>
                        </NavLink >
                    </li>
                    <li>
                        <NavLink to="Sunglasses">
                        <div className="icon"><BsSunglasses/></div>
                        <div className="text">Sunglasses</div>
                        </NavLink >
                    </li>
                    <li>
                        <NavLink to="/Order">
                        <div className="icon"><ShoppingBagOutlined/></div>
                        <div className="text">Order</div>
                        </NavLink >
                    </li>
                </div>
            </ul>
        </div>
        </div>
        </>
    );
}