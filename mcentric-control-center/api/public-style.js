export default function handler(req,res){
  res.setHeader('Content-Type','text/css; charset=utf-8');
  res.setHeader('Cache-Control','public, max-age=300');
  res.status(200).send("@import url('https://mcentric-home-v7-public-qk3alq63t-wrrrein-1392s-projects.vercel.app/style.css');\n.login{display:none!important}\n");
}
