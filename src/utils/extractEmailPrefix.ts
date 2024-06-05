export const extractEmailPrefix = (email: string): string => {
    if (!email) return "@member";
    
    const prefix = email?.split("@")?.[0];
    return `@${prefix}`;
  };
