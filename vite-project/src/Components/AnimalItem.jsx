const AnimalItem = ({ name, sound, text }) => {
  
  const playSound = () => {
   
    const audio = new Audio(sound);
    
   
    audio.play().catch(error => {
      console.error("خطا در پخش فایل:", sound, error);
    });
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", borderRadius: "8px" }}>
      <h3>{name}</h3>
      <p>صدای نوشتاری: {text}</p>
      <button onClick={playSound}>پخش صدای {name}</button>
    </div>
  );
};

export default AnimalItem;
