export function __hardcoded (value) {
  return value;
}

export function openWhatsapp (phone) {
  const url = "https://api.WhatsApp.com/send?phone=77053000227";
}

export function generateUniqueRandomString(size) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';

  const timestamp = new Date().getTime();
  randomString += timestamp.toString(36);

  for (let i = 0; i < size - timestamp.toString(36).length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

