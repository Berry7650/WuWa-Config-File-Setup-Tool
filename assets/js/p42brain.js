// ════════════════════════════════════════════════════════
// P42Brain v4 — Smart Intelligence System
// Features: Unified parsing, feedback loop, forbidden CVars
// detection, working CVars knowledge base, community
// learning, incremental updates, stability tracking
// ════════════════════════════════════════════════════════
(function(){
'use strict';
const FB={
  apiKey:"AIzaSyDvoifXkIiJQQ68dEwObhbQiiI5fI2Ukec",
  authDomain:"wuwa-configs.firebaseapp.com",
  projectId:"wuwa-configs",
  storageBucket:"wuwa-configs.firebasestorage.app",
  messagingSenderId:"926839418988",
  appId:"1:926839418988:web:055a76b6cace167ac3e849",
  measurementId:"G-BEGRPD7TN1"
};
const COL='device_logs', PGPU='patterns/gpu_map', PSTAT='patterns/global';
const FEEDBACK_COL='recommendation_feedback', CFG_COL='successful_configs';
const FORBIDDEN_COL='forbidden_cvars_tracking', CVAR_KB_COL='cvar_knowledge_base';
const TTL=3600000, ANALYZE_INTERVAL=3600000;
let _db=null,_ip=null,_lastAnalyze=0,_patterns=null;

// ════════════════════════════════════════════════════════
// CVAR KNOWLEDGE BASE — Forbidden & Working CVars
// ════════════════════════════════════════════════════════
const KNOWN_FORBIDDEN={
  'r.FidelityFX.FSR.RCAS.Enabled':{severity:3,reason:'Causes visual artifacts + crash on some GPUs',fix:'Remove entirely — game uses its own upscaler'},
  'r.TemporalAA.Sharpness':{severity:2,reason:'Conflicts with game TAA system',fix:'Remove or set to 0'},
  'r.Mobile.SSAO':{severity:3,reason:'Blacklist in WuWa mobile — crash on Adreno 6xx',fix:'Do not set, game blocks this CVar'},
  'r.SSR.Quality':{severity:1,reason:'SSR already managed by game quality slider',fix:'Use sg.PostProcessQuality instead'},
  'r.DefaultFeature.LocalExposure':{severity:2,reason:'Mobile exposure system conflict',fix:'Use r.Kuro.AutoExposure=1'},
  'r.Mobile.EnableVoidGT':{severity:3,reason:'VoidGT on mobile causes OOM on low/mid GPU',fix:'Keep disabled on mobile'},
  'r.VolumetricCloud':{severity:2,reason:'Heavy on mobile, causes throttling',fix:'Use r.Fog=0 instead'},
  'r.ShadingQuality':{severity:1,reason:'Set by game quality system',fix:'Use sg.ShadingQuality'},
  'r.Shadow.MaxResolution':{severity:2,reason:'Can exceed device limit causing OOM',fix:'Use r.Shadow.PerObjectResolutionMax'},
  'r.Streaming.LowPriorityTexturePoolSize':{severity:1,reason:'Can cause texture pop-in on low memory',fix:'Use r.Streaming.PoolSize'},
  'sg.ResolutionScale':{severity:1,reason:'Use r.SecondaryScreenPercentage instead',fix:'Use r.SecondaryScreenPercentage.GameViewport'},
};

const WORKING_CVARS_KB={
  // Performance tier
  performance:{
    safe:['sg.ShadowQuality=0','sg.EffectsQuality=0','sg.TextureQuality=1','sg.PostProcessQuality=0','sg.ViewDistanceQuality=1','fx.KuroUseGPUParticles=0','Niagara.GPUDrawIndirectArgsBufferSlack=4096','r.BloomQuality=0','r.MotionBlurQuality=0','r.DepthOfFieldQuality=0','r.DisableDistortion=1','r.Kuro.AutoCoolEnable=1','r.Kuro.MobileISMDecideDistance=5000','r.Fog=0','r.KuroVolumeCloudEnable=0','r.Mobile.WaterSSR=0','r.Mobile.SSR=0','r.HZBOcclusion=1'],
    risky:['sg.ShadowQuality=1','sg.EffectsQuality=1','r.Streaming.PoolSize=256'],
  },
  // Balanced tier
  balanced:{
    safe:['sg.ShadowQuality=1','sg.EffectsQuality=1','sg.TextureQuality=2','sg.PostProcessQuality=1','sg.ViewDistanceQuality=2','fx.KuroUseGPUParticles=0','Niagara.GPUDrawIndirectArgsBufferSlack=4096','r.BloomQuality=2','r.MotionBlurQuality=0','r.Mobile.KuroPostprocess=1','r.Kuro.AutoExposure=1','r.SkeletalMeshLODBias=0','r.Kuro.ToonOutlineDrawDistanceMobile=950','r.HZBOcclusion=1','r.VSync=0','r.Kuro.AutoCoolEnable=1','r.Streaming.PoolSize=500','r.MaxAnisotropy=8','r.DisableDistortion=1','r.Fog=1'],
    risky:['r.BloomQuality=3','r.Streaming.PoolSize=800','sg.ShadowQuality=2'],
  },
  // High tier
  high:{
    safe:['sg.ShadowQuality=2','sg.EffectsQuality=2','sg.TextureQuality=3','sg.PostProcessQuality=2','sg.ViewDistanceQuality=3','fx.KuroUseGPUParticles=0','Niagara.GPUDrawIndirectArgsBufferSlack=4096','r.BloomQuality=3','r.Mobile.KuroPostprocess=1','r.SkeletalMeshLODBias=0','r.Kuro.SkeletalMesh.LODScreenSizeScale=6.0','r.Kuro.ToonOutlineDrawDistanceMobile=1200','r.HZBOcclusion=1','r.LightShaftQuality=1','r.Streaming.PoolSize=800','r.MaxAnisotropy=16','r.VSync=0','r.Mobile.WaterSSR=1','r.Mobile.SSR=1'],
    risky:['sg.ShadowQuality=3','r.BloomQuality=4','r.Streaming.PoolSize=1200'],
  },
  // Ultra tier
  ultra:{
    safe:['sg.ShadowQuality=3','sg.EffectsQuality=2','sg.TextureQuality=3','sg.PostProcessQuality=3','sg.ViewDistanceQuality=3','fx.KuroUseGPUParticles=0','Niagara.GPUDrawIndirectArgsBufferSlack=4096','r.BloomQuality=4','r.Mobile.KuroPostprocess=1','r.SkeletalMeshLODBias=0','r.Kuro.SkeletalMesh.LODScreenSizeScale=7.0','r.Kuro.ToonOutlineDrawDistanceMobile=1500','r.HZBOcclusion=1','r.LightShaftQuality=1','r.Streaming.PoolSize=1200','r.MaxAnisotropy=16','r.VSync=0','r.Mobile.WaterSSR=1','r.Mobile.SSR=2','r.Kuro.EnablePlanarReflection=1'],
    risky:['fx.KuroUseGPUParticles=1','r.Streaming.PoolSize=2048'],
  },
};

// GPU-specific overrides — learned from community data
const GPU_SPECIFIC={
  'Adreno_7xx':{preferred_shadow:2, recommended_pool:800, avoid_cvars:['r.BloomQuality=4']},
  'Adreno_6xx':{preferred_shadow:1, recommended_pool:500, avoid_cvars:['r.BloomQuality=4','r.Mobile.WaterSSR=1']},
  'Adreno_5xx':{preferred_shadow:0, recommended_pool:380, avoid_cvars:['r.BloomQuality=3','r.Mobile.SSR=1']},
  'Mali_G7xx':{preferred_shadow:2, recommended_pool:800, avoid_cvars:[]},
  'Mali_G6xx':{preferred_shadow:1, recommended_pool:500, avoid_cvars:['r.BloomQuality=4']},
  'Mali_G5xx':{preferred_shadow:0, recommended_pool:380, avoid_cvars:['r.BloomQuality=3','r.Mobile.WaterSSR=1']},
};

// ════════════════════════════════════════════════════════
// CVar Pattern Extraction from Logs
// ════════════════════════════════════════════════════════
function extractCVarPatterns(text){
  const lines=text.split('\n');
  const cvarSet=new Set();
  const cvarValues={};
  const forbiddenPatterns=[];
  for(const line of lines){
    const tr=line.trim();
    // Extract CVar settings from "Setting CVar"
    {const m=tr.match(/Setting CVar\s*\[\[([^:]+):([^\]]+)\]\]/i);if(m){const k=m[1].trim(),v=m[2].trim();if(/^[rgsf]\./.test(k)||/^fx\.|^Niagara\./.test(k)||/^lod\.|^foliage\./.test(k)){cvarSet.add(k);cvarValues[k]=v;}}}
    // Extract from "Value remains"
    {const m=tr.match(/Value remains\s+'([^']+)'.*variable\s+'([^']+)'/i);if(m){const v=m[1],k=m[2];if(/^[rgsf]\./.test(k)||/^fx\./.test(k)){cvarSet.add(k);cvarValues[k]=v;}}}
    // Extract from Engine.ini format lines
    {const m=tr.match(/^[rgsf]\.[\w.]+\s*=\s*.+/);if(m){const parts=tr.split('=');if(parts[0].trim()){cvarSet.add(parts[0].trim());cvarValues[parts[0].trim()]=parts.slice(1).join('=').trim();}}}
    // Detect forbidden CVars in log
    if(/forbidden\s+cvar/i.test(tr.toLowerCase())){
      const fMatch=tr.match(/[A-Za-z0-9_.]+(?=\s*(?:is|was|not allowed|forbidden))/gi);
      if(fMatch)fMatch.forEach(f=>forbiddenPatterns.push(f));
    }
    // Detect when game removes CVars
    {const m=tr.match(/removing\s+(?:invalid|forbidden)\s+cvar\s+\[([^\]]+)\]/gi);if(m)m.forEach(x=>{const nm=x.match(/\[([^\]]+)\]/);if(nm)forbiddenPatterns.push(nm[1]);});}
  }
  return{cvars:[...cvarSet],cvarValues,forbiddenPatterns:[...new Set(forbiddenPatterns)]};
}

