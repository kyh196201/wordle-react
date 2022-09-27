import styled from '@emotion/styled';

import COLORS from '@/constants/colors';
import { getLetterBoxBackgroundColor } from '@/utils';

const Box = styled.span(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    margin: '0 2.5px',
    fontSize: '1em',
    fontWeight: 'bold',
    textTransform: 'uppercase',

    '&:after': {
      content: '""',
      display: 'block',
      paddingTop: '100%',
    },
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
