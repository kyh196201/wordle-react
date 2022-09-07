import { MAX_CHANCES } from '@/constants/settings';

export default function Board({ guesses }) {
  const guessesLength = (guesses ?? []).length;
  const emptyLength = MAX_CHANCES - guessesLength;

  return (
    <div>
      {/* 추측 rows */}
      {guessesLength > 0 &&
        guesses.map((guess, index) => (
          <div key={`guess-${index}`}>{guess}</div>
        ))}

      {/* 빈 rows */}
      {emptyLength > 0 &&
        [...Array(emptyLength)].map((v, index) => (
          <div key={index}>{index}</div>
        ))}
    </div>
  );
}
