import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useMediaDevices } from "react-media-devices";
import { useZxing } from 'react-zxing';
import Swal from 'sweetalert2';

const ReactZxing = () => {
  const { devices } = useMediaDevices();

  console.log(devices);
  const [result, setResult] = useState("");
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [paused, setPaused] = useState(true);
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
    paused
  });

  const handleSelectDevice = (id) => {
    setSelectedDevice(id);
  };

  const toggleCamera = () => {
    setPaused(!paused);
  };

  useEffect(() => {
    if (result) {
      // Gửi dữ liệu lên URL http://localhost:3000/api/data với mssv là result
      axios.post('https://it.nguyenhuuthang.name.vn/api/data', { mssv: result })
        .then(response => {
          Swal.fire({
            title: "success",
            text: response.message,
            icon: "success"
          });
          // setPaused(!paused);
          console.log('Data sent successfully:', response.data);
        })
        .catch(error => {
          Swal.fire({
            title: "erro",
            text: "erro",
            icon: "error"
          });
          console.error('Error sending data:', error);
        });
    }
  }, [result]);

  return (
    <>
      {/* <select onChange={(e) => handleSelectDevice(e.target.value)} value={selectedDevice || ''} >
        {devices?.map(device => (
          <option key={device.id} value={device.id}>
            {device.label}
          </option>
        ))}
      </select> */}
      <div className='video-container'>
        <video ref={ref} />
      </div>
      <button onClick={toggleCamera}>
        {paused ? 'Start Camera' : 'Stop Camera'}
      </button>
      <p>
        <span>Last result1:</span>
        <span>{result}</span>
      </p>
    </>
  )
}

export default ReactZxing


