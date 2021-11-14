import React,{useContext} from 'react'
import { HesapContext } from '../context/Anacontext';
import '../Appsass.scss';


const Bmidiyet = () => {

    const {Hesapla,Inputboy,Inputkilo,diyetlistesi} = useContext(HesapContext);
    const sonuc =Hesapla(Inputboy,Inputkilo).toFixed(2);
    return (
        <div className="diyet">
            
            <span className="diyet__sonuc">Vücut Kitle Endeksiniz : {sonuc}</span>
            <div className="diyet__liste">
                {sonuc <= 18.49 ? (
                    <>
                        <p>İdeal Kilonun Altındasın</p>
                        <div>
                            <div className="diyet__liste--baslik">DİYET LİSTESİ</div>
                            
                            <div className="diyet__liste--ögün">
                                Sabah:
                                {diyetlistesi[0].sabah}
                            </div>
                            
                            <div className="diyet__liste--ögün">
                                Öğle:
                                {diyetlistesi[0].öğle}
                            </div>
                            
                            <div className="diyet__liste--ögün">
                                Akşam:
                                {diyetlistesi[0].akşam}
                            </div>
                        
                        </div>
                    </>
                    )  
                :null}
                {sonuc >= 18.50 && sonuc <= 24.99 ?  (
                    <>
                        <p>İdeal Kilodasın</p>
                        <div>
                        <div className="diyet__liste--baslik">DİYET LİSTESİ</div>
                            
                            <div className="diyet__liste--ögün">
                                Sabah:
                                {diyetlistesi[1].sabah}
                            </div>
                            
                            <div className="diyet__liste--ögün">
                                Öğle:
                                {diyetlistesi[1].öğle}
                            </div>
                            
                            <div className="diyet__liste--ögün">
                                Akşam:
                                {diyetlistesi[1].akşam}
                            </div>
                        </div>
                    </>
                    ):null}
                {sonuc >= 25 && sonuc <= 29.99 ?  (
                    <>
                        <p>İdeal Kilonun Üzerindesin</p>
                        <div>
                        <div className="diyet__liste--baslik">DİYET LİSTESİ</div>
                            
                            <div className="diyet__liste--ögün">
                                Sabah:
                                {diyetlistesi[2].sabah}
                            </div>
                            
                            <div className="diyet__liste--ögün">
                                Öğle:
                                {diyetlistesi[2].öğle}
                            </div>
                            
                            <div className="diyet__liste--ögün">
                                Akşam:
                                {diyetlistesi[2].akşam}
                            </div>
                        </div>
                    </>
                    ):null}
                {sonuc >= 30 ?  (
                    <>
                        <p>İdeal Kilonun Çok Üzerindesin</p>
                        <div>
                        <div className="diyet__liste--baslik">DİYET LİSTESİ</div>
                            
                            <div className="diyet__liste--ögün">
                                Sabah:
                                {diyetlistesi[2].sabah}
                            </div>
                            
                            <div className="diyet__liste--ögün">
                                Öğle:
                                {diyetlistesi[2].öğle}
                            </div>
                            
                            <div className="diyet__liste--ögün">
                                Akşam:
                                {diyetlistesi[2].akşam}
                            </div>
                        </div>
                    </>
                    ):null}
            </div>
              
        </div>
    )
}

export default Bmidiyet
