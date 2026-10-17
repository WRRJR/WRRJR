export default function handler(req,res){
  if(req.method==='GET' && String(req.query?.style||'')==='1'){
    res.setHeader('Content-Type','text/css; charset=utf-8');
    res.setHeader('Cache-Control','public, max-age=300');
    return res.status(200).send("@import url('https://mcentric-home-v7-public-qk3alq63t-wrrrein-1392s-projects.vercel.app/style.css');\n.login{display:none!important}\n");
  }
  res.setHeader('Cache-Control','no-store');
  if(req.method!=='POST') return res.status(405).json({ok:false});
  const {email,password}=req.body||{};
  const users={'bill@mcentricnow.org':'Bill','jeff@mcentricnow.org':'Jeff'};
  const key=String(email||'').trim().toLowerCase();
  const ok=Boolean(users[key]) && typeof process.env.MCENTRIC_TEMP_PASSWORD==='string' && password===process.env.MCENTRIC_TEMP_PASSWORD;
  if(!ok) return res.status(401).json({ok:false});
  return res.status(200).json({ok:true,name:users[key]});
}