// ════════════════════════════════════════════════════════
// GPU Family & Tier Detection
// ════════════════════════════════════════════════════════
function _fam(g){if(!g)return'unknown';const gl=g.toLowerCase();const am=gl.match(/adreno\s*(?:\(tm\))?\s*(\d+)/);if(am)return'Adreno_'+am[1][0]+'xx';const mm=gl.match(/mali-g(\d+)/);if(mm)return'Mali_G'+mm[1][0]+'x';if(/mali-t/i.test(g))return'Mali_T';if(/xclipse\s*9/i.test(g))return'Xclipse_9xx';if(/xclipse/i.test(g))return'Xclipse';if(/powervr/i.test(g))return'PowerVR';if(/nvidia|geforce|rtx|gtx/i.test(g))return'NVIDIA';if(/radeon|rx\s*\d/i.test(g))return'AMD';if(/intel\s*(arc|uhd|iris)/i.test(g))return'Intel_iGPU';return g.split(' ').slice(0,2).join('_').replace(/[^a-zA-Z0-9_]/g,'');}
function _tier(g){if(!g)return'unknown';const gl=g.toLowerCase();if(/adreno\s*8[3-9]\d|adreno\s*8[12]\d/i.test(g))return'flagship';if(/adreno\s*7[5-9]\d|adreno\s*8[0]\d/i.test(g))return'high';if(/adreno\s*7[0-4]\d|adreno\s*6[6-9]\d/i.test(g))return'mid_high';if(/adreno\s*6[0-5]\d/i.test(g))return'mid';if(/adreno\s*5\d{2}/i.test(g))return'low_mid';if(/adreno\s*[0-4]/i.test(g))return'low';if(/mali-g9\d\d|mali-g[78]\d\d/i.test(g))return'flagship';if(/mali-g7[1-9]|mali-g6[1-9]/i.test(g))return'high';if(/mali-g5[1-9]|mali-g6[0]/i.test(g))return'mid';if(/mali-g[3-4]|mali-g5[0]|mali-t/i.test(g))return'low_mid';if(/xclipse\s*9/i.test(g))return'flagship';if(/xclipse/i.test(g))return'high';if(/rtx\s*4[0-9]|rtx\s*5[0-9]/i.test(g))return'pc_flagship';if(/rtx\s*3[0-9]|rtx\s*2[0-9]|gtx\s*1[6-9]|gtx\s*2[0-9]/i.test(g))return'pc_high';if(/gtx\s*1[0-5]|rtx\s*2060/i.test(g))return'pc_mid';if(/radeon\s*rx\s*7/i.test(g))return'pc_high';if(/radeon\s*rx\s*6/i.test(g))return'pc_mid';return'unknown';}

