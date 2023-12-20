import React, { useState, useEffect } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';

const QRScanner = () => {
  const [result, setResult] = useState('');
  const [reader, setReader] = useState(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    setReader(codeReader);

    codeReader.getVideoInputDevices()
      .then((videoInputDevices) => {
        if (videoInputDevices.length > 0) {
          codeReader.decodeFromVideoDevice(videoInputDevices[0].deviceId, 'video', (result, err) => {
            if (result) {
              setResult(result.getText());
            }
            if (err) {
              console.error(err);
            }
          });
        } else {
          console.error('No video input devices found');
        }
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {
      codeReader.reset();
    };
  }, []);

  return (
    <div>
      <video id="video" style={{ width: '100%' }}></video>
      <p>{result}</p>
    </div>
  );
};

export default QRScanner;