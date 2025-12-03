import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function ScanPage() {
  useEffect(() => {
    const onScanSuccess = (decodedText: string, decodedResult: any) => {
      alert(`Scan successful: ${decodedText}`);
      // You can handle the scanned result here
    };
    const onScanFailure = (error: any) => {
      // Optionally handle scan errors
    };
    const html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: 250 },
      false
    );
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    return () => {
      html5QrcodeScanner.clear();
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 text-siue-red">Staff Equipment Scanner</h1>
      <div id="reader" className="w-full max-w-md" />
    </main>
  );
}
