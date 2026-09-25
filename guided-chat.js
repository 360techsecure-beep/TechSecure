(function(){
'use strict';
if(document.getElementById('ts-chat'))return;
var root=document.createElement('div');root.id='ts-chat';
root.innerHTML='<button class="ts-launch" aria-expanded="false" aria-controls="ts-panel">Need help?</button><section id="ts-panel" class="ts-panel" role="dialog" aria-labelledby="ts-title" hidden><div class="ts-head"><div><strong id="ts-title">Tech Secure 360</strong><small>Guided assistant · Choose an option</small></div><button class="ts-close" aria-label="Close guided assistant">×</button></div><div class="ts-content"><p class="ts-answer" aria-live="polite"></p><div class="ts-options"></div></div><div class="ts-foot"><a href="tel:+17473362737">Call</a><a href="sms:+17473362737">Text</a><a href="contact.html">Free estimate</a></div></section>';
document.body.appendChild(root);
var launch=root.querySelector('.ts-launch'),panel=root.querySelector('.ts-panel'),answer=root.querySelector('.ts-answer'),options=root.querySelector('.ts-options');
var states={
 home:{text:'Hi! What can we help you with? Choose a topic below. For personalized advice, call or text our team.',choices:[['Install new cameras','install'],['Fix an existing system','repair'],['Upgrade my cameras','upgrade'],['Pricing and estimates','pricing'],['Service areas and hours','areas'],['Recording and phone viewing','recording']]},
 install:{text:'What kind of property needs cameras?',choices:[['Home','homeinstall'],['Apartment building or HOA','apartments'],['Business or commercial property','business']]},
 homeinstall:{text:'We install hardwired and wireless cameras for homes, including entry and driveway coverage. Tell us your neighborhood and which areas you want to see.',links:[['Request an installation estimate','contact.html'],['See our work','gallery.html']]},
 apartments:{text:'We help apartment owners, managers, and HOAs plan cameras for shared entrances, parking, mail areas, and other common spaces. Camera count depends on the building layout.',links:[['Apartment camera services','apartment-building-camera-systems-los-angeles.html'],['Request a building estimate','contact.html']]},
 business:{text:'We install camera systems for retail stores, offices, warehouses, and other commercial properties. Tell us about your entrances, work areas, and existing equipment.',links:[['Commercial camera services','commercial-security-camera-systems.html'],['Request a business estimate','contact.html']]},
 repair:{text:'What is happening with your system?',choices:[['Cameras are offline','offline'],['Recorder is not recording','recorder'],['Phone viewing stopped working','phone']]},
 offline:{text:'Offline cameras can involve power, wiring, or network connections. Tell us how many cameras are affected, your recorder model, and when the problem started. We can assess what needs repair.',links:[['DVR and NVR repair','dvr-nvr-repair-los-angeles.html'],['Request repair help','contact.html']]},
 recorder:{text:'We troubleshoot DVR and NVR recording problems. Share the recorder model and any error message. If existing footage matters, tell us before service; repair does not guarantee footage recovery.',links:[['Explore recorder repair','dvr-nvr-repair-los-angeles.html'],['Request repair help','contact.html']]},
 phone:{text:'If your cameras work on a monitor but not your phone, the app or network connection may need attention. Share the app name and what changed. Please do not send passwords.',links:[['Request remote-viewing help','contact.html']]},
 upgrade:{text:'We assess your cameras, recorder, and wiring before recommending an upgrade. Existing wiring can sometimes be reused, depending on condition and compatibility.',links:[['Camera upgrade options','security-camera-upgrades-los-angeles.html'],['Request an upgrade estimate','contact.html']]},
 pricing:{text:'Estimates are free. Project pricing depends on camera count, cable routes, equipment, and property access. Diagnostic and repair work is quoted separately. Send your project details for a tailored estimate.',links:[['Request a free estimate','contact.html'],['What goes into installation costs','blog-security-camera-installation-cost-los-angeles.html']]},
 areas:{text:'We serve Greater Los Angeles, including the Westside, San Fernando Valley, and nearby communities. Listed business hours are daily, 9 AM–6 PM Pacific. Contact the team to confirm your address and scheduling.',links:[['View service areas','index.html#areas'],['Contact the team','contact.html']]},
 recording:{text:'Local DVR or NVR recording does not require a monthly recording subscription. Supported systems can provide phone viewing. Equipment compatibility and setup determine which features are available.',links:[['Discuss your system','contact.html']]}
};
function show(key,focus){var state=states[key];answer.textContent=state.text;options.replaceChildren();(state.choices||[]).forEach(function(c){var b=document.createElement('button');b.textContent=c[0];b.onclick=function(){show(c[1],true);};options.appendChild(b);});(state.links||[]).forEach(function(c){var a=document.createElement('a');a.textContent=c[0]+' →';a.href=c[1];options.appendChild(a);});if(key!=='home'){var b=document.createElement('button');b.textContent='← Start over';b.onclick=function(){show('home',true);};options.appendChild(b);}if(focus){var first=options.firstElementChild;if(first)first.focus();}}
function close(){panel.hidden=true;launch.setAttribute('aria-expanded','false');launch.focus();}
launch.onclick=function(){if(!panel.hidden){close();return;}panel.hidden=false;launch.setAttribute('aria-expanded','true');root.querySelector('.ts-close').focus();};
root.querySelector('.ts-close').onclick=close;
root.addEventListener('keydown',function(e){if(e.key==='Escape'&&!panel.hidden)close();});
show('home',false);
})();