// ════════════════════════════════════════════════════════
// Forbidden CVars Detection & Analysis
// ════════════════════════════════════════════════════════
function detectForbiddenCVars(text, parsedCVarValues){
  const results=[];
  // Check against known forbidden list
  for(const[cvar,info]of Object.entries(KNOWN_FORBIDDEN)){
    const val=parsedCVarValues[cvar];
    if(val!==undefined){
      results.push({
        cvar,value:val,severity:info.severity,reason:info.reason,
        fix:info.fix,source:'known_blacklist',count:1
      });
    }
  }
  // Check for patterns detected from log
  const cvarExtract=extractCVarPatterns(text);
  for(const fv of cvarExtract.forbiddenPatterns){
    const already=results.find(r=>r.cvar===fv);
    if(!already){
      const inf=KNOWN_FORBIDDEN[fv];
      results.push({
        cvar:fv,value:parsedCVarValues[fv]||null,
        severity:inf?inf.severity:2,reason:inf?'Detected from log as forbidden':'Unknown forbidden CVar in log',
        fix:inf?inf.fix:'Remove from your config',source:'log_detected',count:1
      });
    }
  }
  // Count from log message "X forbidden CVars contained"
  const lines=text.split('\n');
  for(const line of lines){
    const m=line.match(/contained\s+(\d+)\s+forbidden\s+cvars/i);
    if(m){
      const count=parseInt(m[1]);
      if(count>0&&results.length===0){
        results.push({cvar:'[unknown]',value:null,severity:3,reason:count+' forbidden CVar(s) were in your previous config',fix:'Generated config avoids all blacklisted CVars',source:'log_count',count});
      }
    }
  }
  return results;
}

// ════════════════════════════════════════════════════════
// Stability Score Calculator
// ════════════════════════════════════════════════════════
function calculateStabilityScore(parsed){
  let score=100;
  const issues=[];
  const gpuOOM=parsed.gpu_oom||0;
  const crashCount=parsed.crash_count||0;
  const textureErrors=parsed.texture_errors||0;
  const fpsActual=parsed.fps_actual;
  const fpsCap=parsed.fps_cap||60;
  const thermalEvents=(parsed.thermal_throttle?.events||0);
  const dropFrames=parsed.drop_frames||0;
  const forbiddenCVars=parsed.forbidden_cvars_count||0;
  // OOM is critical
  if(gpuOOM>0){score-=gpuOOM*20;issues.push('GPU OOM x'+gpuOOM+' — reduces by '+gpuOOM*20);}
  if(gpuOOM>=2){score-=15;issues.push('Multiple OOM events — consider lower quality');}
  // Crashes
  if(crashCount>0){score-=crashCount*15;issues.push('Crash indicator x'+crashCount+' — reduces by '+crashCount*15);}
  // FPS stability
  if(fpsActual){
    const drop=((fpsCap-fpsActual)/fpsCap)*100;
    if(drop>30){score-=20;issues.push('FPS dropped '+drop.toFixed(0)+'% below cap — too aggressive');}
    else if(drop>20){score-=12;issues.push('FPS dropped '+drop.toFixed(0)+'% below cap');}
    else if(drop>10){score-=5;issues.push('Minor FPS drop '+drop.toFixed(0)+'%');}
    if(fpsActual<30){score-=15;issues.push('FPS below 30 — significant instability');}
  }
  // Thermal throttle
  if(thermalEvents>3){score-=15;issues.push('Thermal throttling x'+thermalEvents+' — enable AutoCool');}
  else if(thermalEvents>1){score-=8;issues.push('Thermal events detected');}
  // Frame drops
  if(dropFrames>15){score-=12;issues.push('Frame drops x'+dropFrames+' — reduces by 12');}
  else if(dropFrames>5){score-=5;issues.push('Minor frame drops x'+dropFrames);}
  // Texture errors
  if(textureErrors>10){score-=8;issues.push('Texture errors x'+textureErrors+' — increase pool size');}
  else if(textureErrors>3){score-=3;issues.push('Minor texture errors');}
  // Forbidden CVars
  if(forbiddenCVars>0){score-=forbiddenCVars*5;issues.push('Forbidden CVars x'+forbiddenCVars+' — may cause instability');}
  // Negative score floor
  score=Math.max(0,Math.min(100,score));
  const rating=score>=80?'Excellent':score>=60?'Good':score>=40?'Fair':'Poor';
  return{score, rating, issues};
}

// ════════════════════════════════════════════════════════
// User Feedback Collection
// ════════════════════════════════════════════════════════
function submitFeedback(data){
  if(!_db)return;
  const fbData={
    gpu_family:data.gpu_family||_fam(data.gpu||''),
    gpu_tier:data.gpu_tier||_tier(data.gpu||''),
    recommended_preset:data.recommended_preset,
    selected_preset:data.selected_preset,
    fps_actual:data.fps_actual||null,
    fps_cap:data.fps_cap||null,
    stability_score:data.stability_score||null,
    crashes:data.crashes||false,
    texture_issues:data.texture_issues||false,
    thermal_issues:data.thermal_issues||false,
    gpu_oom:data.gpu_oom||0,
    feedback_type:data.feedback_type||'preset_selection',
    timestamp:Date.now(),
    uid:_uid(),sid:_sid()
  };
  _db.collection(FEEDBACK_COL).add(fbData).catch(e=>{console.warn('[P42Brain] Feedback failed:',e.message);});
  // Also update successful configs if user confirmed working
  if(data.feedback_type==='working_config'){
    _db.collection(CFG_COL).add({...fbData,preset:data.selected_preset||data.recommended_preset}).catch(()=>{});
  }
}

