export const BREAKPOINTS = [360, 768, 1200];

/**
 * styled 컴포넌트 미디어 쿼리
 */
const MEDIA_QUERIES = BREAKPOINTS.map(bp => `@media (min-width: ${bp}px)`);

export default MEDIA_QUERIES;
