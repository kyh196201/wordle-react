export default function Board({ words }) {
  return (
    <ul>
      {words.map((word, idx) => (
        <li key={`${word}${idx}`}>
          {word.split('').map((letter, index) => (
            <span key={`${letter}-${index}`}>{letter}</span>
          ))}
        </li>
      ))}
    </ul>
  );
}
