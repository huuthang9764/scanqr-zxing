import React, { useState } from 'react'
import Swal from 'sweetalert2';

const CodeInput = ({ setAllowAccess }) => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (code === '2603') {
      setAllowAccess(true);
    } else if (code === '') {
      Swal.fire({
        title: "Lỗi",
        text: "Chưa nhập code kìa!",
        icon: "error"
      });
    } else {
      Swal.fire({
        title: "Lỗi",
        text: "Sai Code rồi!",
        icon: "error"
      });
    }
  };
  return (
    <div className="content-section">
      <h1 className="text-center my-5"><strong>Đố biết code nhập để mà điểm danh</strong></h1>
      <form onSubmit={handleSubmit} className="facebook-post-style">
        <div className="input-container ">
          <label htmlFor="codeInput">Nhập mã:</label>
          <input
            type="text"
            id="codeInput"
            value={code}
            onChange={handleChange}
            className="form-control"
          />
          <button type="submit" className="btn btn-primary w-100 mt-3">Vào Điểm Danh</button>
        </div>
      </form>
    </div>
  )
}

export default CodeInput