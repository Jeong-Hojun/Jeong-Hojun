import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Mail, Linkedin, ExternalLink, ArrowUpRight } from 'lucide-react';
import VRRehabilitation      from './pages/VRRehabilitation';
import EEGNeurofeedback       from './pages/EEGNeurofeedback';
import HumanRobotInteraction  from './pages/HumanRobotInteraction';

// SVG grain texture — avoids dependency on a missing /texture.png file
const GRAIN_TEXTURE =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E";

// ═══════════════════════════════════════════════════════════════════════════════
//  CONTENT CONSTANTS — edit here to update all page copy
// ═══════════════════════════════════════════════════════════════════════════════

const PERSON = {
  name: 'Hojun Jeong',
  email: 'ghwns1664@skku.edu',
};

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: 'HOME',         href: '#home'         },
  { label: 'ABOUT',        href: '#about'        },
  { label: 'RESEARCH',     href: '#research'     },
  { label: 'PUBLICATIONS', href: '#publications' },
  { label: 'CONTACT',      href: '#contact'      },
];

const SOCIAL_LINKS = [
  { Icon: Mail,         href: `mailto:${PERSON.email}`,                  label: 'Email'          },
  { Icon: Linkedin,     href: 'https://www.linkedin.com/in/hojun-jeong', label: 'LinkedIn'       },
  { Icon: ExternalLink, href: 'https://scholar.google.com/citations?user=XbvENZkAAAAJ&hl=ko&oi=ao', label: 'Google Scholar' },
];

// — Hero ——————————————————————————————————————————————————————————————————————
const HERO_ACCENT  = 'Neurorehabilitation research';
const HERO_LINES   = ['DECODING', 'THE BRAIN.', 'RESTORING', 'HUMAN MOTION.'];
const HERO_SUBTEXT = 'POSTDOCTORAL RESEARCHER  ·  SKKU  ·  RERC';

// — About —————————————————————————————————————————————————————————————————————
const ABOUT_HEADING  = ['WORKING', 'AT THE EDGE', 'OF NEUROSCIENCE', '& ROBOTICS'];
const ABOUT_ACCENT   = 'Researcher';
const ABOUT_STMT     = `POSTDOCTORAL RESEARCHER,
SUNGKYUNKWAN UNIVERSITY · RERC.

WORKING AT THE INTERSECTION
OF NEURAL ENGINEERING AND
CLINICAL REHABILITATION —
TO RESTORE MOTOR FUNCTION
AFTER STROKE.`;
const ABOUT_KEYWORDS =
  'EEG · EMG · fNIRS · BRAIN-COMPUTER INTERFACE · MOTOR IMAGERY · NEURAL PLASTICITY · STROKE REHABILITATION · BODY OWNERSHIP ILLUSION · VR REHABILITATION · NEUROMODULATION · CLINICAL TRANSLATION · SIGNAL PROCESSING · REHABILITATION ROBOTICS';

// — Featured Work ——————————————————————————————————————————————————————————————
interface CardData {
  Illustration: React.FC;
  title:        string;
  subtitle:     string;
  overlayLabel: string;
  overlayValue: string;
  href:         string;
}

// ─── Card SVG illustrations — site palette only (#070B0F bg · #22D3EE cyan) ──

