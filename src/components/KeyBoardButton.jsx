import styled from '@emotion/styled';

import COLORS from '@/constants/colors';
import { KEYS } from '@/constants/settings';

import MEDIA_QUERIES from '@/constants/media-queries';
import backspaceIcon from '@/assets/icons/backspace.svg';

const Key = styled.button(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '54px',
    minWidth: '24px',
    marginRight: '6px',
    padding: '0 2px',
    borderRadius: '4px',
    backgroundColor: COLORS.KEYBOARD_BG,
    color: COLORS.KETBOARD_COLOR,
    fontSize: '14px',
    fontWeight: '600',

    '&:last-child': {
      marginRight: 0,
    },

    [MEDIA_QUERIES[0]]: {
      height: '58px',
      minWidth: '28px',
    },

    [MEDIA_QUERIES[1]]: {
      height: '80px',
      minWidth: '40px',
      fontSize: '18px',
    },
    [MEDIA_QUERIES[1]]: {
      height: '100px',
      minWidth: '60px',
      fontSize: '24px',
    },
  },
  ({ text }) => {
    if (text === KEYS.ENTER) {
      return {
        maxWidth: '100px',
        flex: 1,
      };
    }

    if (text === KEYS.BACKSPACE) {
      return {
        maxWidth: '100px',
        backgroundImage: `url(${backspaceIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '24px auto',
        fontSize: '0 !important',
        flex: 1,
        [MEDIA_QUERIES[1]]: {
          backgroundSize: '32px auto',
        },
        [MEDIA_QUERIES[2]]: {
          backgroundSize: '48px auto',
        },
      };
    }

    return {};
  },
);

export default function KeyBoardButton({ text = '', onClick }) {
  return (
    <Key text={text} type="button" onClick={() => onClick(text)}>
      {text.toUpperCase()}
    </Key>
  );
}
