import { useEffect, useRef } from 'react';
import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';

const QRScanner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    codeReader.listVideoInputDevices()
      .then((videoInputDevices) => {
        if (videoInputDevices.length > 0) {
          const constraints = { video: { deviceId: videoInputDevices[0].deviceId } };
          codeReader.decodeFromConstraints(constraints, videoRef.current, (result, error) => {
            if (result) {
              alert(`QR Code detected: ${result.getText()}`);
            } else {
              if (!(error instanceof NotFoundException)) {
                console.error(error);
              }
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
    <div className="flex justify-center items-center h-screen">
      <video ref={videoRef} style={{ width: '100%', maxWidth: '400px' }} />
    </div>
  );
};

export default QRScanner;