/** VR Rehabilitation — head silhouette + VR headset overlay, single-cyan palette */
const VRRehabIllustration: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden" style={{background:'#070B0F'}}>
    <svg viewBox="0 0 300 300" className="w-full h-full" aria-hidden="true">
      <defs>
        <filter id="vr-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="vr-bloom" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="12" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="vr-center" cx="50%" cy="42%" r="42%">
          <stop offset="0%"   stopColor="#22D3EE" stopOpacity="0.12"/>
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="vr-lens-fill" cx="30%" cy="28%" r="75%">
          <stop offset="0%"   stopColor="#FFFFFF"  stopOpacity="0.18"/>
          <stop offset="45%"  stopColor="#22D3EE"  stopOpacity="0.10"/>
          <stop offset="100%" stopColor="#070B0F"   stopOpacity="1"/>
        </radialGradient>
        <pattern id="vr-dot" patternUnits="userSpaceOnUse" width="18" height="18">
          <circle cx="9" cy="9" r="0.5" fill="#22D3EE" fillOpacity="0.07"/>
        </pattern>
        <clipPath id="vr-lcl"><rect x="76" y="96" width="62" height="46" rx="10"/></clipPath>
        <clipPath id="vr-rcl"><rect x="162" y="96" width="62" height="46" rx="10"/></clipPath>
      </defs>

      <rect width="300" height="300" fill="url(#vr-dot)"/>
      <rect width="300" height="300" fill="url(#vr-center)"/>

      {/* Pulse rings */}
      {[0,1].map(i=>(
        <circle key={i} cx="150" cy="128" r="108" fill="none"
          stroke="#22D3EE" strokeWidth="0.5" strokeOpacity="0.18"
          style={{transformBox:'fill-box' as React.CSSProperties['transformBox'],transformOrigin:'center',
            animation:`illus-ring-pulse 4s ease-out ${i*2}s infinite`}}/>
      ))}

      {/* Head silhouette — frontal skull */}
      <ellipse cx="150" cy="118" rx="82" ry="98"
        fill="rgba(34,211,238,0.025)" stroke="#22D3EE" strokeWidth="1" strokeOpacity="0.35"/>
      {/* Temporal ridge */}
      <path d="M70 100 Q64 118 68 140" fill="none" stroke="#22D3EE" strokeWidth="0.6" strokeOpacity="0.25"/>
      <path d="M230 100 Q236 118 232 140" fill="none" stroke="#22D3EE" strokeWidth="0.6" strokeOpacity="0.25"/>
      {/* Orbital outlines (eye sockets) — very faint */}
      <ellipse cx="120" cy="126" rx="20" ry="14" fill="none" stroke="#22D3EE" strokeWidth="0.55" strokeOpacity="0.2"/>
      <ellipse cx="180" cy="126" rx="20" ry="14" fill="none" stroke="#22D3EE" strokeWidth="0.55" strokeOpacity="0.2"/>
      {/* Nasal bridge */}
      <path d="M150 140 L145 157 Q150 161 155 157 L150 140" fill="none" stroke="#22D3EE" strokeWidth="0.5" strokeOpacity="0.2"/>

      {/* VR headset — thin-line technical overlay */}
      {/* Body */}
      <path d="M62 106 Q62 88 84 82 Q114 75 150 75 Q186 75 216 82 Q238 88 238 106 L238 148 Q238 162 216 167 Q186 172 150 172 Q114 172 84 167 Q62 162 62 148 Z"
        fill="rgba(34,211,238,0.04)" stroke="#22D3EE" strokeWidth="1.4" strokeOpacity="0.65" filter="url(#vr-glow)"/>
      {/* Top edge glow */}
      <path d="M88 81 Q116 74 150 74 Q184 74 212 81"
        fill="none" stroke="#22D3EE" strokeWidth="1.2" strokeOpacity="0.7" strokeLinecap="round" filter="url(#vr-glow)"/>
      {/* Side straps */}
      <path d="M62 124 Q44 124 40 144 Q40 157 56 162"
        fill="none" stroke="#22D3EE" strokeWidth="0.9" strokeDasharray="4 3" strokeOpacity="0.38"/>
      <path d="M238 124 Q256 124 260 144 Q260 157 244 162"
        fill="none" stroke="#22D3EE" strokeWidth="0.9" strokeDasharray="4 3" strokeOpacity="0.38"/>

      {/* LEFT LENS */}
      <rect x="76" y="96" width="62" height="46" rx="10"
        fill="url(#vr-lens-fill)" stroke="#22D3EE" strokeWidth="1.3" filter="url(#vr-glow)"/>
      <rect x="81" y="101" width="52" height="36" rx="7"
        fill="none" stroke="#22D3EE" strokeWidth="0.5" strokeOpacity="0.3"/>
      <g clipPath="url(#vr-lcl)">
        {[0,1,2].map(i=>(
          <line key={i} x1="76" y1={104+i*14} x2="138" y2={104+i*14}
            stroke="#22D3EE" strokeWidth="0.4" strokeOpacity="0.18"/>
        ))}
        <path d="M79 119 L85 119 L88 112 L91 126 L94 119 L99 119 L102 114 L105 124 L108 119 L136 119"
          fill="none" stroke="#22D3EE" strokeWidth="1.1" strokeOpacity="0.85" filter="url(#vr-glow)"/>
        <line x1="76" y1="109" x2="138" y2="109" stroke="#22D3EE" strokeWidth="0.9" strokeOpacity="0.35"
          style={{animation:'illus-scan 2.6s ease-in-out 0s infinite'}}/>
      </g>
      <ellipse cx="95" cy="103" rx="12" ry="4.5" fill="white" fillOpacity="0.12" transform="rotate(-14 95 103)"/>

      {/* RIGHT LENS */}
      <rect x="162" y="96" width="62" height="46" rx="10"
        fill="url(#vr-lens-fill)" stroke="#22D3EE" strokeWidth="1.3" filter="url(#vr-glow)"/>
      <rect x="167" y="101" width="52" height="36" rx="7"
        fill="none" stroke="#22D3EE" strokeWidth="0.5" strokeOpacity="0.3"/>
      <g clipPath="url(#vr-rcl)">
        {[0,1,2].map(i=>(
          <line key={i} x1="162" y1={104+i*14} x2="224" y2={104+i*14}
            stroke="#22D3EE" strokeWidth="0.4" strokeOpacity="0.18"/>
        ))}
        <path d="M165 119 L171 119 L174 112 L177 126 L180 119 L185 119 L188 114 L191 124 L194 119 L222 119"
          fill="none" stroke="#22D3EE" strokeWidth="1.1" strokeOpacity="0.85" filter="url(#vr-glow)"/>
        <line x1="162" y1="109" x2="224" y2="109" stroke="#22D3EE" strokeWidth="0.9" strokeOpacity="0.35"
          style={{animation:'illus-scan 2.6s ease-in-out 0.3s infinite'}}/>
      </g>
      <ellipse cx="181" cy="103" rx="12" ry="4.5" fill="white" fillOpacity="0.12" transform="rotate(-14 181 103)"/>

      {/* Nose bridge */}
      <path d="M138 112 Q144 120 150 123 Q156 120 162 112"
        fill="none" stroke="#22D3EE" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.4"/>

      {/* Central bloom */}
      <ellipse cx="150" cy="119" rx="44" ry="30" fill="#22D3EE" fillOpacity="0.03" filter="url(#vr-bloom)"
        style={{animation:'illus-glow-blink 2.8s ease-in-out infinite'}}/>

      {/* Activity bars */}
      {([12,20,36,16,42,26,14,34,22,18] as number[]).map((h,i)=>(
        <rect key={i} x={61+i*18} y={255-h} width="11" height={h} rx="1.5"
          fill="#22D3EE" fillOpacity={i===2||i===4?0.55:0.16}
          style={{animation:`illus-glow-blink ${1.2+i*0.13}s ease-in-out ${i*0.1}s infinite`}}/>
      ))}
      <text x="150" y="274" textAnchor="middle" fontSize="6.5" fill="#22D3EE" fillOpacity="0.28"
        fontFamily="monospace" letterSpacing="2.5">MOTOR CORTEX ACTIVITY</text>

      {/* Accent dots */}
      {([{x:36,y:56,r:2.2},{x:268,y:62,r:1.8},{x:40,y:210,r:1.8},{x:264,y:208,r:2}] as {x:number,y:number,r:number}[]).map(({x,y,r},i)=>(
        <circle key={i} cx={x} cy={y} r={r} fill="#22D3EE" filter="url(#vr-glow)"
          style={{animation:`illus-glow-blink ${2.2+i*0.4}s ease-in-out ${i*0.5}s infinite`}}/>
      ))}
    </svg>
  </div>
);

