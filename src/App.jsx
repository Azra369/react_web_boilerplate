import Navbar from "./components/navbar.jsx"; // 1. Adım: Navbar'ı çağırıyoruz

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col"> 
      
      {/* 2. ADIM: NAVBAR'I BURAYA KOYUYORUZ */}
      <Navbar />

      {/* Sayfanın geri kalan içeriği altta kalıyor */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">
          İskelet Hazır! 🚀
        </h1>
        <p className="text-gray-700 text-xl text-center px-4">
          Azra Meryem - Frontend Boilerplate (React + Tailwind v4)
        </p>
        <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg transition-all active:scale-95">
          Tıkla Bakalım
        </button>
      </div>

    </div>
  );
}

export default App;