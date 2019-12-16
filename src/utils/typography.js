import Typography from 'typography';
import moragaTheme from 'typography-theme-moraga';

moragaTheme.scaleRatio = 5;

const typography = new Typography(moragaTheme);
export const { scale, rhythm, options } = typography;
export default typography;