/** EEG Neurofeedback — monochrome cyan topomap, white Cz peak, 3-channel trace */
const EEGIllustration: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden" style={{background:'#070B0F'}}>
    <svg viewBox="0 0 300 300" className="w-full h-full" aria-hidden="true">
      <defs>
        <filter id="eeg-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.8" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="eeg-bloom" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="13" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        {/* Monochrome heat map — white core → cyan → transparent */}
        <radialGradient id="heat-cz" cx="50%" cy="45%" r="13%">
          <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="0.55"/>
          <stop offset="35%"  stopColor="#22D3EE" stopOpacity="0.38"/>
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="heat-c3" cx="27%" cy="45%" r="17%">
          <stop offset="0%"   stopColor="#22D3EE" stopOpacity="0.38"/>
          <stop offset="55%"  stopColor="#22D3EE" stopOpacity="0.12"/>
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="heat-c4" cx="73%" cy="45%" r="17%">
          <stop offset="0%"   stopColor="#22D3EE" stopOpacity="0.38"/>
          <stop offset="55%"  stopColor="#22D3EE" stopOpacity="0.12"/>
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="heat-bg" cx="50%" cy="45%" r="50%">
          <stop offset="0%"   stopColor="#22D3EE" stopOpacity="0.07"/>
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0"/>
        </radialGradient>
        <clipPath id="skull-clip"><ellipse cx="150" cy="135" rx="103" ry="118"/></clipPath>
        <clipPath id="eeg-wave-clip"><rect x="18" y="237" width="264" height="52"/></clipPath>
        <pattern id="eeg-dot" patternUnits="userSpaceOnUse" width="16" height="16">
          <circle cx="8" cy="8" r="0.5" fill="#22D3EE" fillOpacity="0.07"/>
        </pattern>
      </defs>

      <rect width="300" height="300" fill="url(#eeg-dot)"/>

      {/* Heat map — clipped inside skull */}
      <g clipPath="url(#skull-clip)">
        <rect width="300" height="300" fill="url(#heat-bg)"/>
        <rect width="300" height="300" fill="url(#heat-c3)"/>
        <rect width="300" height="300" fill="url(#heat-c4)"/>
        <rect width="300" height="300" fill="url(#heat-cz)"/>
      </g>

      {/* Skull oval */}
      <ellipse cx="150" cy="135" rx="103" ry="118"
        fill="none" stroke="#22D3EE" strokeWidth="1.6" strokeOpacity="0.65" filter="url(#eeg-glow)"/>
      {/* Reference ticks */}
      <path d="M150 18 L150 22" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" opacity="0.55"/>
      <path d="M150 248 L150 252" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" opacity="0.55"/>
      <path d="M47 135 L51 135" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" opacity="0.55"/>
      <path d="M249 135 L253 135" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" opacity="0.55"/>

      {/* Interhemispheric fissure */}
      <line x1="150" y1="20" x2="150" y2="250"
        stroke="#22D3EE" strokeWidth="0.8" strokeDasharray="5 4" strokeOpacity="0.28"/>

      {/* Sulcal contours */}
      <path d="M82 72 Q114 55 150 53 Q186 55 218 72" fill="none" stroke="#22D3EE" strokeWidth="0.7" strokeOpacity="0.18"/>
      <path d="M50 133 Q88 113 150 110 Q212 113 250 133" fill="none" stroke="#22D3EE" strokeWidth="0.7" strokeOpacity="0.18"/>
      <path d="M64 194 Q100 212 150 214 Q200 212 236 194" fill="none" stroke="#22D3EE" strokeWidth="0.7" strokeOpacity="0.18"/>

      {/* Electrode connections */}
      {[
        [81,135,150,135],[219,135,150,135],
        [150,80,150,135],[150,190,150,135],
        [102,90,150,135],[198,90,150,135],
        [102,180,150,135],[198,180,150,135],
        [81,135,102,90],[219,135,198,90],
        [81,135,102,180],[219,135,198,180],
        [102,90,150,80],[198,90,150,80],
        [102,180,150,190],[198,180,150,190],
        [122,42,102,90],[178,42,198,90],
        [122,42,150,80],[178,42,150,80],
        [122,230,102,180],[178,230,198,180],
        [122,230,150,190],[178,230,150,190],
      ].map(([x1,y1,x2,y2],i)=>(
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#22D3EE" strokeWidth="0.5" strokeOpacity="0.18"/>
      ))}

      {/* Fp1 Fp2 */}
      <circle cx="122" cy="42" r="4" fill="#22D3EE" fillOpacity="0.45" filter="url(#eeg-glow)"/>
      <circle cx="178" cy="42" r="4" fill="#22D3EE" fillOpacity="0.45" filter="url(#eeg-glow)"/>
      {/* F3 Fz F4 */}
      <circle cx="102" cy="90" r="4.5" fill="#22D3EE" fillOpacity="0.55" filter="url(#eeg-glow)"/>
      <circle cx="150" cy="80"  r="5"   fill="#22D3EE" fillOpacity="0.7"  filter="url(#eeg-glow)"
        style={{animation:'illus-glow-blink 2.4s ease-in-out 0.3s infinite'}}/>
      <circle cx="198" cy="90" r="4.5" fill="#22D3EE" fillOpacity="0.55" filter="url(#eeg-glow)"/>
      <text x="150" y="66" textAnchor="middle" fontSize="7" fill="#22D3EE" fillOpacity="0.5" fontFamily="monospace">Fz</text>

      {/* C3 — motor cortex */}
      <circle cx="81" cy="135" r="18" fill="#22D3EE" fillOpacity="0.05" filter="url(#eeg-bloom)"/>
      <circle cx="81" cy="135" r="8" fill="#22D3EE" fillOpacity="0.5" filter="url(#eeg-glow)"
        style={{animation:'illus-glow-blink 1.7s ease-in-out 0.2s infinite'}}/>
      <circle cx="81" cy="135" r="8" fill="none" stroke="#22D3EE" strokeWidth="1.4" strokeOpacity="0.8"/>
      <text x="57" y="139" textAnchor="middle" fontSize="8" fill="#22D3EE" fillOpacity="0.8" fontFamily="monospace" fontWeight="bold">C3</text>

      {/* Cz — peak (white core) */}
      <circle cx="150" cy="135" r="24" fill="#22D3EE" fillOpacity="0.06" filter="url(#eeg-bloom)"
        style={{animation:'illus-glow-blink 1.5s ease-in-out infinite'}}/>
      <circle cx="150" cy="135" r="10" fill="#FFFFFF" fillOpacity="0.7" filter="url(#eeg-glow)"
        style={{animation:'illus-glow-blink 1.5s ease-in-out infinite'}}/>
      <circle cx="150" cy="135" r="10" fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeOpacity="0.9"/>
      <text x="150" y="115" textAnchor="middle" fontSize="8" fill="#22D3EE" fillOpacity="0.85" fontFamily="monospace" fontWeight="bold">Cz</text>

      {/* C4 — motor cortex */}
      <circle cx="219" cy="135" r="18" fill="#22D3EE" fillOpacity="0.05" filter="url(#eeg-bloom)"/>
      <circle cx="219" cy="135" r="8" fill="#22D3EE" fillOpacity="0.5" filter="url(#eeg-glow)"
        style={{animation:'illus-glow-blink 1.7s ease-in-out 0.7s infinite'}}/>
      <circle cx="219" cy="135" r="8" fill="none" stroke="#22D3EE" strokeWidth="1.4" strokeOpacity="0.8"/>
      <text x="243" y="139" textAnchor="middle" fontSize="8" fill="#22D3EE" fillOpacity="0.8" fontFamily="monospace" fontWeight="bold">C4</text>

      {/* Pz P3 P4 */}
      <circle cx="150" cy="190" r="5.5" fill="#22D3EE" fillOpacity="0.6" filter="url(#eeg-glow)"
        style={{animation:'illus-glow-blink 2.4s ease-in-out 0.8s infinite'}}/>
      <text x="150" y="207" textAnchor="middle" fontSize="7" fill="#22D3EE" fillOpacity="0.45" fontFamily="monospace">Pz</text>
      <circle cx="102" cy="180" r="4.5" fill="#22D3EE" fillOpacity="0.5" filter="url(#eeg-glow)"/>
      <circle cx="198" cy="180" r="4.5" fill="#22D3EE" fillOpacity="0.5" filter="url(#eeg-glow)"/>
      {/* O1 O2 */}
      <circle cx="122" cy="230" r="4" fill="#22D3EE" fillOpacity="0.38" filter="url(#eeg-glow)"/>
      <circle cx="178" cy="230" r="4" fill="#22D3EE" fillOpacity="0.38" filter="url(#eeg-glow)"/>

      {/* EEG waveform panel */}
      <rect x="18" y="237" width="264" height="52" rx="5"
        fill="rgba(34,211,238,0.03)" stroke="#22D3EE" strokeWidth="0.7" strokeOpacity="0.28"/>
      <text x="24" y="251" fontSize="6" fill="#22D3EE" fillOpacity="0.45" fontFamily="monospace">Cz</text>
      <text x="24" y="265" fontSize="6" fill="#22D3EE" fillOpacity="0.35" fontFamily="monospace">C3</text>
      <text x="24" y="280" fontSize="6" fill="#22D3EE" fillOpacity="0.28" fontFamily="monospace">C4</text>
      <g clipPath="url(#eeg-wave-clip)" opacity="0.9">
        <path d={makeEEGPath(247, 5.5, 32, 300, 88)}  stroke="#FFFFFF"  strokeWidth="1.2" fill="none" opacity="0.75"/>
        <path d={makeEEGPath(263, 6,   38, 300, 154)} stroke="#22D3EE" strokeWidth="1.1" fill="none"/>
        <path d={makeEEGPath(279, 4.5, 28, 300)}      stroke="#22D3EE" strokeWidth="0.9" fill="none" opacity="0.6"/>
      </g>
    </svg>
  </div>
);

