export const generateCompanyId = () => {
    const chars = 'ABCDEFGHJKLNPQRSTUVWXYZ123456789'; // exclude confusing letters and masu
    let id = '';
    while (id.length < 4) {
      const char = chars.charAt(Math.floor(Math.random() * chars.length));
      if (!id.toLowerCase().includes('masu')) {
        id += char;
      }
    }
    return id.toUpperCase();
  };
  