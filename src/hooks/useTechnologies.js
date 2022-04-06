
const data = {
  "react": "https://cdn.glitch.global/6a127532-a959-4bed-9659-4e9df2512170/Group%2010react-logo.svg?v=1649264534843",
  "express": "https://cdn.glitch.global/6a127532-a959-4bed-9659-4e9df2512170/Express.svg?v=1649264660370",
  "nodejs": "https://cdn.glitch.global/6a127532-a959-4bed-9659-4e9df2512170/2560px-Node.js_logo_2015%201.svg?v=1649264661472",
  "postgres": "https://cdn.glitch.global/6a127532-a959-4bed-9659-4e9df2512170/PostgreSQL_logo_Postgre_SQL%201.svg?v=1649264668439",
  "redis": "https://cdn.glitch.global/6a127532-a959-4bed-9659-4e9df2512170/Redis_Logo%201.svg?v=1649264668439",
  "typescript": "https://cdn.glitch.global/6a127532-a959-4bed-9659-4e9df2512170/1280px-TypeScript_Logo_(Blue)%201.svg?v=1649264755934",
  "aws": "https://cdn.glitch.global/6a127532-a959-4bed-9659-4e9df2512170/1200px-Amazon_Web_Services_Logo%201.svg?v=1649264856548",
  "nodemailer": "https://cdn.glitch.global/6a127532-a959-4bed-9659-4e9df2512170/nm_logo_200x136%201.svg?v=1649264865941"
}

export default () => {
  const getLogo = (name) => {
    const url = data[name];
    if (url == null) {
      throw new Error("Logo does not exist in data");
    }
    return url;
  }
  return [getLogo, data];
}