/** Human-Robot Interaction — thin-line diagram, monochrome cyan, BCI hub center */
const HRIIllustration: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden" style={{background:'#070B0F'}}>
    <svg viewBox="0 0 300 300" className="w-full h-full" aria-hidden="true">
      <defs>
        <filter id="hri-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.8" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="hri-bloom" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="14" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="hri-hub-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="0.9"/>
          <stop offset="30%"  stopColor="#22D3EE" stopOpacity="0.75"/>
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="hri-center-amb" cx="50%" cy="50%" r="35%">
          <stop offset="0%"   stopColor="#22D3EE" stopOpacity="0.14"/>
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="hri-beam-l" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#22D3EE" stopOpacity="0"/>
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.55"/>
        </linearGradient>
        <linearGradient id="hri-beam-r" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#22D3EE" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0"/>
        </linearGradient>
        <pattern id="hri-dot" patternUnits="userSpaceOnUse" width="18" height="18">
          <circle cx="9" cy="9" r="0.5" fill="#22D3EE" fillOpacity="0.07"/>
        </pattern>
      </defs>

      <rect width="300" height="300" fill="url(#hri-dot)"/>
      <rect width="300" height="300" fill="url(#hri-center-amb)"/>

      {/* Section divider */}
      <line x1="150" y1="24" x2="150" y2="276"
        stroke="#22D3EE" strokeWidth="0.4" strokeDasharray="3 6" strokeOpacity="0.2"/>

      <text x="22" y="26" fontSize="7.5" fill="#22D3EE" fillOpacity="0.45" fontFamily="monospace" letterSpacing="2">HUMAN</text>
      <text x="278" y="26" textAnchor="end" fontSize="7.5" fill="#22D3EE" fillOpacity="0.45" fontFamily="monospace" letterSpacing="2">ROBOT</text>

      {/* ── HUMAN ARM ── */}
      {/* Shoulder */}
      <circle cx="44" cy="58" r="12" fill="rgba(34,211,238,0.06)" stroke="#22D3EE" strokeWidth="1.4" strokeOpacity="0.7" filter="url(#hri-glow)"/>
      <circle cx="44" cy="58" r="5.5" fill="#22D3EE" fillOpacity="0.4"/>
      <circle cx="44" cy="58" r="2"   fill="#FFFFFF"  fillOpacity="0.55"/>
      {/* Upper arm */}
      <path d="M40 70 Q34 100 32 126 Q31 143 38 158"
        fill="none" stroke="#22D3EE" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.15"/>
      <path d="M40 70 Q34 100 32 126 Q31 143 38 158"
        fill="none" stroke="#22D3EE" strokeWidth="1.8" strokeLinecap="round" filter="url(#hri-glow)" strokeOpacity="0.8"/>
      <path d="M46 72 Q40 101 38 127 Q37 144 43 160"
        fill="none" stroke="#22D3EE" strokeWidth="0.9" strokeLinecap="round" strokeOpacity="0.3"/>
      {/* EMG pads */}
      {([{x:28,y:100},{x:30,y:120},{x:33,y:140}] as {x:number,y:number}[]).map(({x,y},i)=>(
        <g key={i}>
          <rect x={x-4} y={y-3} width="9" height="6" rx="1.5"
            fill="rgba(34,211,238,0.14)" stroke="#22D3EE" strokeWidth="0.8" strokeOpacity="0.7"/>
          <line x1={x+5} y1={y} x2={x+13} y2={y}
            stroke="#22D3EE" strokeWidth="0.6" strokeDasharray="2 2" strokeOpacity="0.4"/>
        </g>
      ))}
      {/* EMG readout */}
      <rect x="50" y="95" width="44" height="22" rx="3"
        fill="rgba(34,211,238,0.04)" stroke="#22D3EE" strokeWidth="0.6" strokeOpacity="0.35"/>
      <path d="M52 106 L56 106 L58 100 L61 112 L64 106 L67 106 L69 101 L72 111 L75 106 L78 106 L80 101 L83 111 L86 106 L92 106"
        fill="none" stroke="#22D3EE" strokeWidth="1" strokeOpacity="0.7" filter="url(#hri-glow)"/>
      <text x="51" y="124" fontSize="5.5" fill="#22D3EE" fillOpacity="0.35" fontFamily="monospace">EMG</text>
      {/* Elbow */}
      <circle cx="38" cy="158" r="10" fill="rgba(34,211,238,0.06)" stroke="#22D3EE" strokeWidth="1.4" strokeOpacity="0.7" filter="url(#hri-glow)"/>
      <circle cx="38" cy="158" r="4.5" fill="#22D3EE" fillOpacity="0.45"/>
      <circle cx="38" cy="158" r="1.8" fill="#FFFFFF" fillOpacity="0.55"/>
      {/* Forearm */}
      <path d="M34 168 Q40 188 50 203 Q56 212 66 218"
        fill="none" stroke="#22D3EE" strokeWidth="3.5" strokeLinecap="round" strokeOpacity="0.15"/>
      <path d="M34 168 Q40 188 50 203 Q56 212 66 218"
        fill="none" stroke="#22D3EE" strokeWidth="1.7" strokeLinecap="round" filter="url(#hri-glow)" strokeOpacity="0.8"/>
      <path d="M42 170 Q47 188 57 204 Q63 213 72 218"
        fill="none" stroke="#22D3EE" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.28"/>
      {/* Wrist */}
      <circle cx="66" cy="218" r="7" fill="rgba(34,211,238,0.06)" stroke="#22D3EE" strokeWidth="1.3" strokeOpacity="0.65" filter="url(#hri-glow)"/>
      {/* Fingers */}
      <path d="M61 224 Q65 236 67 246" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.65"/>
      <path d="M67 226 Q72 237 73 248" fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.55"/>
      <path d="M72 224 Q78 235 79 245" fill="none" stroke="#22D3EE" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.45"/>
      <text x="22" y="272" fontSize="6" fill="#22D3EE" fillOpacity="0.32" fontFamily="monospace">NEURAL SIGNAL</text>

      {/* ── ROBOT ARM ── */}
      {/* Mount */}
      <rect x="242" y="40" width="34" height="8" rx="2"
        fill="rgba(34,211,238,0.08)" stroke="#22D3EE" strokeWidth="1.2" strokeOpacity="0.6" filter="url(#hri-glow)"/>
      {[246,252,258,264,270].map(x=>(
        <circle key={x} cx={x} cy="44" r="1.3" fill="#22D3EE" fillOpacity="0.5"/>
      ))}
      {/* Shoulder servo */}
      <rect x="244" y="48" width="28" height="18" rx="3"
        fill="rgba(34,211,238,0.07)" stroke="#22D3EE" strokeWidth="1.3" strokeOpacity="0.65" filter="url(#hri-glow)"/>
      <line x1="248" y1="53" x2="268" y2="53" stroke="#22D3EE" strokeWidth="0.6" strokeOpacity="0.4"/>
      <line x1="248" y1="58" x2="268" y2="58" stroke="#22D3EE" strokeWidth="0.6" strokeOpacity="0.4"/>
      <circle cx="258" cy="57" r="3" fill="#22D3EE" fillOpacity="0.45" filter="url(#hri-glow)"/>
      {/* Upper arm tube */}
      <rect x="250" y="66" width="16" height="72" rx="3"
        fill="rgba(34,211,238,0.06)" stroke="#22D3EE" strokeWidth="1.4" strokeOpacity="0.65" filter="url(#hri-glow)"/>
      <line x1="253" y1="68" x2="253" y2="136" stroke="#22D3EE" strokeWidth="0.6" strokeOpacity="0.35"/>
      {[80,96,112,128].map(y=>(
        <line key={y} x1="250" y1={y} x2="266" y2={y} stroke="#22D3EE" strokeWidth="0.4" strokeOpacity="0.25"/>
      ))}
      {/* Elbow */}
      <rect x="243" y="138" width="30" height="20" rx="4"
        fill="rgba(34,211,238,0.07)" stroke="#22D3EE" strokeWidth="1.4" strokeOpacity="0.65" filter="url(#hri-glow)"/>
      <circle cx="258" cy="148" r="6" fill="rgba(34,211,238,0.18)" stroke="#22D3EE" strokeWidth="1.2" filter="url(#hri-glow)"/>
      <circle cx="258" cy="148" r="2.5" fill="#22D3EE" fillOpacity="0.7"/>
      {/* Forearm */}
      <path d="M256 158 L240 216"
        stroke="#22D3EE" strokeWidth="10" strokeLinecap="round" strokeOpacity="0.08"/>
      <path d="M256 158 L240 216"
        stroke="#22D3EE" strokeWidth="2.2" strokeLinecap="round" filter="url(#hri-glow)" strokeOpacity="0.75"/>
      <path d="M253 160 L237 216"
        stroke="#22D3EE" strokeWidth="0.7" strokeLinecap="round" strokeOpacity="0.3"/>
      {/* Circuit traces */}
      <path d="M248 174 L236 174 L236 184 L226 184" fill="none" stroke="#22D3EE" strokeWidth="0.8" strokeOpacity="0.4"/>
      <path d="M246 190 L234 190 L234 200 L224 200" fill="none" stroke="#22D3EE" strokeWidth="0.8" strokeOpacity="0.4"/>
      <circle cx="226" cy="184" r="2" fill="#22D3EE" fillOpacity="0.6" filter="url(#hri-glow)"/>
      <circle cx="224" cy="200" r="2" fill="#22D3EE" fillOpacity="0.6" filter="url(#hri-glow)"/>
      {/* Wrist */}
      <circle cx="240" cy="216" r="9" fill="rgba(34,211,238,0.07)" stroke="#22D3EE" strokeWidth="1.4" strokeOpacity="0.65" filter="url(#hri-glow)"/>
      <circle cx="240" cy="216" r="4" fill="#22D3EE" fillOpacity="0.4"/>
      {/* Gripper */}
      <path d="M234 223 L224 240" stroke="#22D3EE" strokeWidth="3.5" strokeLinecap="round" strokeOpacity="0.6" filter="url(#hri-glow)"/>
      <path d="M240 226 L234 244" stroke="#22D3EE" strokeWidth="2.8" strokeLinecap="round" strokeOpacity="0.55" filter="url(#hri-glow)"/>
      <path d="M246 224 L244 242" stroke="#22D3EE" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.5" filter="url(#hri-glow)"/>
      <text x="278" y="272" textAnchor="end" fontSize="6" fill="#22D3EE" fillOpacity="0.32" fontFamily="monospace">SERVO CONTROL</text>

      {/* ── BCI HUB (center) ── */}
      {/* Beams */}
      <rect x="88" y="147" width="58" height="5" rx="2.5" fill="url(#hri-beam-l)" opacity="0.7"/>
      <rect x="154" y="147" width="58" height="5" rx="2.5" fill="url(#hri-beam-r)" opacity="0.7"/>

      {/* Bloom */}
      <circle cx="150" cy="150" r="44" fill="#22D3EE" fillOpacity="0.04" filter="url(#hri-bloom)"
        style={{animation:'illus-glow-blink 2.2s ease-in-out infinite'}}/>

      {/* Orbit rings */}
      <circle cx="150" cy="150" r="36" fill="none" stroke="#22D3EE" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="4 7"/>
      <circle cx="150" cy="150" r="26" fill="none" stroke="#22D3EE" strokeWidth="0.7" strokeOpacity="0.28"/>
      {/* Tick marks */}
      {[0,60,120,180,240,300].map(deg=>{
        const r = deg*Math.PI/180;
        return <line key={deg}
          x1={150+33*Math.cos(r)} y1={150+33*Math.sin(r)}
          x2={150+37*Math.cos(r)} y2={150+37*Math.sin(r)}
          stroke="#22D3EE" strokeWidth="0.9" strokeOpacity="0.38"/>;
      })}

      {/* BCI chip */}
      <rect x="134" y="134" width="32" height="32" rx="4"
        fill="rgba(34,211,238,0.08)" stroke="#22D3EE" strokeWidth="1.5" strokeOpacity="0.8" filter="url(#hri-glow)"/>
      {[139,144,149,154,159].map(x=>(
        <line key={x} x1={x} y1="136" x2={x} y2="164" stroke="#22D3EE" strokeWidth="0.35" strokeOpacity="0.22"/>
      ))}
      {[139,144,149,154,159].map(y=>(
        <line key={y} x1="136" y1={y} x2="164" y2={y} stroke="#22D3EE" strokeWidth="0.35" strokeOpacity="0.22"/>
      ))}
      {/* Chip pins — all cyan */}
      {[138,144,150,156,162].map(y=>(
        <g key={y}>
          <line x1="134" y1={y} x2="128" y2={y} stroke="#22D3EE" strokeWidth="0.8" strokeOpacity="0.48"/>
          <line x1="166" y1={y} x2="172" y2={y} stroke="#22D3EE" strokeWidth="0.8" strokeOpacity="0.48"/>
        </g>
      ))}
      {/* Core */}
      <circle cx="150" cy="150" r="7" fill="url(#hri-hub-grad)" filter="url(#hri-glow)"
        style={{animation:'illus-glow-blink 1.6s ease-in-out infinite'}}/>
      <text x="150" y="180" textAnchor="middle" fontSize="6.5" fill="#22D3EE" fillOpacity="0.45" fontFamily="monospace" letterSpacing="2">BCI</text>

      {/* Signal dots — left (human→hub) */}
      {[0,1,2].map(i=>(
        <circle key={i} cx={96+i*18} cy="149" r="3"
          fill="#22D3EE" filter="url(#hri-glow)"
          style={{animation:`illus-glow-blink 1.5s ease-in-out ${i*0.35}s infinite`}}/>
      ))}
      {/* Signal dots — right (hub→robot) */}
      {[0,1,2].map(i=>(
        <circle key={i} cx={162+i*18} cy="149" r="3"
          fill="#22D3EE" filter="url(#hri-glow)"
          style={{animation:`illus-glow-blink 1.5s ease-in-out ${0.75+i*0.35}s infinite`}}/>
      ))}
    </svg>
  </div>
);

