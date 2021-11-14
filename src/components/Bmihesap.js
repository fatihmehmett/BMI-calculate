import React,{ useContext } from 'react';
import { Link } from "react-router-dom";
import { HesapContext } from '../context/Anacontext';
import '../Appsass.scss';



function Bmihesap () {

    const {setInputboy,setInputkilo,Inputboy,Inputkilo} = useContext(HesapContext);

    return (
        <div className="Content">
            <span className="Content__text">Vücut Kitle Endeksi <br /> Hesaplama</span>
            <input className="Content__input" type="text" placeholder="Boy Giriniz (metre)" onChange={(e)=> setInputboy(e.target.value)}/>
            <input className="Content__input" type="text" placeholder="Kilo Giriniz (kilogram)"onChange={(e)=> setInputkilo(e.target.value)}/>

            
            {Inputboy && Inputkilo ? <Link to="/diyet" className="Content__hesapla">Hesapla</Link> : <Link to="/" className="Content__hesapla">Hesapla</Link>}
            
            
        </div>
        
    )
    
}

export default Bmihesap;