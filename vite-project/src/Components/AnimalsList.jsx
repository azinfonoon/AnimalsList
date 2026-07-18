import { useState } from "react";
import AnimalItem from "./AnimalItem"; // وارد کردن کامپوننت جدید

const animals = [
  { id: 1, name: "گربه", sound: "/Sounds/cat-sound1.mp3", text: "میوووو!" },
  { id: 2, name: "سگ", sound: "/Sounds/dog-sound1.mp3", text: "واق واق!" },
  { id: 3, name: "گاو", sound: "/Sounds/cow-sound1.mp3", text: "مموووو!" },
  { id: 4, name: "مرغ", sound: "/Sounds/hen-sound-effect.mp3", text: "قدقدقد!" },
];

const AnimalsList = () => {
  const [randomMessage, setRandomMessage] = useState("");

  const playRandom = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    const selected = animals[randomIndex];
    
    const audio = new Audio(selected.sound);
    audio.play().catch(e => console.log("خطای پخش تصادفی:", e));
    
    setRandomMessage(`الان صدای ${selected.name} پخش شد!`);
  };

  return (
    <div>
      <h2>لیست حیوانات</h2>
      
      {/* نمایش لیست حیوانات با استفاده از کامپوننت جداگانه */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {animals.map((animal) => (
          <AnimalItem 
            key={animal.id} 
            name={animal.name} 
            sound={animal.sound} 
            text={animal.text} 
          />
        ))}
      </div>

      <hr />
      <button onClick={playRandom} style={{ padding: "10px 20px", fontSize: "18px", backgroundColor: "gold" }}>
        شانسی یکی رو پخش کن!
      </button>
      
      {randomMessage && <p><strong>{randomMessage}</strong></p>}
    </div>
  );
};

export default AnimalsList;
