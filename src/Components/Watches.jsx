import '../Styles/Watches.css';
import W1 from '../Watches/AIRHAWK CLOUDBREAK.jpg';
import W2 from '../Watches/AIRHAWK MAPLE FORST.jpg';
import W3 from '../Watches/AIRHAWK SKYLINE SILVER.jpg';
import W4 from '../Watches/B2 GALAXY GREY.jpg';
import W5 from '../Watches/B2 STARLIGHT SILVER.jpg';
import W6 from '../Watches/BLACKTOP 2 CALI PRIX.jpg';
import W7 from '../Watches/C ALL GUNMETAL.jpg';
import W8 from '../Watches/C CLOUDBREAK.jpg';
import W9 from '../Watches/C GUNMETL SANDSTONE.jpg';
import W10 from '../Watches/C INK BLACK.jpg';
import W11 from '../Watches/C WHITE CARAMEL.jpg';
import W12 from '../Watches/CC FOG GREY.jpg';
import W13 from '../Watches/CC GLOSS WHITE.jpg';
import W14 from '../Watches/CC MIDNIGHT BLUE.jpg';
import W15 from '../Watches/CHRONO CERAMIC GLOSS BLACK.jpg';
import W16 from '../Watches/CHRONO HONEY SMOKE.jpg';
import W17 from '../Watches/CLASSIC GRIZZLY BROWN.jpg';
import W18 from '../Watches/CLASSIC JET BLACK STEEL.jpg';
import W19 from '../Watches/CLASSIC LION GOLD.jpg';
import W20 from '../Watches/EC GLOSS BLACK.jpg';
import W21 from '../Watches/EC GLOSS WHITE.jpg';
import W22 from '../Watches/ELEMENT CERAMIC MIDNIGHT BLUE.jpg';
import W23 from '../Watches/ELEMENT NITRO BLUE.jpg';
import W24 from '../Watches/FIELD NOMAD C.jpg';
import W25 from '../Watches/GRIZZLY BROWN.jpg';
import W26 from '../Watches/HAWK BROWN.jpg';
import W27 from '../Watches/LEGACY SLIM 42 MM BLACK.jpg';
import W28 from '../Watches/LEGACY SLIM 42 MM BROWN.jpg';
import W29 from '../Watches/LEGACY SLIM KION GOLD.jpg';
import W30 from '../Watches/LEGACY SOLAR DRESS BLUE.jpg';
import W31 from '../Watches/LEGACY TRAVELER GRIZZLY BROWN.jpg';
import W32 from '../Watches/LS DRESS BLACK.jpg';
import W33 from '../Watches/LT GRIZLY BROWN.jpg';
import W34 from '../Watches/LT LION GOLD.jpg';
import W35 from '../Watches/LT PANTHER BLACK.jpg';
import W36 from '../Watches/PANTHER BLACK.jpg';
import W37 from '../Watches/R SOLAR GOLD.jpg';
import W38 from '../Watches/RAPTOR HONEY SMOKE.jpg';
import W39 from '../Watches/RISE PELHAM.jpg';
import W40 from '../Watches/VOYAGE ECLIPSE GOLD.jpg';
import W41 from '../Watches/VOYAGE HONEY SMOKE.jpg';
import W42 from '../Watches/b2 CALI PRIX 2.jpg';
//
import shopallmens from '../Backgrounds/Desktop_shopallmens23.jpg';
//
import Rating from '@mui/material/Rating';


export default function Watches(){
    let watchesArray = [W1, W2, W3, W4, W5, W6,W7, W8, W9, W10, W11, W12, W13, W14, W15, W16, W17, W18, W19, W20, W21, W22, W23, W24,W25, W26,W27, W28, W29, W30, W31, W32, W33, W34,W35, W36, W37, W38, W39, W40, W41, W42];
    let watchesNames=["AIRHAWK CLOUDBREAK","AIRHAWK MAPLE FORST","AIRHAWK SKYLINE SILVER","b2 CALI PRIX 2","B2 GALAXY GREY","B2 STARLIGHT SILVER","BLACKTOP 2 CALI PRIX","C ALL GUNMETAL","C CLOUDBREAK","C GUNMETL SANDSTONE","C INK BLACK","C WHITE CARAMEL","CC FOG GREY","CC GLOSS WHITE","CC MIDNIGHT BLUE","CHRONO CERAMIC GLOSS BLACK","CHRONO HONEY SMOKE","CLASSIC GRIZZLY BROWN","CLASSIC JET BLACK STEEL","CLASSIC LION GOLD","EC GLOSS BLACK","EC GLOSS WHITE","ELEMENT CERAMIC MIDNIGHT BLUE","ELEMENT NITRO BLUE","FIELD NOMAD C","GRIZZLY BROWN","HAWK BROWN","LEGACY SLIM 42 MM BLACK","LEGACY SLIM 42 MM BROWN","LEGACY SLIM KION GOLD","LEGACY SOLAR DRESS BLUE","LEGACY TRAVELER GRIZZLY BROWN","LS DRESS BLACK","LT GRIZLY BROWN","LT LION GOLD","LT PANTHER BLACK","PANTHER BLACK","R SOLAR GOLD","RAPTOR HONEY SMOKE","RISE PELHAM","VOYAGE ECLIPSE GOLD","VOYAGE HONEY SMOKE"];
    let watchesPrices=["2000 DH","3000 DH","3800 DH","4500 DH","2000 DH","3000 DH","3800 DH","4500 DH","2000 DH","3000 DH","3800 DH","4500 DH","2000 DH","3000 DH","3800 DH","4500 DH","2000 DH","3000 DH","3800 DH","4500 DH","2000 DH","3000 DH","3800 DH","4500 DH","2000 DH","3000 DH","3800 DH","4500 DH","2000 DH","3000 DH","3800 DH","4500 DH","2000 DH","3000 DH","3800 DH","4500 DH","3800 DH","4500 DH","2000 DH","3000 DH","3800 DH","4500 DH"];
    return(
        <div className='w'>
            <div className='title'>
                <img src={shopallmens} alt="t" />
                <div className='an'>
                    <h1>ALL MENS WATCHES</h1>
                    <p>Classic style meets modern design</p>
                </div>
            </div>
            
            <div className="watch">
                {
                    watchesArray.map((item,index)=>{
                        return(
                            <div className='card'>
                                <img src={item} alt="w" width={250}/>
                                <p className='name_price'>
                                    <h3>{watchesNames[index]}</h3>
                                    <h4>{watchesPrices[index]}</h4>
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </p>
                                <button>ADD TO CARD</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}