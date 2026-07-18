import { useState } from "react";

const animals = [
  { id: 1, name: "گربه", sound: "/Sounds/cat-sound1.mp3", text: "میوووو!" },
  { id: 2, name: "سگ", sound: "/Sounds/dog-sound1.mp3", text: "واق واق!" },
  { id: 3, name: "گاو", sound: "/Sounds/cow-sound1.mp3", text: "مموووو!" },
  { id: 4, name: "مرغ", sound: "/Sounds/hen-sound-effect.mp3", text: "قدقدقد!" },
];

const AnimalsList = () => {
  const [randomSoundText, setRandomSoundText] = useState("");
  
  // مرحله سوم: ایجاد یک وضعیت برای ذخیره تعداد پخش هر حیوان
  // مقدار اولیه: برای هر ID حیوان، عدد 0 را در نظر می‌گیریم
  const [counts, setCounts] = useState({
    1: 0, // گربه
    2: 0, // سگ
    3: 0, // گاو
    4: 0  // مرغ
  });

  const playRandomSound = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    const selectedAnimal = animals[randomIndex];

    // پخش صدا
    const audio = new Audio(selectedAnimal.sound);
    audio.play().catch(e => console.log("خطا در پخش:", e));

    // نمایش متن صدای تصادفی
    setRandomSoundText(`${selectedAnimal.name} - ${selectedAnimal.text}`);

    // --- مرحله سوم: آپدیت کردن شمارنده حیوان انتخاب شده ---
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

      {/* --- نمایش بخش جدید آمار پخش (مرحله سوم) --- */}
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
