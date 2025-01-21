import CursorPointer from "./cursor-pointer";

function App() {
  return (
    <div>
      <CursorPointer />
      <div
        className="relative h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1736794781970-ae55b6e3a13e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="flex h-screen">
        <div className="view w-1/2 text-3xl flex justify-center items-center bg-red-300">
          View
        </div>
        <div className="custom w-1/2 text-3xl flex justify-center items-center bg-blue-300">
          Custom
        </div>
      </div>
    </div>
  );
}

export default App;
