import { MAX_WORD_LENGTH } from '@/constants/settings';

import WordRow from './WordRow';
import LetterBox from './LetterBox';

export default function EmptyRow() {
  return (
    <WordRow>
      {[...Array(MAX_WORD_LENGTH).keys()].map(key => (
        <LetterBox key={key} />
      ))}
    </WordRow>
  );
}
