export default function GuessRow({ guess = [] }) {
  return (
    <div>
      {guess.map((word, index) => (
        <span key={index}>{word.letter}</span>
      ))}
    </div>
  );
}
