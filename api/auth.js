export default function handler(req,res){
  res.setHeader('Cache-Control','no-store');
  if(req.method!=='POST') return res.status(405).json({ok:false});
  const {email,password}=req.body||{};
  const users={'bill@mcentricnow.org':'Bill','jeff@mcentricnow.org':'Jeff'};
  const key=String(email||'').trim().toLowerCase();
  const ok=Boolean(users[key]) && typeof process.env.MCENTRIC_TEMP_PASSWORD==='string' && password===process.env.MCENTRIC_TEMP_PASSWORD;
  if(!ok) return res.status(401).json({ok:false});
  return res.status(200).json({ok:true,name:users[key]});
}
