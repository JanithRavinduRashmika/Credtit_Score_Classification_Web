import React from "react";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import './InfinityScroll.css'


import BankOfAmerica from '../../assets/bank/BankOfAmerica.png';
import BankOfChina from '../../assets/bank/BankOfChina.png';
import HSBC from '../../assets/bank/HSBC.png';
import JPMorgan from '../../assets/bank/JPMorgan.png';
import BNP from '../../assets/bank/BNP.png';
import Deutsche from '../../assets/bank/Deutsche.png';
import MUFG from '../../assets/bank/MUFG.png';
import RBC from '../../assets/bank/RBC.png';

const InfinityScroll = () => {
    const banks = [
        BankOfAmerica,
        BankOfChina,
        HSBC,
        JPMorgan,
        BNP,
        Deutsche,
        MUFG,
        RBC
        
      ];
      

  return (
    <React.Fragment>
        <h3 className="infScrollTitle">Preferred by users of leading financial institutions</h3>
        <div className="infScrollcontainor">
            <Marquee fade={true}>
                {banks.map((bank) => (
                    <div className='imgGroup'>
                        <img className='img' src={bank} alt="banksImg" />
                    </div>
                    ))}
            </Marquee>
    </div>
    </React.Fragment>
    
  )
}

export default InfinityScroll