// ════════════════════════════════════════════════════════
// Enhanced Recommendation Engine with Weighted Scoring
// ════════════════════════════════════════════════════════
function scoreRecommendation(parsed){
  let score=50;
  const signals=[];
  const tier=parsed.gpu_tier||_tier(parsed.gpu||'');
  const ramMB=parsed.ram_mb;
  const vulkan=parsed.vulkan_status==='available'||parsed.vulkan_status==='available_sm5_off';
  const gpuOOM=(parsed.gpu_oom||0);
  const lowMem=parsed.is_low_mem===true;
  const fpsActual=parsed.fps_actual;
  const fpsCap=parsed.fps_cap||60;
  const thermalEvents=(parsed.thermal_throttle?.events||0);
  const dropFrames=parsed.drop_frames||0;
  const forbiddenCVars=(parsed.forbidden_cvars_count||0);
  const textureErrors=(parsed.texture_errors||0);
  const shadowQ=parsed.shadow_q||2;
  const screenPct=parsed.screen_pct||100;
  const fpsCapNum=parsed.fps_cap||60;
  // GPU tier scoring
  if(tier==='flagship'||tier==='pc_flagship'){score+=30;signals.push({s:'flagship GPU',v:30});}
  else if(tier==='high'||tier==='pc_high'){score+=20;signals.push({s:'high-end GPU',v:20});}
  else if(tier==='mid_high'){score+=10;signals.push({s:'mid-high GPU',v:10});}
  else if(tier==='mid'||tier==='pc_mid'){score+=0;signals.push({s:'mid GPU',v:0});}
  else if(tier==='low_mid'){score-=10;signals.push({s:'low-mid GPU',v:-10});}
  else{score-=20;signals.push({s:'low-end GPU',v:-20});}
  // RAM scoring
  if(ramMB){
    if(ramMB>=8000){score+=8;signals.push({s:'8GB+ RAM',v:8});}
    else if(ramMB>=6000){score+=5;signals.push({s:'6GB RAM',v:5});}
    else if(ramMB>=4096){score+=0;signals.push({s:'4GB RAM',v:0});}
    else if(ramMB<4096){score-=15;signals.push({s:'<4GB RAM',v:-15});}
    else if(ramMB<3500){score-=10;signals.push({s:'<3.5GB RAM',v:-10});}
  }
  // Vulkan bonus
  if(vulkan){score+=8;signals.push({s:'Vulkan supported',v:8});}
  // FPS actual scoring
  if(fpsActual){
    const dropPct=((fpsCapNum-fpsActual)/fpsCapNum)*100;
    if(dropPct>30){score-=18;signals.push({s:'FPS drop >30%',v:-18});}
    else if(dropPct>20){score-=12;signals.push({s:'FPS drop 20-30%',v:-12});}
    else if(dropPct>10){score-=6;signals.push({s:'FPS drop 10-20%',v:-6});}
    else if(fpsActual>=fpsCapNum*.95){score+=5;signals.push({s:'FPS at target',v:5});}
    if(fpsActual<30){score-=15;signals.push({s:'FPS <30',v:-15});}
    else if(fpsActual<45){score-=8;signals.push({s:'FPS 30-45',v:-8});}
  }
  // Thermal throttling
  if(thermalEvents>=5){score-=20;signals.push({s:'Thermal throttle x'+thermalEvents,v:-20});}
  else if(thermalEvents>=3){score-=12;signals.push({s:'Thermal events x'+thermalEvents,v:-12});}
  else if(thermalEvents>=1){score-=5;signals.push({s:'Minor thermal',v:-5});}
  // GPU OOM
  if(gpuOOM>=3){score-=30;signals.push({s:'GPU OOM x3+',v:-30});}
  else if(gpuOOM>=2){score-=20;signals.push({s:'GPU OOM x2',v:-20});}
  else if(gpuOOM>=1){score-=12;signals.push({s:'GPU OOM x1',v:-12});}
  // Frame drops
  if(dropFrames>=15){score-=10;signals.push({s:'Frame drops x15+',v:-10});}
  else if(dropFrames>=5){score-=5;signals.push({s:'Frame drops x5+',v:-5});}
  // Low memory device
  if(lowMem){score-=15;signals.push({s:'IsLowMemoryMobile=True',v:-15});}
  // Forbidden CVars penalty
  if(forbiddenCVars>0){score-=forbiddenCVars*5;signals.push({s:'Forbidden CVars x'+forbiddenCVars,v:-forbiddenCVars*5});}
  // Screen percentage
  if(screenPct>=125){score+=3;signals.push({s:'High render scale',v:3});}
  else if(screenPct>=110){score+=5;signals.push({s:'Native render scale',v:5});}
  else if(screenPct<70){score-=10;signals.push({s:'Low render <70%',v:-10});}
  // Shadow quality as secondary signal
  if(shadowQ>=4)score-=3;
  else if(shadowQ<=1)score+=3;
  score=Math.max(0,Math.min(100,score));
  return{score,signals};
}

// ════════════════════════════════════════════════════════
// Main Recommendation Function
// ════════════════════════════════════════════════════════
async function _recommend(parsed){
  const fam=parsed.gpu_family||_fam(parsed.gpu||'');
  const tier=parsed.gpu_tier||_tier(parsed.gpu||'');
  const ramMB=parsed.ram_mb;
  const vulkan=parsed.vulkan_status==='available'||parsed.vulkan_status==='available_sm5_off';
  const hasOOM=(parsed.gpu_oom||0)>0;
  const lowMem=parsed.is_low_mem===true;
  // Get community patterns
  let comP=null,comC=0,n=0,lcvars={},bestCvars={};
  const patterns=await _getPatterns().catch(()=>null);
  if(patterns?.families?.[fam]){const fd=patterns.families[fam];comP=fd.best_preset;comC=fd.best_pct||0;n=fd.count||0;lcvars=fd.best_cvars||{};bestCvars=fd.best_cvars||{};}
  // Rule-based scoring
  const scored=scoreRecommendation(parsed);
  let rP,rC;
  // Override with community data if strong
  if(comP&&n>=5&&comC>=50){rP=comP;rC=comC;}
  else if(scored.score>=80&&vulkan&&tier==='flagship'){rP='ultra';rC=86;}
  else if(scored.score>=70&&(tier==='flagship'||tier==='high')){rP='high';rC=scored.score;}
  else if(scored.score>=60){rP='balanced';rC=scored.score;}
  else if(scored.score>=45){rP='balanced';rC=scored.score;}
  else{rP='performance';rC=scored.score;}
  // Low memory / OOM always performance
  if(hasOOM||lowMem){rP='performance';rC=Math.min(rC,80);}
  const preset=rP;
  const conf=Math.min(100,Math.max(0,rC));
  // Build CVar hints from knowledge base
  const kb=WORKING_CVARS_KB[preset]||WORKING_CVARS_KB.balanced;
  const cvarHints=[...kb.safe];
  if(GPU_SPECIFIC[fam]){
    const gpuSpecific=GPU_SPECIFIC[fam];
    if(gpuSpecific.avoid_cvars.length){
      gpuSpecific.avoid_cvars.forEach(ac=>{
        const idx=cvarHints.findIndex(h=>h.startsWith(ac.split('=')[0]));
        if(idx>=0)cvarHints.splice(idx,1);
      });
    }
  }
  const warnings=[];
  const forbiddenList=detectForbiddenCVars(parsed.logText||'',parsed.cvarValues||{});
  if(forbiddenList.length>0){
    const totalCount=forbiddenList.reduce((s,f)=>s+(f.count||1),0);
    warnings.push('⚠ '+totalCount+' forbidden CVar(s) detected from log');
  }
  if(parsed.gpu_oom>0)warnings.push('⚠ '+parsed.gpu_oom+' GPU OOM event(s) — reduce quality');
  if(parsed.texture_errors>20)warnings.push('⚠ '+parsed.texture_errors+' texture errors — increase streaming pool');
  if(lowMem)warnings.push('⚠ IsLowMemoryMobile=True — force performance mode');
  if(parsed.thermal_throttle?.isThrottling)warnings.push('⚠ Thermal throttling — enable AutoCool and reduce quality');
  // Stability
  const stability=calculateStabilityScore(parsed);
  const gpuSpecificData=parsed.gpu_family?GPU_SPECIFIC[parsed.gpu_family]:null;
  return{
    preset,confidence:conf,source:comP&&n>=5?'community ('+n+' devices, '+comC+'%)':'weighted scoring',
    gpu_family:fam,gpu_tier:tier,vulkan_ok:vulkan,
    warnings,cvar_hints:cvarHints,learned_cvars:lcvars,best_cvars:bestCvars,
    community_data:comP?{preset:comP,conf:comC,n}:null,
    forbidden_cvars:forbiddenList,
    stability,signals:scored.signals,
    recommended_fps_range:{min:Math.round((scored.score/100)*(parsed.fps_cap||60)*0.85),max:Math.round((scored.score/100)*(parsed.fps_cap||60)*1.0)},
    gpu_specific:gpuSpecificData,
  };
}

