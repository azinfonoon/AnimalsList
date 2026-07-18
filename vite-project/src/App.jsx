import AnimalsList from "./Components/AnimalsList";

const App = () => {
  return (
    <div style={{ fontFamily: "vazir, tahoma, sans-serif", direction: "rtl", padding: "20px", textAlign: "center" }}>
      <h1>اپلیکیشن صدای حیوانات 🦁🐑</h1>
      <hr />
      <AnimalsList />
    </div>
  );
};

export default App;
