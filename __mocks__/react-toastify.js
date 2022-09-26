export const toast = {
  warn: jest.fn(),
  success: jest.fn(),
  error: jest.fn(),
};

// @TODO: 질문
// ToastContainer 컴포넌트를 mocking하지 않았을 경우에 App 컴포넌트를 렌더링하지 못함
export function ToastContainer() {
  return <div />;
}

export default {};
