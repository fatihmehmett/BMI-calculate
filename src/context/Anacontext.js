import React, { createContext,useState } from 'react'


export const HesapContext = createContext();

const AnaContextProvider = (props) => {

    const [diyetlistesi]= useState([
        {
            id: 'zayıf', 
            sabah: '2 yumurta ile hazırlanmış kaşarlı ve tereyağlı omlet, 1 bardak portakal suyu, 3 dilim ekmek, 3 tatlı kaşığı tercih edilen bir reçel ve maydanoz.', 
            öğle: 'Domatesli tavuk, 1 kase tereyağlı pilav, 1 kase zeytinyağlı havuç.', 
            akşam: '1 kase mercimek çorbası, domates salatası,  orta boy peynirli domatesli pizza.'},
        {
            id: 'normal', 
            sabah: '1 tane simit, 8 tane siyah ve yeşil zeytin, 1 dilim keçi peyniri, küçük bir kase reçel.', 
            öğle: '1 tabak sulu İzmir köfte, 1 tabak domates suyu, 1 tabak spagetti ve limonlu çoban salata.', 
            akşam: ' 1 tabak kıymalı ıspanak, 2 dilim ekmek ve 1 kase yoğurt çorbası.'},
        {
            id: 'şişman', 
            sabah: '1 yumurta ile hazırlanmış kaşarlı omlet, 1 tane simit, limonlu zeytin, 1 tane domates, 2 tatlı kaşığı bal, tereyağı.', 
            öğle: '2 dilim ekmek, 1 porsiyon buğulama balık, çoban salata.', 
            akşam: '1 tabak kıymalı mercimek, 1 adet peynirli pide, 1 bardak limonata, maydanozlu soğanlı ve limonlu salata.'},
        
    ]);


    const [Inputboy,setInputboy] = useState();
    const [Inputkilo,setInputkilo] = useState();


    const Hesapla = (Inputboy,Inputkilo) => {
        return (Inputkilo/(Inputboy*Inputboy));
    }


    return (
        <div>
            <HesapContext.Provider value={{Inputboy,Inputkilo,setInputboy,setInputkilo,Hesapla,diyetlistesi}}>
                {props.children}
            </HesapContext.Provider>
        </div>
    )
}

export default AnaContextProvider
