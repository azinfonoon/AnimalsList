import { useState } from "react";

const animals = [
  { id: 1, name: "گربه", sound: "/Sounds/cat-sound1.mp3", text: "میوووو!" },
  { id: 2, name: "سگ", sound: "/Sounds/dog-sound1.mp3", text: "واق واق!" },
  { id: 3, name: "گاو", sound: "/Sounds/cow-sound1.mp3", text: "مموووو!" },
  { id: 4, name: "مرغ", sound: "/Sounds/hen-sound-effect.mp3", text: "قدقدقد!" },
];

const AnimalsList = () => {
  const [randomSoundText, setRandomSoundText] = useState("");
  
 
  
  const [counts, setCounts] = useState({
    1: 0, // گربه
    2: 0, // سگ
    3: 0, // گاو
    4: 0  // مرغ
  });

  const playRandomSound = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    const selectedAnimal = animals[randomIndex];

  
    const audio = new Audio(selectedAnimal.sound);
    audio.play().catch(e => console.log("خطا در پخش:", e));

  
    setRandomSoundText(`${selectedAnimal.name} - ${selectedAnimal.text}`);

    
    setCounts((prevCounts) => ({
      ...prevCounts, // مقادیر قبلی را نگه دار
      [selectedAnimal.id]: prevCounts[selectedAnimal.id] + 1 // فقط به تعداد حیوان فعلی یکی اضافه کن
    }));
  };

  return (
    <div>
      <h2>لیست حیوانات</h2>
      {animals.map((animal) => (
        <div key={animal.id}>
          {animal.name} - {animal.text}
        </div>
      ))}

      <br />
      <button onClick={playRandomSound} style={{ padding: "10px", cursor: "pointer" }}>
        پخش تصادفی صدای حیوان
      </button>

      {randomSoundText && (
        <div style={{ marginTop: "20px", color: "blue" }}>
          <strong>صدای انتخاب شده: {randomSoundText}</strong>
        </div>
      )}

  
      <div style={{ marginTop: "30px", borderTop: "1px solid #ccc", paddingTop: "10px" }}>
        <h3>آمار پخش صداها:</h3>
        {animals.map((animal) => (
          <p key={animal.id}>
            صدای {animal.name}: {counts[animal.id]} بار
          </p>
        ))}
      </div>
    </div>
  );
};

export default AnimalsList;
