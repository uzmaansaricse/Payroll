export const generatePassword = () => {
    const chars = 'ABCDEFGHJKLNPQRSTUVWXYZ123456789';
    let password = '';
    for (let i = 0; i < 4; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };
  