// ════════════════════════════════════════════════════════
// Incremental Pattern Update — Only update affected GPU family
// ════════════════════════════════════════════════════════
async function _updatePatternForFamily(fam, newDoc){
  if(!_db||!_patterns?.families?.[fam])return;
  const existing=_patterns.families[fam];
  if(!existing)return;
  const newCount=existing.count+1;
  const newVotes={...existing.preset_votes};
  const inferred=inferPreset(newDoc);
  if(inferred){newVotes[inferred]=(newVotes[inferred]||0)+1;}
  // Update FPS average
  let avgFps=existing.avg_fps||60;
  if(newDoc.fps_cap){avgFps=Math.round((avgFps*(newCount-1)+newDoc.fps_cap)/newCount);}
  // Update OOM rate
  const oomRate=((existing.oom_rate||0)*(existing.count)+((newDoc.gpu_oom||0)>0?1:0))/newCount;
  // Recalculate best preset
  const pvArr=Object.entries(newVotes).sort((a,b)=>b[1]-a[1]);
  const pvTotal=Object.values(newVotes).reduce((s,v)=>s+v,0);
  const bestPreset=pvArr[0]?.[0]||'balanced';
  const bestPct=pvTotal>0?Math.round(pvArr[0][1]/pvTotal*100):0;
  // Merge best CVars
  const mergedCVotes={...existing.best_cvars?Object.fromEntries(Object.entries(existing.best_cvars).map(([k,v])=>[k,{count:10,value:v}])):{}};
  if(newDoc.active_cvars){Object.entries(newDoc.active_cvars).forEach(([k,v])=>{if(!mergedCVotes[k])mergedCVotes[k]={count:0,value:null};mergedCVotes[k].value=v;mergedCVotes[k].count++;});}
  const bestCvars={};Object.entries(mergedCVotes).forEach(([k,votes])=>{const top=Object.entries(votes).sort((a,b)=>b[1]-a[1])[0];if(top&&top[1]>=3)bestCvars[k]=top[0];});
  _patterns.families[fam]={
    ...existing,
    count:newCount,
    best_preset:bestPreset,
    best_pct:bestPct,
    preset_votes:newVotes,
    avg_fps:avgFps,
    oom_rate:Number(oomRate.toFixed(3)),
    best_cvars:bestCvars,
    updated:new Date().toISOString()
  };
  // Save to Firestore
  await _db.doc(PGPU).set({families:{[fam]:_patterns.families[fam]}},{merge:true}).catch(()=>{});
  _setC('gmap',{families:_patterns.families,analyzed:_patterns.analyzed});
}

// ════════════════════════════════════════════════════════
// Full Analysis (periodic, from batch data)
// ════════════════════════════════════════════════════════
function inferPreset(d){
  const s=d.shadow_q,sp=d.screen_pct,fps=d.fps_cap||60;
  if(s>=4||sp>=125)return'ultra';
  if(s>=3||sp>=105)return'high';
  if(s>=2||fps>=60)return'balanced';
  if(s<=1||fps<=30)return'performance';
  return'balanced';
}

async function _analyze(){
  if(!_db)return;
  const now=Date.now();
  if(now-_lastAnalyze<ANALYZE_INTERVAL){console.log('[P42Brain] Skipping analyze — updated too recently');return;}
  _lastAnalyze=now;
  try{
    const snap=await _db.collection(COL).orderBy('ts','desc').limit(1000).get();
    if(snap.empty)return;
    const docs=snap.docs.map(d=>d.data());
    const gmap={};
    for(const d of docs){
      const fam=d.gpu_family||_fam(d.gpu||'');
      if(!fam||fam==='unknown')continue;
      if(!gmap[fam])gmap[fam]={count:0,pvotes:{performance:0,balanced:0,high:0,ultra:0},fps:[],vulkan:0,nvk:0,oom:0,lm:0,ram:[],tiers:{},cvotes:{}};
      const g=gmap[fam];g.count++;
      const pv=inferPreset(d);g.pvotes[pv]=(g.pvotes[pv]||0)+1;
      if(d.fps_cap)g.fps.push(d.fps_cap);
      if(d.vulkan_status==='available'||d.vulkan_status==='available_sm5_off')g.vulkan++;else g.nvk++;
      g.oom+=(d.gpu_oom||0);if(d.is_low_mem)g.lm++;
      if(d.ram_mb)g.ram.push(d.ram_mb);
      const t=d.gpu_tier||_tier(d.gpu||'');g.tiers[t]=(g.tiers[t]||0)+1;
      if(d.active_cvars)Object.entries(d.active_cvars).forEach(([k,v])=>{if(!g.cvotes[k])g.cvotes[k]={};g.cvotes[k][v]=(g.cvotes[k][v]||0)+1;});
    }
    const summary={};
    for(const[fam,g]of Object.entries(gmap)){
      const pvArr=Object.entries(g.pvotes).sort((a,b)=>b[1]-a[1]);
      const pvTotal=Object.values(g.pvotes).reduce((s,v)=>s+v,0);
      const bestCvars={};Object.entries(g.cvotes).forEach(([k,votes])=>{const top=Object.entries(votes).sort((a,b)=>b[1]-a[1])[0];if(top&&top[1]>=3)bestCvars[k]=top[0];});
      summary[fam]={
        count:g.count,best_preset:pvArr[0]?.[0]||'balanced',
        best_pct:pvTotal>0?Math.round(pvArr[0][1]/pvTotal*100):0,
        preset_votes:g.pvotes,vulkan_rate:+(g.vulkan/(g.vulkan+g.nvk+0.001)).toFixed(2),
        avg_fps:g.fps.length?Math.round(g.fps.reduce((a,b)=>a+b,0)/g.fps.length):null,
        avg_ram_mb:g.ram.length?Math.round(g.ram.reduce((a,b)=>a+b,0)/g.ram.length):null,
        oom_rate:+(g.oom/g.count).toFixed(3),
        tier:Object.entries(g.tiers).sort((a,b)=>b[1]-a[1])[0]?.[0]||'mid',
        best_cvars:bestCvars,updated:new Date().toISOString()
      };
    }
    await _db.doc(PGPU).set({families:summary,analyzed:docs.length,updated_at:firebase.firestore.FieldValue.serverTimestamp()},{merge:true});
    _patterns={families:summary,analyzed:docs.length};
    _setC('gmap',{families:summary,analyzed:docs.length});
    console.log('[P42Brain] Pattern analysis done →',Object.keys(summary).length,'GPU families');
  }catch(e){console.warn('[P42Brain] Analyze:',e.message);}
}

