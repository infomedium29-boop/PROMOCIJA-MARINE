// Cloudflare Pages Function. Set WEB3FORMS_ACCESS_KEY under Pages > Settings > Variables and Secrets.
export async function onRequestPost({ request, env }) {
  const headers = { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' };
  if (!env.WEB3FORMS_ACCESS_KEY) return new Response(JSON.stringify({ error: 'not_configured' }), { status: 503, headers });
  let data;
  try { data = await request.json(); } catch { return new Response(JSON.stringify({ error: 'invalid_json' }), { status: 400, headers }); }
  const str=(v,max=1000)=>typeof v==='string'?v.trim().slice(0,max):'';
  if (str(data.website)) return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  const name=str(data.name,120),email=str(data.email,190),message=str(data.message,4000);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length<8) return new Response(JSON.stringify({ error: 'invalid_input' }), { status: 400, headers });
  const payload={access_key:env.WEB3FORMS_ACCESS_KEY,name,email,phone:str(data.phone,50),service:str(data.service,120),message,subject:'Promocija Marine – web upit',from_name:'Promocija Marine web',botcheck:''};
  try {const res=await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const result=await res.json();if(!res.ok||!result.success) return new Response(JSON.stringify({ error:'upstream_error'}),{status:502,headers});return new Response(JSON.stringify({success:true}),{status:200,headers});}
  catch { return new Response(JSON.stringify({error:'network_error'}),{status:502,headers}); }
}
