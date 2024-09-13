import React from 'react'
import logoSTU from '../../assets/logo-stu.png'
import logoDoan from '../../assets/logo-doan.png'
import logoHoi from '../../assets/logo-hoi.png'
import logoKhoa from '../../assets/logo-khoa.png'

const Footer = () => {
  return (
    <footer>
      <div className="logos">
        <img src={logoSTU} alt="Logo_STU" />
        <img src={logoDoan} alt="Logo_Doan" />
        <img src={logoHoi} alt="Logo_Hoi" />
        <img src={logoKhoa} alt="Logo_Khoa" />
      </div>
      <div className="fw-bold">
        ĐOÀN - HỘI KHOA CÔNG NGHỆ THÔNG TIN
        <br />
        TRƯỜNG ĐẠI HỌC CÔNG NGHỆ SÀI GÒN
      </div>
      <div className="fs-10 mt-3">
        ©Khoa CNTT STU 2024
      </div>
    </footer>
  )
}

export default Footer