const FEATURED_CARDS: CardData[] = [
  {
    Illustration: VRRehabIllustration,
    title:        'VR BASED REHABILITATION SYSTEM',
    subtitle:     'Stroke Recovery · VR · Body Ownership Illusion',
    overlayLabel: 'PATENTS',
    overlayValue: '1 US ISSUED · 1 KR PENDING',
    href:         '/vr-rehabilitation',
  },
  {
    Illustration: EEGIllustration,
    title:        'EEG BASED NEUROFEEDBACK SYSTEM',
    subtitle:     'BCI · Motor Imagery · Closed-Loop Feedback',
    overlayLabel: 'PUBLICATIONS',
    overlayValue: '5 SCI-INDEXED',
    href:         '/eeg-neurofeedback',
  },
  {
    Illustration: HRIIllustration,
    title:        'HUMAN-ROBOT INTERACTION',
    subtitle:     'Exoskeleton · Assist-as-Needed · HRI',
    overlayLabel: 'AWARD',
    overlayValue: 'IEEE BEST PAPER 2023',
    href:         '/human-robot-interaction',
  },
];

// — CTA / Contact —————————————————————————————————————————————————————————————
const CTA_ACCENT = "Let's connect";
const CTA_LINES  = ['READ THE WORK.', 'FOLLOW THE RESEARCH.', 'CONNECT & COLLABORATE.'];

