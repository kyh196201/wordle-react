import { MAX_WORD_LENGTH } from '@/constants/settings';

import LetterBox from './LetterBox';

export default function EmptyRow() {
  return (
    <div>
      {[...Array(MAX_WORD_LENGTH).keys()].map(key => (
        <LetterBox key={key} />
      ))}
    </div>
  );
}