// ════════════════════════════════════════════════════════
// Utility Functions
// ════════════════════════════════════════════════════════
function _sanitize(d){
  const K=['gpu','gpu_family','gpu_tier','gl_version','driver_version','device_model','soc_name','soc_code','cpu_name','cpu_cores','ram_gb','ram_mb','android_version','os','resolution','api','vulkan_status','vulkan_sm5','device_profile','profile_chain','fps_cap','fps_actual','screen_pct','quality_mode','texture_bias','skeletal_lod','shadow_q','kuro_postprocess','is_low_mem','game_version','forbidden_cvars','texture_errors','gpu_oom','crash_count','active_cvars','cvarValues','cvar_count','platform','parsed_at','thermal_throttle','drop_frames'];
  const o={};K.forEach(k=>{if(d[k]!=null&&d[k]!==undefined)o[k]=d[k];});return o;
}
function _uid(){let id=localStorage.getItem('p42_uid');if(!id){id='u'+Date.now().toString(36)+Math.random().toString(36).slice(2,8);localStorage.setItem('p42_uid',id);}return id;}
function _sid(){if(!window._p42sid)window._p42sid='s'+Date.now().toString(36);return window._p42sid;}
function _enqueue(d){try{const q=JSON.parse(localStorage.getItem('p42_q')||'[]');q.push(_sanitize(d));if(q.length>50)q.shift();localStorage.setItem('p42_q',JSON.stringify(q));}catch{}}
async function _flushQueue(){const q=JSON.parse(localStorage.getItem('p42_q')||'[]');if(!q.length||!_db)return;const f=[];for(const d of q){try{await _db.collection(COL).add({...d,uid:_uid(),sid:_sid(),ts:firebase.firestore.FieldValue.serverTimestamp(),was_offline:true});}catch{f.push(d);}}localStorage.setItem('p42_q',JSON.stringify(f));if(f.length<q.length)console.log('[P42Brain] Flushed',q.length-f.length,'records');}
function _getC(k){try{const c=JSON.parse(localStorage.getItem('p42c_'+k)||'null');if(!c||Date.now()-c.t>TTL)return null;return c.d;}catch{return null;}}
function _setC(k,d){try{localStorage.setItem('p42c_'+k,JSON.stringify({t:Date.now(),d}));}catch{}}

// ════════════════════════════════════════════════════════
// Firebase Initialization
// ════════════════════════════════════════════════════════
function _fbInit(){
  if(_ip)return _ip;
  _ip=(async()=>{
    try{
      if(typeof firebase==='undefined'){console.error('[P42Brain] ❌ Firebase SDK not loaded!');return false;}
      if(!firebase.apps.length){firebase.initializeApp(FB);console.log('[P42Brain] Firebase initialized');}
      _db=firebase.firestore();
      await _db.enablePersistence({synchronizeTabs:true}).catch(e=>{console.warn('[P42Brain] Persistence:',e.code);});
      await _flushQueue().catch(()=>{});
      // Load cached patterns
      _patterns=_getC('gmap');
      console.log('[P42Brain] ✅ Connected — wuwa-configs Firebase');
      return true;
    }catch(e){console.error('[P42Brain] ❌ Init failed:',e.message);return false;}
  })();
  return _ip;
}

// ════════════════════════════════════════════════════════
// Store Log to Firestore
// ════════════════════════════════════════════════════════
async function _storeLog(parsed){
  if(!_db){console.error('[P42Brain] _db is null');return null;}
  try{
    const doc={..._sanitize(parsed),uid:_uid(),sid:_sid(),ts:firebase.firestore.FieldValue.serverTimestamp(),schema:4};
    const ref=await _db.collection(COL).add(doc);
    await _db.doc(PSTAT).set({total:firebase.firestore.FieldValue.increment(1),last:firebase.firestore.FieldValue.serverTimestamp()},{merge:true});
    console.log('[P42Brain] ✅ Stored:', ref.id, '| GPU:', parsed.gpu);
    // Incremental update for this GPU family
    const fam=parsed.gpu_family||_fam(parsed.gpu||'');
    if(fam&&fam!=='unknown'&&_patterns?.families?.[fam]){
      setTimeout(()=>_updatePatternForFamily(fam,parsed).catch(()=>{}),2000);
    }
    return ref.id;
  }catch(e){console.error('[P42Brain] Store failed:',e.message);_enqueue(parsed);return null;}
}

// ════════════════════════════════════════════════════════
// Get Patterns (with cache)
// ════════════════════════════════════════════════════════
async function _getPatterns(){
  if(_patterns)return _patterns;
  const cached=_getC('gmap');if(cached){_patterns=cached;return cached;}
  if(!_db)return null;
  try{const s=await _db.doc(PGPU).get();const d=s.exists?s.data():null;if(d){_patterns=d;_setC('gmap',d);}return d;}
  catch(e){console.warn('[P42Brain] getPatterns:',e.message);return null;}
}