// — Video sources (Pexels free stock — no attribution required) ───────────────
const VIDEOS = {
  // Gold/teal 3D neural fiber network
  hero:  'https://videos.pexels.com/video-files/37101560/15717707_1920_1080_30fps.mp4',
  // Orange glowing neurons with synaptic connections
  about: 'https://videos.pexels.com/video-files/29184317/12601884_1920_1080_30fps.mp4',
  // Cyan biological cell structures (clean, clinical feel)
  cta:   'https://videos.pexels.com/video-files/34913011/14789433_1920_1080_30fps.mp4',
};

// ═══════════════════════════════════════════════════════════════════════════════
//  REUSABLE COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

// ─── EEG waveform path generator ─────────────────────────────────────────────
function makeEEGPath(
  cy: number, amp: number, period: number, totalW: number, spikeAt = -1,
): string {
  const q = period / 4;
  let d = `M0,${cy}`;
  let x = 0;
  let spiked = false;

  while (x < totalW) {
    const half   = x + period / 2;
    const full   = x + period;
    const q1     = x + q;
    const q3     = half + q;

    if (!spiked && spikeAt > x && spikeAt < full) {
      // Arch up to just before spike
      d += ` C${q1.toFixed(1)},${(cy - amp).toFixed(1)} ${q1.toFixed(1)},${(cy - amp).toFixed(1)} ${(spikeAt - 5).toFixed(1)},${cy}`;
      // Sharp spike: up → overshoot down → settle
      d += ` L${spikeAt},${(cy - amp * 4.2).toFixed(1)} L${(spikeAt + 3).toFixed(1)},${(cy + amp * 2.8).toFixed(1)} L${(spikeAt + 9).toFixed(1)},${cy}`;
      // Down arch to end of period
      const q3s = spikeAt + 9 + q;
      d += ` C${q3s.toFixed(1)},${(cy + amp).toFixed(1)} ${(full - q).toFixed(1)},${(cy + amp).toFixed(1)} ${Math.min(full, totalW).toFixed(1)},${cy}`;
      spiked = true;
    } else {
      // Normal arch up
      const halfC = Math.min(half, totalW);
      d += ` C${q1.toFixed(1)},${(cy - amp).toFixed(1)} ${(half - q).toFixed(1)},${(cy - amp).toFixed(1)} ${halfC.toFixed(1)},${cy}`;
      if (half >= totalW) break;
      // Normal arch down
      const fullC = Math.min(full, totalW);
      d += ` C${q3.toFixed(1)},${(cy + amp).toFixed(1)} ${(full - q).toFixed(1)},${(cy + amp).toFixed(1)} ${fullC.toFixed(1)},${cy}`;
      if (full >= totalW) break;
    }
    x += period;
  }
  return d;
}

// ─── EEG multi-channel decoration (Fp1 · C3 · Cz · C4) ──────────────────────
const EEG_CHANNELS = [
  { label: 'Fp1', cy: 13, amp: 4,  period: 42,  spike: 310 },   // frontal: beta, fast
  { label: 'C3',  cy: 33, amp: 12, period: 88,  spike: 580 },   // left motor cortex: alpha
  { label: 'Cz',  cy: 57, amp: 11, period: 95,  spike: 420 },   // central: alpha + K-complex
  { label: 'C4',  cy: 77, amp: 9,  period: 80,  spike: 850 },   // right motor cortex: alpha
] as const;

