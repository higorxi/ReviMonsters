export function truncateName(name: string) {
    const maxLength = 7;
    if (name.length > maxLength) {
      return `${name.substring(0, maxLength)}...`;
    }
    return name;
  }


