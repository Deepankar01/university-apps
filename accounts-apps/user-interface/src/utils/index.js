import Messages from './static/Messages.json';

export const getMessage = (pageName, title, params) => {
  let returnMessage;
  if (!title) {
    return Messages[pageName];
  }
  returnMessage = Messages[pageName][title];
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      const re = new RegExp(`{${key}}`, 'g');
      returnMessage = returnMessage.replace(re, value);
    });
  }
  return returnMessage;
};

export default getMessage;
