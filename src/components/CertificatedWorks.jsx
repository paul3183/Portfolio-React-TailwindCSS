import React from 'react'
import azteca from '../assets/certificatesFree/AZTECA.webp'
import mibanco from '../assets/certificatesFree/MIBANCO.webp'
import wong from '../assets/certificatesFree/WONG.webp'
import srosa from '../assets/certificatesFree/SANTA-ROSA.webp'

const CertificatedWorks = () => {
  return (
    <div>
      <h2>Labor Certificates</h2>
      <img src={azteca} alt="azteca certificate" />
      <img src={mibanco} alt="mibanco" />
      <img src={wong} alt="wong" />
      <img src={srosa} alt="srosa" />
    </div>
  )
}

export default CertificatedWorks