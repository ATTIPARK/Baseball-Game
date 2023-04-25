function App() {
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-xl mx-auto min-h-screen flex flex-col justify-center items-center bg-sky-300">
        <div className="flex gap-2 text-4xl font-bold">
          <span className="spin-slow">⚾</span>
          숫자 야구 게임
          <span>⚾</span>
        </div>
        <div className="mt-10 font-bold text-xl">
          1 ~ 9 중 4가지 숫자를 입력해주세요
        </div>
        <form className="flex flex-col mt-4 gap-4 w-64">
          <input
            type="number"
            className="h-24 bg-gray-300 text-center text-4xl font-bold border-4 border-red-700 rounded-xl"
          />
          <button className="h-12 bg-red-800 text-xl font-bold border-4 border-black text-white rounded-xl hover:bg-pink-800">
            확인
          </button>
        </form>
        <ul className="mt-4 h-full flex flex-col gap-1 text-lg font-bold bg-pink-300">
          <li>결과</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
