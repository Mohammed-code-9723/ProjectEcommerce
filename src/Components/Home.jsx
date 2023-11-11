import '../Styles/Home.css';
//
import { useEffect, useState } from 'react';
import watch from '../sunglasses annonce.webp';
import sunglasses from '../watches annonce.webp';
import jewel from '../nickless.webp';
import {AiFillCaretLeft} from 'react-icons/ai';
import {AiFillCaretRight} from 'react-icons/ai';
//
import {FaBasketShopping} from 'react-icons/fa6';
//categories images: 
import w from '../Backgrounds/w.webp';
import s from '../Backgrounds/MensSuns.jpg';
import nick from '../Backgrounds/nick.webp';
//Alert:
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
//Social Media :
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import v from '../Backgrounds/v.mp4';
import { NavLink } from 'react-router-dom';
import { LoginRounded } from '@mui/icons-material';
import { ManageAccountsRounded } from '@mui/icons-material';
export default function Home() {
  const carouselData = [
    {
      image: watch,
      title: 'Slide 1',
    },
    {
      image: sunglasses,
      title: 'Slide 2',
    },
    {
      image: jewel,
      title: 'Slide 3',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000);

    return () => {
      clearInterval(interval); // Clear the interval on unmount
    };
  }, [carouselData.length]);

  return (
    <>
      <div className="cont">
        <Alert  style={{marginLeft:'-25px',background:'rgb(4, 4, 4)',color:'rgb(5, 198, 195)'}}>
          <AlertTitle>Free shipping over 1000$</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
          <NavLink className="log1" to="CreateAcc"><ManageAccountsRounded/> Create account</NavLink>
          <NavLink className="log2" to="SignIn"><LoginRounded/> Log In</NavLink>
        </Alert>
        <div className="annonce">
          <div id='title'>
            <h1>Discover new products every day</h1>
            <p>
              Discover the epitome of timeless elegance at our online boutique for exquisite watches, stylish sunglasses, and captivating jewelry. Elevate your style quotient with our meticulously curated collection, where precision meets fashion. Explore a world of craftsmanship, sophistication, and allure, where each piece is a statement of individuality. From classic timepieces to trendy sunglasses and dazzling jewelry, our e-commerce store offers a treasure trove of choices to suit every taste and occasion. Shop now and adorn yourself with the perfect accessory that reflects your unique personality and complements your distinctive style.
            </p>
            <button>SHOP NOW <FaBasketShopping/> </button>
          </div>
          <div className="swip">
            <button id='previous' onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length)}><AiFillCaretLeft/></button>
            <div id="pics">
              {carouselData.map((item, index) => (
                <img
                  id='images'
                  key={index}
                  src={item.image}
                  alt={item.title}
                  style={{ display: index === currentIndex ? 'block' : 'none'}}
                />
              ))}
            </div>
            <button id='next' onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length)}><AiFillCaretRight/></button>
          </div>
        </div>
      </div>
      <div className="items">
      <div className="st">
          <video src={v} autoPlay loop muted/>
      </div>
        <h1>Shop By Categories</h1>
        <div className="watches">
          <div className="pic">
            <img src={w} alt="w" id='pic1'/>
            <p>
              <span>MENS WATCHES</span>
              <button>SHOP NOW</button>
            </p>
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum repellat quam cumque dignissimos ipsam accusamus cupiditate, numquam fuga quidem culpa quod eveniet consequuntur obcaecati accusantium asperiores praesentium iste eos veniam.
          </div>
        </div>
        <div className="jewelry">
        <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum repellat quam cumque dignissimos ipsam accusamus cupiditate, numquam fuga quidem culpa quod eveniet consequuntur obcaecati accusantium asperiores praesentium iste eos veniam.
          </div>
          <div className="pic">
            <img src={nick} alt="j" id='pic2'/>
            <p>
              <span>MENS JEWELRY</span>
              <button>SHOP NOW</button>
            </p>
          </div>
        </div>
        <div className="sunglasses">
          <div className="pic">
            <img src={s} alt="s" id='pic3'/>
            <p>
              <span>MENS SUNGLASSES</span>
              <button>SHOP NOW</button>
            </p>
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum repellat quam cumque dignissimos ipsam accusamus cupiditate, numquam fuga quidem culpa quod eveniet consequuntur obcaecati accusantium asperiores praesentium iste eos veniam.
          </div>
        </div>
        <div className="footer">
            <div className='contact'>
                <h2>Dhimni's Shop</h2>
                <p>
                  123 Wjah Aross, Meknes, <br />Morocco 15100
                </p>
                <p>
                  <input type="email" id="em" placeholder='Email us'/>
                  <button>Send</button>
                </p>
                <p>
                  CALL US:
                  0642186606
                </p>
            </div>
            <div className="links">
              <div className="l1">
                <h2>QUICK LINKS</h2>
                <a href="/">About US</a>
                <a href="/">Contact</a>
                <a href="/">Shipping</a>
                <a href="/">Returns</a>
              </div>
              <div className="l2">
                <h2>SHOP</h2>
                <a href="/">New Arrivals</a>
                <a href="/">Best Sellers</a>
                <a href="/">Collection</a>
              </div>
              <div className="l3">
                <h2>FOLLOW US</h2>
                <AiOutlineFacebook size={40}/>
                <AiOutlineInstagram size={40}/>
                <AiOutlineYoutube size={40}/>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
