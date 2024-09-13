import React, { useState, useEffect } from 'react';
import { useZxing } from 'react-zxing';
import axios from 'axios';
import Swal from 'sweetalert2';

const ReactZxing = ({ onBack }) => {
  const [result, setResult] = useState("");
  const [paused, setPaused] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
    paused
  });

  const toggleCamera = () => {
    setPaused(!paused);
  };

  useEffect(() => {
    if (result && !isProcessing) {
      setIsProcessing(true);
      const mssv = result.substring(0, 10);
      axios.post('https://it.nguyenhuuthang.name.vn/api/data', { mssv: mssv })
        .then(response => {
          Swal.fire({
            title: "Success",
            text: response.data.message, // Assuming the message is in response.data
            icon: "success"
          }).then(() => {
            setResult("");
            setIsProcessing(false);
          });
        })
        .catch(error => {
          Swal.fire({
            title: "Error",
            text: "An error occurred",
            icon: "error"
          }).then(() => {
            setResult("");
            setIsProcessing(false);
          });
          console.error('Error sending data:', error);
        });
    }
  }, [result]);
  return (
    <>
      <h1 className="text-center my-5">SCAN-QR</h1>
      
      <div className="d-flex justify-content-center">
        <div className="camera-container">
          <div className="video-container">
            <video ref={ref} className="camera-video"></video>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <button className="btn btn-primary btn-lg w-100" onClick={toggleCamera}>
                {paused ? 'Start' : 'Stop'}
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-danger btn-lg w-100" onClick={onBack}>Back</button>
            </div>
          </div>
        </div>
      </div>
      <div className="result-container mt-4">
        <h4>Result:</h4>
        <p id="result-text">{result}</p>
        
      </div>
    </>
  )
}

export default ReactZxing
