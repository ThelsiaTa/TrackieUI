import React, { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader, NotFoundException, BarcodeFormat } from '@zxing/library';
import { useRouter } from 'next/router';

const QRScanner = () => {
  const videoRef = useRef(null);
  const [scanning, setScanning] = useState(true);
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    // Add support for Duitnow and Nets QR codes
    const decodeHints = new Map();
    decodeHints.set(BarcodeFormat.QR_CODE, [BarcodeFormat.QR_CODE]); // Generic QR Code
    decodeHints.set(BarcodeFormat.CODE_128, [BarcodeFormat.CODE_128]); // Duitnow
    decodeHints.set(BarcodeFormat.EAN_13, [BarcodeFormat.EAN_13]); // Nets

    // Specify facingMode to use the back camera
    const constraints = { video: { facingMode: 'environment' } };

    codeReader.decodeFromConstraints(constraints, videoRef.current, (result, error) => {
      if (result) {
        setScanning(false);
        setMessage(`QR Code detected: ${result.getText()}`);
        router.push('/confirmpayment');
        // Handle the result as needed (e.g., send to server, navigate, etc.)
      } else {
        if (!(error instanceof NotFoundException)) {
          console.error(error);
        }
        setMessage('Scanning...');
      }
    }, decodeHints);

    return () => {
      codeReader.reset();
    };
  }, []);

  return (
    <div>
      <div className="relative">
        {scanning && <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50" />}
        <video ref={videoRef} style={{ width: '100%', height: '100%', borderRadius: '12px' }} />
      </div>
      <div className="mt-4 text-white text-center">
        {scanning ? <p>{message}</p> : <p className="bg-cyan-400 p-2 rounded">{message}</p>}
      </div>
    </div>
  );
};

export default QRScanner;
