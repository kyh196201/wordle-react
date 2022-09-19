import styled from '@emotion/styled';

import COLORS from '@/constants/colors';
import { getLetterBoxBackgroundColor } from '@/utils';

const Box = styled.span(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '6.2rem',
    height: '6.2rem',
    margin: '0 0.5rem 0.5rem 0',
    fontSize: '3.2rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  ({ status }) => ({
    color: status ? `${COLORS.WHITE}` : `${COLORS.BLACK}`,
    backgroundColor: status
      ? `${getLetterBoxBackgroundColor(status)}`
      : `${COLORS.WHITE}`,
    border: status ? 'none' : `2px solid ${COLORS.GREY}`,
  }),
);

export default function LetterBox({ letter = '', status = '' }) {
  return (
    <Box status={status} className="letter-box">
      {letter}
    </Box>
  );
}