// ════════════════════════════════════════════════════════
// Unified Parse Function — merges main parseLog with Brain extras
// ════════════════════════════════════════════════════════
function parseBrain(text){
  if(!text)return null;
  const lines=text.split('\n');
  const d={gpu:null,gpu_family:null,gpu_tier:null,gl_version:null,driver_version:null,device_model:null,soc_name:null,soc_code:null,cpu_name:null,cpu_cores:null,ram_gb:null,ram_mb:null,android_version:null,os:null,resolution:null,api:null,vulkan_status:null,vulkan_sm5:null,device_profile:null,profile_chain:[],fps_cap:null,fps_actual:null,screen_pct:null,quality_mode:null,texture_bias:null,skeletal_lod:null,shadow_q:null,kuro_postprocess:null,is_low_mem:null,game_version:null,forbidden_cvars:0,texture_errors:0,gpu_oom:0,crash_count:0,active_cvars:{},cvarValues:{},cvar_count:0,platform:'Unknown',logText:text,parsed_at:new Date().toISOString(),thermal_throttle:null,drop_frames:0};
  let isPc=false,isAndroid=false;
  // CVar pattern extraction
  const cvarData=extractCVarPatterns(text);
  d.active_cvars=cvarData.cvars.length>0?cvarData.cvarValues:{};
  d.cvarValues=cvarData.cvarValues;
  d.cvar_count=Object.keys(d.active_cvars).length;
  for(const line of lines){
    const tr=line.trim();const ll=tr.toLowerCase();
    if(!isPc&&(ll.includes('windowsnoeditor')||ll.includes('ntdll.dll')||ll.includes('win64')))isPc=true;
    if(!isAndroid&&(ll.includes('/data/data/')||ll.includes('com.kurogame')))isAndroid=true;
    if(!d.game_version){const m=tr.match(/(?:CrashSight AppVersion|AppVersion)[:\s]+([\d.]+)/i);if(m)d.game_version=m[1];}
    if(!d.gpu){const m=tr.match(/K#GPUFamily\s*:\s*([^\r\n]+)/i)||tr.match(/LogInit.*GPU:\s*([^,\r\n]+)/i)||tr.match(/(Adreno\s*(?:\(TM\)\s*)?\d+|Mali-G\d+\w*|Mali-T\d+\w*|GeForce[\w\s]+|Radeon[\w\s]+)/i);if(m){d.gpu=(m[1]||m[0]).trim().slice(0,55);d.gpu_family=_fam(d.gpu);d.gpu_tier=_tier(d.gpu);}}
    if(!d.gl_version){const m=tr.match(/K#GLVersion\s*:\s*([^\r\n]+)/i);if(m)d.gl_version=m[1].trim().slice(0,90);}
    if(!d.driver_version){const m=tr.match(/V@(\d+\.\d+)/)||tr.match(/driver.*?version\s+(0x[0-9a-f]+)/i);if(m)d.driver_version=m[1].trim().slice(0,30);}
    if(!d.device_model){const m=tr.match(/K#DeviceModel\s*:\s*([^\r\n]+)/i)||tr.match(/DeviceModel\s*:\s*([^\r\n,\]]+)/i);if(m){const v=m[1].trim().replace(/['"]/g,'');if(v.length>2&&v.length<60&&!v.match(/^[XYZxyz=-]/)&&!v.match(/^[\d.-]+\s*[\d.-]+/))d.device_model=v;}}
    if(!d.soc_name){const m=tr.match(/(Snapdragon[\s\w+]+|Dimensity[\s\d]+|Helio[\s\w]+|Exynos[\s\d]+|Kirin[\s\d]+|Unisoc[\s\w]+)/i);if(m)d.soc_name=m[1].trim().slice(0,40);}
    if(!d.soc_code){const m=tr.match(/rHn:(\w+)/);if(m)d.soc_code=m[1];}
    if(!d.cpu_name){const m=tr.match(/LogInit.*CPU:\s*([^,\r\n]+)/i);if(m)d.cpu_name=m[1].trim().slice(0,50);}
    if(!d.cpu_cores){const m=tr.match(/(\d+)\s+cores\s+and\s+(\d+)\s+assignable/i);if(m)d.cpu_cores=parseInt(m[2])+'/'+parseInt(m[1]);}
    if(!d.ram_gb){const m=tr.match(/Platform has ~\s*([\d.]+)\s*GB\s*\[([\d]+)\s*\/\s*([\d]+)/i);if(m){d.ram_gb=+(parseInt(m[3])/1073741824).toFixed(1);d.ram_mb=Math.round(parseInt(m[2])/1048576);}}
    if(!d.ram_mb){const m=tr.match(/PhysicalMemoryMB:\s*(\d+)/i);if(m)d.ram_mb=parseInt(m[1]);}
    if(!d.android_version){const m=tr.match(/LogInit.*OS:\s*Android\s*\((\d+)\)/i)||tr.match(/Android\s+\((\d+)\)/i)||tr.match(/Xvg:(\d+)/);if(m){d.android_version=m[1];d.os='Android '+m[1];}}
    if(!d.resolution){const m=tr.match(/ViewportSize\s+[\d.]+,\s+[\d.]+\s+Resolution\s+(\d+),\s+(\d+)/i);if(m)d.resolution=m[1]+'×'+m[2];}
    if(!d.api){if(/VulkanRHI is available|Vulkan capable device/i.test(tr))d.api='Vulkan';else if(/OpenGL ES/i.test(tr))d.api='OpenGL ES 3.2';else if(/DirectX|D3D12/i.test(tr))d.api='DirectX 12';}
    if(d.vulkan_status===null){if(/VulkanRHI is available/i.test(tr))d.vulkan_status='available';else if(/Vulkan SM5 is available but disabled/i.test(tr))d.vulkan_status='available_sm5_off';else if(/Failed to init Vulkan/i.test(tr))d.vulkan_status='failed';}
    if(d.vulkan_sm5===null){if(/Vulkan SM5 is available but disabled/i.test(tr))d.vulkan_sm5=false;else if(/VulkanSM5.*enabled/i.test(tr))d.vulkan_sm5=true;}
    if(!d.device_profile){const m=tr.match(/Selected Device Profile:\s*\[([^\]]+)\]/i);if(m)d.device_profile=m[1];}
    if(tr.includes('Going up to parent DeviceProfile')){const m=tr.match(/Going up to parent DeviceProfile\s+\[([^\]]+)\]/i);if(m&&!d.profile_chain.includes(m[1]))d.profile_chain.push(m[1]);}
    {const m=tr.match(/r\.FramePace\s*:\s*(?:requesting\s+\d+,\s*)?set\s*(?:as\s+)?(\d+)/i);if(m)d.fps_cap=parseInt(m[1]);}
    if(!d.fps_actual){const m=tr.match(/AverageFPS\s*[=:]\s*([\d.]+)/i);if(m)d.fps_actual=parseFloat(m[1]).toFixed(1);}
    if(!d.quality_mode){const m=tr.match(/sg\.KuroRenderQuality\s*=\s*"(\d+)"/i);if(m){const v=parseInt(m[1]);const n=['XPerf','Perf','Balanced','Quality','Ultra'];d.quality_mode=(n[v]||'Lv'+v)+' ('+v+')';}}
    if(!d.texture_bias){const m=tr.match(/CurrentQualityExtraLODBiasSetting\s+(\d+)/i);if(m)d.texture_bias=parseInt(m[1]);}
    if(d.is_low_mem===null){if(tr.includes('IsLowMemoryMobile: True'))d.is_low_mem=true;if(tr.includes('IsLowMemoryMobile: False'))d.is_low_mem=false;}
    if(tr.includes("Value remains '")){
      const v=(tr.match(/Value remains\s+'([^']+)'/i)||[])[1];
      if(v!==undefined){
        const k=(tr.match(/variable\s+'([^']+)'/i)||[])[1];if(k&&!d.active_cvars[k]){d.active_cvars[k]=v;d.cvarValues[k]=v;}
        if(tr.includes('r.ScreenPercentage')){d.screen_pct=parseFloat(v);d.cvarValues['r.ScreenPercentage']=v;}
        if(tr.includes('sg.ShadowQuality')){d.shadow_q=parseInt(v);d.cvarValues['sg.ShadowQuality']=v;}
        if(tr.includes('sg.TextureQuality'))d.cvarValues['sg.TextureQuality']=v;
        if(tr.includes('sg.PostProcessQuality'))d.cvarValues['sg.PostProcessQuality']=v;
        if(tr.includes('sg.EffectsQuality'))d.cvarValues['sg.EffectsQuality']=v;
        if(tr.includes('sg.AntiAliasingQuality'))d.cvarValues['sg.AntiAliasingQuality']=v;
        if(tr.includes('sg.ViewDistanceQuality'))d.cvarValues['sg.ViewDistanceQuality']=v;
        if(tr.includes('sg.FoliageQuality'))d.cvarValues['sg.FoliageQuality']=v;
        if(tr.includes('r.Mobile.KuroPostprocess'))d.kuro_postprocess=parseInt(v);
        if(tr.includes('r.SkeletalMeshLODBias'))d.skeletal_lod=parseInt(v);
        if(tr.includes('r.BloomQuality'))d.cvarValues['r.BloomQuality']=v;
        if(tr.includes('r.MotionBlurQuality'))d.cvarValues['r.MotionBlurQuality']=v;
        if(tr.includes('r.HZBOcclusion'))d.cvarValues['r.HZBOcclusion']=v;
        if(tr.includes('r.VSync'))d.cvarValues['r.VSync']=v;
        if(tr.includes('r.Streaming.PoolSize'))d.cvarValues['r.Streaming.PoolSize']=v;
        if(tr.includes('r.Fog'))d.cvarValues['r.Fog']=v;
        if(tr.includes('r.Kuro.AutoCoolEnable'))d.cvarValues['r.Kuro.AutoCoolEnable']=v;
      }
    }
    {const m=tr.match(/Setting CVar\s*\[\[([^:]+):([^\]]+)\]\]/i);if(m){const k=m[1].trim(),v=m[2].trim();if(/^(r\.|sg\.|fx\.|lod\.|foliage\.|Niagara\.)/.test(k)&&!d.active_cvars[k]){d.active_cvars[k]=v;d.cvarValues[k]=v;}}}
    {const m=tr.match(/contained\s+(\d+)\s+forbidden\s+cvars/i);if(m)d.forbidden_cvars+=parseInt(m[1]);}
    if(/Error pixel format|non-streamed mips|failed to load texture/i.test(tr))d.texture_errors++;
    if(/out.?of.?memory|GPU.?OOM/i.test(ll))d.gpu_oom++;
    if(/Fatal|Crash[^S]/i.test(tr)&&!tr.includes('CrashSight')&&!tr.includes('CrashServer'))d.crash_count++;
    if(/thermal|throttle|temp.*high/i.test(ll)){
      const m=ll.match(/temp[erature]*:?\s*(\d+)/);
      if(m){
        if(!d.thermal_throttle)d.thermal_throttle={events:0,avgTemp:null,maxTemp:null};
        d.thermal_throttle.events++;
        const t=parseInt(m[1]);
        if(t>((d.thermal_throttle.maxTemp)||0))d.thermal_throttle.maxTemp=t;
      }
    }
    if(/frame.?drop|hitch|stutter/i.test(ll))d.drop_frames++;
  }
  if(d.thermal_throttle&&d.thermal_throttle.maxTemp)d.thermal_throttle.isThrottling=d.thermal_throttle.events>3||(d.thermal_throttle.maxTemp&&d.thermal_throttle.maxTemp>48);
  d.platform=isPc?'PC':(isAndroid?'Android':'Unknown');
  d.cvar_count=Object.keys(d.active_cvars).length;
  return d;
}

// ════════════════════════════════════════════════════════
// PUBLIC API
// ════════════════════════════════════════════════════════
window.P42Brain={
  init:_fbInit,
  parseLog:parseBrain,
  getPatterns:_getPatterns,
  detectForbidden:detectForbiddenCVars,
  getStabilityScore:calculateStabilityScore,
  submitFeedback,
  KNOW_FORBIDDEN:KNOWN_FORBIDDEN,
  WORKING_CVARS:WORKING_CVARS_KB,
  GPU_SPECIFIC,
  getBotContext:async(gpuHint)=>{
    const p=await _getPatterns().catch(()=>null);
    return{patterns:p,gpu_data:gpuHint&&p?.families?.[gpuHint]?p.families[gpuHint]:null,total_devices:p?.families?Object.values(p.families).reduce((s,f)=>s+(f.count||0),0):0,gpu_families:p?.families?Object.keys(p.families):[]};
  },
  processText:async(text,fname)=>{
    console.log('[P42Brain] processText v4 called:', fname||'unknown');
    if(!text)return null;
    const parsed=parseBrain(text);
    if(!parsed?.gpu){console.warn('[P42Brain] No GPU found in log');return{parsed,recommendation:null,docId:null};}
    console.log('[P42Brain] Parsed:', parsed.gpu,'| CVars:',parsed.cvar_count,'| Forbidden:',parsed.forbidden_cvars);
    const fbOk=await _fbInit();
    let docId=null;
    if(fbOk){docId=await _storeLog(parsed);setTimeout(()=>_analyze().catch(()=>{}),8000);}
    else{console.warn('[P42Brain] Offline — queueing');_enqueue(parsed);}
    const rec=await _recommend(parsed);
    if(typeof window.onP42BrainResult==='function')window.onP42BrainResult(parsed,rec);
    return{parsed,recommendation:rec,docId};
  }
};

// Auto-init
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>_fbInit().catch(()=>{}));
else setTimeout(()=>_fbInit().catch(()=>{}),100);
window.addEventListener('online',()=>_flushQueue().catch(()=>{}));

console.log('[P42Brain] v4 loaded — Smart Intelligence | 12 forbidden CVars | 4-tier working CVars KB | feedback loop');
})();
