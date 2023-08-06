export const useAuth = () => {
    const getToken = async () => {
      let token = { Authorization: "" };
  
      // Check if code is running in the browser (client-side)
      if (typeof window !== "undefined") {
        let cookie = document.cookie;
        cookie = cookie
          .split(";")
          .map((a) => a.split("="))
          .filter((a) => String(a[0]).trim() === "token");
        if (cookie.length > 0) {
          cookie = cookie[0] ? cookie[0][1] : "";
          if (cookie) {
            token = { Authorization: `Bearer ${cookie}` };
          }
        }
      }
  
      return token;
    };
  
    return getToken();
  };
  