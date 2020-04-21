const APP_TITLE = 'AlgoBox';

export default (to) => {
  document.title = to.meta.title || APP_TITLE;
};