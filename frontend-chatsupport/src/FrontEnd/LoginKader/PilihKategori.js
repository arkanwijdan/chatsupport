import React from 'react'
import Textfield from '../Components/Textfield'
import './PilihKategori.css'
import image1 from '../Image/dppapp-white.png'
import image2 from '../Image/LOGO_PKK_ONLY-300x295.png'
// import image3 from './Image/Carik logo.png'
import {CarikLogo} from '../Image/index'
import { useHistory } from 'react-router'



const PilihKategori = () => { 
    let history = useHistory()
    const Pilih = () => {
        history.push("/chatkader")
    }
    return (
        <div className="form-content-back">
            <div className="form-content-left">
                <form className="form">
                    <div className="headers" style={{marginBottom:"-30px", marginTop:"-55px"}}>
                        <h3 style={{fontSize:"25px", textAlign:"center"}}><b>Pilih Kategori Layanan</b></h3>
                    </div>
                    <div className="form-input-label">
                        <form class="form">
                            <div class="inputGroup">
                                <input id="radio1" name="radio" type="radio" style={{marginLeft:"10px"}}/>
                                <label for="radio1" style={{marginLeft:"20px", fontWeight:600}} >Keluarga</label>
                            </div>
                            <div class="inputGroup">
                                <input id="radio2" name="radio" type="radio" style={{marginLeft:"10px"}}/>
                                <label for="radio2" style={{marginLeft:"20px", fontWeight:600}}>KRT</label>
                            </div>
                            <div class="inputGroup">
                                <input id="radio3" name="radio" type="radio" style={{marginLeft:"10px"}}/>
                                <label for="radio3" style={{marginLeft:"20px", fontWeight:600}}>Individu</label>
                            </div>
                            <div class="inputGroup">
                                <input id="radio4" name="radio" type="radio" style={{marginLeft:"10px"}}/>
                                <label for="radio4" style={{marginLeft:"20px", fontWeight:600}}>Bangunan</label>
                            </div>
                            <div class="inputGroup">
                                <input id="radio5" name="radio" type="radio" style={{marginLeft:"10px"}}/>
                                <label for="radio5" style={{marginLeft:"20px", fontWeight:600}}>Kelompok</label>
                            </div>
                            <div class="inputGroup">
                                <input id="radio6" name="radio" type="radio" style={{marginLeft:"10px"}}/>
                                <label for="radio6" style={{marginLeft:"20px", fontWeight:600}}>Lain-lain</label>
                            </div>
                        </form>
                    </div>
                    <button className="form-input-btn" type="button" onClick={()=>Pilih()}>Selanjutnya</button>
                </form>
            </div>
        <div className="image-content-right">
        </div>
        <div className="image-content-right">
            <img className="logo-dppapp" src={image1}></img>
            <img className="logo-pkk" src={image2}></img>
            <img className="logo-carik" src={CarikLogo}></img>
            <p className="p-awal">Bantuan Layanan Kader</p>
        </div>
    </div>
    )
}

export default PilihKategori