const EEGDecoration: React.FC<{ className?: string }> = ({ className = '' }) => {
  const W = 1200;
  return (
    <div className={`pointer-events-none select-none ${className}`} style={{ width: '100%', height: '100%' }}>
      <svg
        viewBox={`0 0 ${W} 90`}
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Tick grid lines (1-second marks) */}
        {[200, 400, 600, 800, 1000].map((x) => (
          <line
            key={x} x1={x} y1="0" x2={x} y2="90"
            stroke="#22D3EE" strokeWidth="0.4" strokeOpacity="0.25" strokeDasharray="2 4"
          />
        ))}

        {/* Channel traces */}
        {EEG_CHANNELS.map(({ cy, amp, period, spike }, i) => (
          <path
            key={i}
            d={makeEEGPath(cy, amp, period, W, spike)}
            stroke="#22D3EE"
            strokeWidth={i === 1 || i === 2 ? '1.2' : '0.85'}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {/* Channel labels (left edge) */}
        {EEG_CHANNELS.map(({ label, cy }, i) => (
          <text
            key={`lbl-${i}`}
            x="4" y={cy + 3}
            fontSize="7" fill="#22D3EE" fillOpacity="0.65"
            fontFamily="ui-monospace, SFMono-Regular, monospace"
            letterSpacing="0.6"
          >
            {label}
          </text>
        ))}
      </svg>
    </div>
  );
};

// ─── Glass icon button (circular) ────────────────────────────────────────────
const GlassIconBtn: React.FC<{
  href:     string;
  label:    string;
  children: React.ReactNode;
}> = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    className="
      liquid-glass w-10 h-10 rounded-full
      flex items-center justify-center shrink-0
      text-cream/70 hover:text-neon
      transition-colors duration-200
    "
  >
    {children}
  </a>
);

// ─── Featured research card ───────────────────────────────────────────────────
const FeaturedCard: React.FC<CardData> = ({
  Illustration, title, subtitle, overlayLabel, overlayValue, href,
}) => (
  <article className="
    liquid-glass rounded-2xl overflow-hidden group cursor-pointer
    hover:scale-[1.012] transition-transform duration-300 ease-out
  ">
    {/* Square illustration area */}
    <div className="relative aspect-square">
      <Illustration />
      {/* Purple arrow button — navigates to research detail page */}
      <div className="absolute top-3 right-3 z-10">
        <Link
          to={href}
          aria-label={`View ${title}`}
          className="
            w-9 h-9 rounded-full bg-[#7C3AED]
            flex items-center justify-center text-white shrink-0
            group-hover:bg-neon group-hover:text-background
            transition-colors duration-300
          "
        >
          <ArrowUpRight size={15} strokeWidth={2.5} />
        </Link>
      </div>
    </div>

    {/* Card label block — also navigates on click */}
    <Link to={href} className="block px-4 pt-4 pb-3 space-y-[4px]">
      <p className="font-grotesk text-cream tracking-wide leading-tight text-[0.88rem]">
        {title}
      </p>
      <p className="font-mono text-cream/40 text-[10px] tracking-widest">
        {subtitle}
      </p>
    </Link>

    {/* Bottom info bar */}
    <div className="liquid-glass mx-3 mb-3 px-4 py-[10px] rounded-xl flex items-center justify-between gap-3">
      <span className="font-mono text-cream/35 text-[8.5px] tracking-[0.22em] uppercase shrink-0">
        {overlayLabel}
      </span>
      <span className="font-grotesk text-cream text-[0.8rem] tracking-wide text-right leading-tight">
        {overlayValue}
      </span>
    </div>
  </article>
);

// ═══════════════════════════════════════════════════════════════════════════════
//  APP
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Landing page (home route) ────────────────────────────────────────────────
function HomePage() {
  return (
    <div className="bg-background text-cream min-h-screen overflow-x-hidden">

      {/* ── Texture / grain overlay (fixed, pointer-events-none) ── */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-50 pointer-events-none"
        style={{
          backgroundImage:  `url("${GRAIN_TEXTURE}")`,
          backgroundRepeat: 'repeat',
          backgroundSize:   '300px 300px',
          mixBlendMode:     'lighten' as React.CSSProperties['mixBlendMode'],
          opacity:          0.55,
        }}
      />

      {/* ════════════════════════════════════════════════════════════════════
          §1  HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section
        id="home"
        className="
          relative min-h-screen overflow-hidden
          rounded-b-[2.5rem] md:rounded-b-[3.5rem] lg:rounded-b-[5rem]
        "
      >
        {/* Fullbleed background video */}
        <video
          src={VIDEOS.hero}
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/85" />

        {/* EEG montage — 4-channel neural signal decoration */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0"
          style={{ top: '32%', height: '90px', opacity: 0.18 }}
        >
          <EEGDecoration />
        </div>

        {/* Content container */}
        <div className="relative z-10 max-w-8xl mx-auto px-5 md:px-10 flex flex-col min-h-screen">

          {/* ── Navbar ── */}
          <header className="flex items-center justify-between pt-6 md:pt-8 shrink-0">

            {/* Left: name logo */}
            <span className="font-grotesk text-cream text-sm md:text-[0.95rem] tracking-[0.22em] select-none">
              {PERSON.name.toUpperCase()}
            </span>

            {/* Center: nav pill — hidden on mobile */}
            <nav
              aria-label="Primary navigation"
              className="hidden md:flex liquid-glass rounded-full px-7 py-[11px] gap-6 lg:gap-8 items-center"
            >
              {NAV_ITEMS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="
                    font-grotesk text-cream/55 hover:text-cream
                    text-[10px] lg:text-[11px] tracking-[0.28em]
                    transition-colors duration-200 whitespace-nowrap
                  "
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Right: social icons — desktop */}
            <div className="hidden md:flex items-center gap-2">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <GlassIconBtn key={label} href={href} label={label}>
                  <Icon size={16} />
                </GlassIconBtn>
              ))}
            </div>

            {/* Mobile: hamburger stub */}
            <div
              aria-hidden="true"
              className="
                md:hidden liquid-glass w-10 h-10 rounded-full
                flex flex-col items-center justify-center gap-[5px] cursor-pointer
              "
            >
              <span className="w-[18px] h-px bg-cream/80 block rounded-full" />
              <span className="w-[18px] h-px bg-cream/80 block rounded-full" />
            </div>
          </header>

          {/* ── Hero body — anchored to bottom ── */}
          <div className="flex-1 flex flex-col justify-end pb-14 md:pb-20 lg:pb-24">

            {/* Cursive accent */}
            <p
              className="font-condiment text-neon leading-none mb-3 md:mb-5"
              style={{ fontSize: 'clamp(1.8rem, 2.4vw, 2.6rem)' }}
            >
              {HERO_ACCENT}
            </p>

            {/* Main display heading */}
            <h1
              className="font-grotesk text-cream uppercase leading-[0.9] tracking-tight mb-8 md:mb-12"
              style={{ fontSize: 'clamp(3rem, 8.8vw, 9rem)' }}
            >
              {HERO_LINES.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>

            {/* Mobile: social icons below heading */}
            <div className="flex md:hidden items-center gap-2 mb-6">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <GlassIconBtn key={label} href={href} label={label}>
                  <Icon size={16} />
                </GlassIconBtn>
              ))}
            </div>

            {/* Subtext */}
            <p className="font-mono text-cream/35 text-[9px] md:text-[10px] tracking-[0.4em] uppercase">
              {HERO_SUBTEXT}
            </p>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          §2  ABOUT
      ════════════════════════════════════════════════════════════════════ */}
      <section id="about" className="relative min-h-screen overflow-hidden">

        {/* Fullbleed background video */}
        <video
          src={VIDEOS.about}
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/[0.72]" />

        {/* Content container */}
        <div className="relative z-10 max-w-8xl mx-auto px-5 md:px-10 min-h-screen flex flex-col">
          <div className="flex-1 flex flex-col justify-between pt-20 md:pt-28 pb-14 md:pb-16">

            {/* ── Top two-column row ── */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-16">

              {/* Left: heading + condiment accent */}
              <div className="md:w-1/2 flex flex-col gap-2">
                <h2
                  className="font-grotesk text-cream uppercase leading-none tracking-tight"
                  style={{ fontSize: 'clamp(2.2rem, 5.5vw, 6rem)' }}
                >
                  {ABOUT_HEADING.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h2>
                <span
                  className="font-condiment text-neon leading-none"
                  style={{ fontSize: 'clamp(2.2rem, 5.5vw, 6rem)' }}
                >
                  {ABOUT_ACCENT}
                </span>
              </div>

              {/* Right: research statement */}
              <div className="md:w-1/2 flex md:justify-end md:items-start md:pt-3">
                <p
                  className="
                    font-mono text-cream/55 tracking-widest leading-loose
                    uppercase whitespace-pre-line
                    text-left md:text-right max-w-[22rem]
                  "
                  style={{ fontSize: 'clamp(0.58rem, 0.9vw, 0.73rem)' }}
                >
                  {ABOUT_STMT}
                </p>
              </div>

            </div>

            {/* ── Bottom: decorative keyword rows ── */}
            <div
              aria-hidden="true"
              className="overflow-hidden mt-12 md:mt-0 space-y-[3px]"
            >
              {[0, 1].map((i) => (
                <p
                  key={i}
                  className="font-grotesk text-cream uppercase select-none whitespace-nowrap tracking-[0.1em]"
                  style={{
                    opacity:   0.045,
                    fontSize:  'clamp(1rem, 2.8vw, 3.2rem)',
                    transform: i === 1 ? 'translateX(-60px)' : undefined,
                  }}
                >
                  {ABOUT_KEYWORDS} · {ABOUT_KEYWORDS} ·
                </p>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          §3  FEATURED WORK GRID
      ════════════════════════════════════════════════════════════════════ */}
      <section id="research" className="relative bg-background py-20 md:py-28 lg:py-32 overflow-hidden">
        {/* Depth glows */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(34,211,238,0.045) 0%, transparent 70%),' +
              'radial-gradient(ellipse 50% 50% at 10% 100%, rgba(124,58,237,0.055) 0%, transparent 60%),' +
              'radial-gradient(ellipse 40% 40% at 90% 60%, rgba(34,211,238,0.025) 0%, transparent 55%)',
          }}
        />
        <div className="relative z-10 max-w-8xl mx-auto px-5 md:px-10">

          {/* ── Section header ── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 lg:mb-20 gap-6">

            {/* Left: section title */}
            <div className="leading-none">
              <h2
                className="font-grotesk text-cream uppercase tracking-tight leading-none"
                style={{ fontSize: 'clamp(2.8rem, 6.5vw, 7.5rem)' }}
              >
                SELECTED
              </h2>
              <span
                className="font-condiment text-neon leading-none block -mt-1 md:-mt-2 lg:-mt-3"
                style={{ fontSize: 'clamp(2.8rem, 6.5vw, 7.5rem)' }}
              >
                Research
              </span>
            </div>

            {/* Right: CTA with neon underline */}
            <div className="flex flex-col items-start md:items-end gap-[5px] pb-1 md:pb-4">
              <a
                href="#"
                className="
                  font-grotesk text-cream hover:text-neon
                  transition-colors duration-200 uppercase tracking-tight leading-none
                "
                style={{ fontSize: 'clamp(1.8rem, 3.8vw, 4.5rem)' }}
              >
                VIEW FULL CV
              </a>
              <div className="h-[2.5px] bg-neon w-full rounded-full" />
            </div>

          </div>

          {/* ── Card grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {FEATURED_CARDS.map((card, i) => (
              <FeaturedCard key={i} {...card} />
            ))}
          </div>

        </div>
      </section> {/* /research */}

      {/* ════════════════════════════════════════════════════════════════════
          §4  FINAL CTA / CONTACT
      ════════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="relative bg-background">
        {/*
          min-h on the wrapper guarantees the overlay content fits even when
          the landscape video is short (e.g. ~211 px on a 375 px mobile).
          On wider screens the video is naturally taller so the min-h is irrelevant.
        */}
        <div className="relative min-h-[520px] md:min-h-0">

          {/* Native-aspect video — no object-cover */}
          <video
            src={VIDEOS.cta}
            autoPlay loop muted playsInline
            className="w-full h-auto block"
          />

          {/* Gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/30 to-transparent" />

          {/* Text + social overlay */}
          <div className="
            absolute inset-0 flex flex-col justify-end
            px-6 py-8 md:px-14 md:py-14 lg:px-20 lg:py-20
          ">
            {/* Cursive accent */}
            <p
              className="font-condiment text-neon leading-none mb-3 md:mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 4rem)' }}
            >
              {CTA_ACCENT}
            </p>

            {/* Main CTA heading */}
            <h2
              className="
                font-grotesk text-cream uppercase
                leading-[0.88] tracking-tight mb-8 md:mb-14
              "
              style={{ fontSize: 'clamp(1.9rem, 6vw, 7.5rem)' }}
            >
              {CTA_LINES.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>

            {/* Vertical liquid-glass icon stack */}
            <div className="liquid-glass rounded-2xl flex flex-col items-center w-11 md:w-12 shrink-0">
              {SOCIAL_LINKS.map(({ Icon, href, label }, i) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="
                    w-11 h-11 md:w-12 md:h-12 flex items-center justify-center shrink-0
                    text-cream/60 hover:text-neon transition-colors duration-200
                  "
                  style={
                    i < SOCIAL_LINKS.length - 1
                      ? { borderBottom: '1px solid rgba(255,255,255,0.06)' }
                      : undefined
                  }
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

// ─── Root app — router outlet ─────────────────────────────────────────────────
export default function App() {
  return (
    <Routes>
      <Route path="/"                       element={<HomePage />} />
      <Route path="/vr-rehabilitation"      element={<VRRehabilitation />} />
      <Route path="/eeg-neurofeedback"      element={<EEGNeurofeedback />} />
      <Route path="/human-robot-interaction" element={<HumanRobotInteraction />} />
    </Routes>
  );
}
