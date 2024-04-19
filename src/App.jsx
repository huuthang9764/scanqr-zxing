import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactZxing from './ReactZxing'
import Swal from 'sweetalert2'

function App() {
  // State để lưu trữ giá trị của input và cho phép truy cập ReactZxing hay không
  const [code, setCode] = useState('');
  const [allowAccess, setAllowAccess] = useState(false);

  // Hàm xử lý sự kiện khi người dùng thay đổi giá trị của input
  const handleChange = (event) => {
    setCode(event.target.value);
  };

  // Hàm xử lý sự kiện khi người dùng gửi form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Kiểm tra giá trị của input
    if (code === '2603') {
      setAllowAccess(true); // Nếu giá trị là '1234', cho phép truy cập
    } else {
      Swal.fire({
        title: "Lỗi",
        text: "Sai Code rồi!",
        icon: "error"
      });
    }
    if (code === '') {
      Swal.fire({
        title: "Lỗi",
        text: "Chưa nhập code kìa!",
        icon: "error"
      });
    }
  };

  return (
    <>
    {allowAccess ? (
        <ReactZxing />
      ) : (
        <div>
          <h2>Đố biết code nhập để mà điểm danh</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="codeInput">Nhập mã:</label><br/>
            <input
              type="text"
              id="codeInput"
              name="codeInput"
              value={code}
              onChange={handleChange}
            /><br/><br/>
            <input type="submit" value="Vào Điểm DAnh" />
          </form>
        </div>
      )}

    </>
  )
}

export default App
