const animals = [
  { id: 1, name: "گربه", sound: "میوووو!" },
  { id: 2, name: "سگ", sound: "واق واق!" },
  { id: 3, name: "گاو", sound: "مموووو!" },
  { id: 4, name: "مرغ", sound: "قدقدقد!" },
];

const AnimalsList = () => {
  return (
    <div>
      <h2>لیست حیوانات</h2>
      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>
            {animal.name} - {animal.sound}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalsList;
