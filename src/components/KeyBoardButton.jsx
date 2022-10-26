import styled from '@emotion/styled';

import COLORS from '@/constants/colors';
import { KEYS, WORD_STATUS } from '@/constants/settings';

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
    cursor: 'pointer',

    '&:last-child': {
      marginRight: 0,
    },

    '&:focus': {
      outline: `2px solid ${COLORS.OUTLINE_BLUE}`,
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
  ({ text, status }) => {
    const styles = {};

    if (status === WORD_STATUS.CORRECT) {
      styles.backgroundColor = COLORS.CORRECT;
    } else if (status === WORD_STATUS.EXIST) {
      styles.backgroundColor = COLORS.EXIST;
    } else if (status === WORD_STATUS.MISS) {
      styles.backgroundColor = COLORS.MISS;
    }

    if (text === KEYS.ENTER) {
      return {
        ...styles,
        maxWidth: '100px',
        flex: 1,
      };
    }

    if (text === KEYS.BACKSPACE) {
      return {
        ...styles,
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

    return styles;
  },
);

export default function KeyBoardButton({ text = '', status = '', onClick }) {
  return (
    <Key
      text={text}
      status={status}
      type="button"
      onClick={() => onClick(text)}
    >
      {text.toUpperCase()}
    </Key>
  );
}
