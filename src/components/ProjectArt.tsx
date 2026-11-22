import type { ReactNode } from "react";
import type { Project } from "@/lib/projects";

type SceneProps = {
  id: string;
  a: string;
  b: string;
};

function Valley({ id, a, b }: SceneProps) {
  return (
    <>
      <circle cx="620" cy="160" r="190" fill={`url(#${id}-glow)`} opacity="0.8" />
      <circle cx="620" cy="160" r="58" fill={a} opacity="0.9" />
      <circle cx="620" cy="160" r="82" fill="none" stroke={a} strokeOpacity="0.22" />
      <circle cx="620" cy="160" r="108" fill="none" stroke={a} strokeOpacity="0.1" />

      <path d="M0 350 L110 245 L220 330 L330 205 L455 335 L590 230 L800 345 L800 600 L0 600Z" fill="#0e0e13" />
      <path d="M0 430 L150 320 L285 415 L420 305 L555 405 L700 320 L800 395 L800 600 L0 600Z" fill="#14141a" />
      <path d="M0 500 L170 400 L320 490 L480 390 L640 485 L800 415 L800 600 L0 600Z" fill="#0a0a0e" />

      <path
        d="M330 600 C365 520 330 480 385 430 C420 400 430 380 438 350"
        stroke={b}
        strokeOpacity="0.26"
        strokeWidth="34"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M330 600 C365 520 330 480 385 430 C420 400 430 380 438 350"
        stroke={b}
        strokeOpacity="0.6"
        strokeWidth="2"
        fill="none"
      />

      <g fill="#08080b">
        <path d="M120 470 l16 -44 l16 44z" />
        <path d="M168 482 l13 -36 l13 36z" />
        <path d="M560 470 l18 -50 l18 50z" />
        <path d="M612 482 l13 -36 l13 36z" />
        <path d="M700 455 l15 -40 l15 40z" />
      </g>
      <g stroke={a} strokeOpacity="0.4" strokeWidth="1.5">
        <path d="M120 470 l16 -44 l16 44z" fill={a} fillOpacity="0.08" />
        <path d="M560 470 l18 -50 l18 50z" fill={a} fillOpacity="0.08" />
        <path d="M700 455 l15 -40 l15 40z" fill={a} fillOpacity="0.08" />
      </g>

      <g>
        <path d="M430 432 l26 -22 l26 22 v34 h-52z" fill="#0b0b0f" />
        <path d="M426 414 l30 -18 l30 18z" fill="#15151b" stroke={b} strokeOpacity="0.3" />
        <rect x="448" y="440" width="10" height="10" fill={a} opacity="0.8" />
        <rect x="466" y="440" width="6" height="6" fill={a} opacity="0.4" />
      </g>

      <g fill="#f4f0e6" opacity="0.35">
        <circle cx="120" cy="120" r="1.6" />
        <circle cx="220" cy="70" r="1.1" />
        <circle cx="350" cy="140" r="1.4" />
        <circle cx="500" cy="80" r="1" />
        <circle cx="740" cy="110" r="1.5" />
      </g>

      <ellipse cx="390" cy="470" rx="430" ry="80" fill="#f4f0e6" opacity="0.025" />
    </>
  );
}

function Apartment({ id, a, b }: SceneProps) {
  return (
    <>
      <rect x="0" y="0" width="800" height="600" fill={`url(#${id}-sky)`} />
      <rect x="64" y="64" width="672" height="392" fill="#0f0f14" stroke="#f4f0e6" strokeOpacity="0.06" />

      <path d="M0 460 H800" stroke="#f4f0e6" strokeOpacity="0.1" />
      <g stroke="#f4f0e6" strokeOpacity="0.05">
        <path d="M400 460 L80 600" />
        <path d="M400 460 L240 600" />
        <path d="M400 460 L560 600" />
        <path d="M400 460 L720 600" />
      </g>

      <rect x="505" y="140" width="170" height="340" fill="#060608" stroke="#f4f0e6" strokeOpacity="0.14" />
      <path d="M522 155 H658 V465 H522Z" fill="#1b1711" />
      <path d="M658 155 L700 182 V440 L658 465Z" fill="#0c0b09" />
      <path d="M522 465 L658 465 L768 600 L382 600Z" fill={`url(#${id}-beam)`} opacity="0.6" />

      <line x1="252" y1="0" x2="252" y2="118" stroke="#f4f0e6" strokeOpacity="0.18" />
      <circle cx="252" cy="140" r="66" fill={`url(#${id}-glow)`} opacity="0.5" />
      <circle cx="252" cy="136" r="13" fill={a} />

      <ellipse cx="620" cy="306" rx="21" ry="25" fill="#040405" />
      <path d="M596 332 Q620 316 644 332 L660 470 L580 470Z" fill="#040405" />
      <path d="M600 344 Q570 380 566 438" stroke="#040405" strokeWidth="13" fill="none" strokeLinecap="round" />
      <path d="M640 344 Q672 382 676 430" stroke="#040405" strokeWidth="13" fill="none" strokeLinecap="round" />

      <g fill="none" stroke="#f4f0e6" strokeOpacity="0.14">
        <rect x="120" y="190" width="86" height="112" />
        <rect x="132" y="202" width="62" height="88" fill="#141419" />
        <rect x="330" y="210" width="104" height="70" />
        <rect x="344" y="224" width="76" height="42" fill="#141419" />
      </g>

      <rect x="330" y="392" width="150" height="8" rx="4" fill="#1a1a20" />
      <rect x="350" y="400" width="6" height="60" fill="#101014" />
      <rect x="452" y="400" width="6" height="60" fill="#101014" />

      <g fill={a} opacity="0.5">
        <circle cx="300" cy="250" r="1.4" />
        <circle cx="330" cy="310" r="1" />
        <circle cx="440" cy="280" r="1.2" />
        <circle cx="480" cy="360" r="1.5" />
        <circle cx="560" cy="250" r="1" />
      </g>

      <circle cx="90" cy="520" r="120" fill={`url(#${id}-glow)`} opacity="0.25" />
    </>
  );
}

function Cipher({ id, a, b }: SceneProps) {
  const nodes: Array<[number, number, string]> = [
    [180, 170, a],
    [620, 210, b],
    [230, 450, b],
    [600, 440, a],
    [400, 100, a],
    [400, 500, b],
  ];

  return (
    <>
      <rect width="800" height="600" fill={`url(#${id}-sky)`} />
      <rect width="800" height="600" fill={`url(#${id}-grid)`} opacity="0.8" />

      <circle cx="400" cy="300" r="214" fill="none" stroke={a} strokeOpacity="0.12" />
      <circle cx="400" cy="300" r="164" fill="none" stroke={a} strokeOpacity="0.28" strokeDasharray="3 11" />
      <circle cx="400" cy="300" r="110" fill="none" stroke={b} strokeOpacity="0.45" />
      <circle cx="400" cy="300" r="66" fill="none" stroke={b} strokeOpacity="0.18" strokeDasharray="2 7" />

      <g stroke="#f4f0e6" strokeOpacity="0.12">
        {nodes.map(([x, y], index) => (
          <line key={index} x1="400" y1="300" x2={x} y2={y} />
        ))}
      </g>
      {nodes.map(([x, y, color], index) => (
        <g key={index}>
          <circle cx={x} cy={y} r="18" fill={color} opacity="0.1" />
          <circle cx={x} cy={y} r="5" fill={color} />
        </g>
      ))}

      <path d="M400 232 L452 300 L400 368 L348 300Z" fill={`url(#${id}-acc)`} opacity="0.9" />
      <path d="M400 250 L430 300 L400 350 L370 300Z" fill="#08080b" />
      <circle cx="400" cy="300" r="9" fill={b} />

      <path d="M232 300 A168 168 0 0 1 300 176" fill="none" stroke={b} strokeWidth="2" strokeOpacity="0.6" />
      <path d="M568 300 A168 168 0 0 1 500 424" fill="none" stroke={a} strokeWidth="2" strokeOpacity="0.6" />

      <g fill="#f4f0e6" opacity="0.3" fontFamily="JetBrains Mono Variable, monospace" fontSize="11" letterSpacing="2">
        <text x="92" y="120">0x1A / TURN 04</text>
        <text x="556" y="92">REBEL.EXE</text>
        <text x="620" y="520">0101 1010</text>
        <text x="110" y="520">UPRISING 62%</text>
        <text x="356" y="560">NODE_07</text>
      </g>
      <g fill={a} opacity="0.5" fontFamily="JetBrains Mono Variable, monospace" fontSize="10">
        <text x="66" y="300">+1</text>
        <text x="716" y="300">+1</text>
      </g>
    </>
  );
}

function Platformer({ id, a, b }: SceneProps) {
  return (
    <>
      <rect width="800" height="600" fill={`url(#${id}-sky)`} />
      <circle cx="648" cy="126" r="150" fill={`url(#${id}-glow)`} opacity="0.55" />
      <circle cx="648" cy="126" r="38" fill={b} opacity="0.8" />

      <g fill="#f4f0e6" opacity="0.04">
        <ellipse cx="180" cy="150" rx="90" ry="24" />
        <ellipse cx="420" cy="90" rx="70" ry="18" />
        <ellipse cx="560" cy="210" rx="60" ry="15" />
      </g>

      <g>
        <path d="M70 420 L250 396 L330 442 L150 476Z" fill="#1a2028" />
        <path d="M150 476 L330 442 L306 512 L180 532Z" fill="#0c1015" />
        <path d="M70 420 L250 396 L242 410 L92 434Z" fill={a} opacity="0.45" />
      </g>
      <g>
        <path d="M410 300 L540 282 L604 318 L474 340Z" fill="#1a2028" />
        <path d="M474 340 L604 318 L586 370 L486 390Z" fill="#0c1015" />
        <path d="M410 300 L540 282 L534 294 L426 312Z" fill={a} opacity="0.45" />
      </g>
      <g>
        <path d="M596 430 L716 414 L770 444 L650 462Z" fill="#1a2028" />
        <path d="M650 462 L770 444 L752 486 L664 500Z" fill="#0c1015" />
        <path d="M596 430 L716 414 L710 424 L610 440Z" fill={a} opacity="0.4" />
      </g>

      <path
        d="M263 340 Q360 150 500 286"
        fill="none"
        stroke={b}
        strokeWidth="2"
        strokeDasharray="3 9"
        opacity="0.65"
      />

      <g>
        <rect x="248" y="348" width="30" height="48" rx="14" fill={a} />
        <circle cx="263" cy="334" r="15" fill={a} />
        <rect x="252" y="328" width="24" height="9" rx="4" fill="#08080b" opacity="0.45" />
        <path d="M256 396 l-8 12 M270 396 l8 12" stroke={a} strokeWidth="4" strokeLinecap="round" />
      </g>

      <g fill={b}>
        <path d="M540 232 l17 26 -17 26 -17 -26z" />
        <path d="M470 356 l11 17 -11 17 -11 -17z" opacity="0.7" />
        <path d="M668 300 l13 20 -13 20 -13 -20z" opacity="0.8" />
      </g>

      <g>
        <line x1="592" y1="360" x2="592" y2="420" stroke="#f4f0e6" strokeOpacity="0.5" />
        <path d="M592 362 L632 374 L592 386Z" fill={a} />
      </g>

      <g fill="#0a0a0e" opacity="0.7">
        <circle cx="760" cy="200" r="8" />
        <circle cx="120" cy="270" r="5" />
        <circle cx="380" cy="470" r="6" />
      </g>
    </>
  );
}

function Ufo({ id, a, b }: SceneProps) {
  return (
    <>
      <rect width="800" height="600" fill={`url(#${id}-sky)`} />
      <circle cx="120" cy="110" r="160" fill={`url(#${id}-glow)`} opacity="0.3" />

      <g fill="#f4f0e6" opacity="0.45">
        <circle cx="90" cy="90" r="1.4" />
        <circle cx="210" cy="60" r="1" />
        <circle cx="340" cy="120" r="1.6" />
        <circle cx="500" cy="70" r="1" />
        <circle cx="650" cy="110" r="1.3" />
        <circle cx="740" cy="50" r="1" />
        <circle cx="700" cy="190" r="1.1" />
      </g>

      <path d="M0 500 Q180 462 380 492 T800 470 V600 H0Z" fill="#09090d" />
      <path d="M0 520 Q200 492 400 516 T800 500" fill="none" stroke={a} strokeOpacity="0.16" />

      <path d="M400 246 L268 600 L544 600Z" fill={`url(#${id}-beam)`} opacity="0.6" />
      <ellipse cx="400" cy="560" rx="150" ry="30" fill={b} opacity="0.2" />

      <ellipse cx="400" cy="238" rx="158" ry="42" fill="#12121a" stroke={a} strokeOpacity="0.7" />
      <ellipse cx="400" cy="200" rx="62" ry="50" fill={b} opacity="0.22" stroke={b} strokeOpacity="0.6" />
      <ellipse cx="400" cy="240" rx="112" ry="24" fill={a} opacity="0.12" />

      <g fill={a}>
        <circle cx="300" cy="252" r="6" />
        <circle cx="356" cy="262" r="6" />
        <circle cx="444" cy="262" r="6" />
        <circle cx="500" cy="252" r="6" />
      </g>
      <ellipse cx="400" cy="238" rx="196" ry="58" fill="none" stroke={b} strokeOpacity="0.18" strokeDasharray="4 12" />

      <g fill="#050507">
        <path d="M160 500 l18 -48 l18 48z" />
        <path d="M600 494 l16 -42 l16 42z" />
        <path d="M660 500 l12 -32 l12 32z" />
      </g>
      <g stroke="#f4f0e6" strokeOpacity="0.25" strokeWidth="1">
        <path d="M420 516 h44 M432 528 h20" />
      </g>
    </>
  );
}

function Tower({ id, a, b }: SceneProps) {
  return (
    <>
      <rect width="800" height="600" fill={`url(#${id}-sky)`} />
      <path d="M0 400 L800 356 V600 H0Z" fill="#0f0f14" />
      <g stroke="#f4f0e6" strokeOpacity="0.05">
        <path d="M0 470 L800 430" />
        <path d="M0 540 L800 500" />
        <path d="M180 400 L120 600" />
        <path d="M400 380 L400 600" />
        <path d="M620 366 L700 600" />
      </g>

      <path
        d="M110 600 C180 520 150 470 260 432 C350 400 430 402 500 352 C560 310 600 300 650 262"
        fill="none"
        stroke="#25252d"
        strokeWidth="62"
        strokeLinecap="round"
      />
      <path
        d="M110 600 C180 520 150 470 260 432 C350 400 430 402 500 352 C560 310 600 300 650 262"
        fill="none"
        stroke={a}
        strokeWidth="2"
        strokeOpacity="0.3"
        strokeDasharray="4 12"
      />

      <g>
        <path d="M586 250 h84 v96 h-84z" fill="#191920" stroke={a} strokeOpacity="0.35" />
        <path d="M578 250 l50 -34 l50 34z" fill="#22222b" stroke={a} strokeOpacity="0.35" />
        <rect x="618" y="292" width="20" height="54" fill="#07070a" />
        <rect x="604" y="268" width="12" height="12" fill={a} opacity="0.8" />
        <rect x="644" y="268" width="12" height="12" fill={a} opacity="0.8" />
        <line x1="628" y1="216" x2="628" y2="188" stroke="#f4f0e6" strokeOpacity="0.4" />
        <path d="M628 188 L658 198 L628 208Z" fill={b} />
      </g>

      <g>
        <circle cx="286" cy="404" r="82" fill="none" stroke={a} strokeOpacity="0.16" strokeDasharray="3 9" />
        <rect x="262" y="374" width="48" height="74" fill="#1b1b22" stroke={a} strokeOpacity="0.4" />
        <rect x="254" y="358" width="64" height="18" fill="#24242d" />
        <rect x="276" y="390" width="20" height="24" fill="#07070a" />
        <path d="M286 358 l16 -20 l16 20z" fill={a} opacity="0.7" />
      </g>

      <g>
        <circle cx="500" cy="398" r="66" fill="none" stroke={b} strokeOpacity="0.18" strokeDasharray="3 9" />
        <rect x="480" y="374" width="40" height="62" fill="#1b1b22" stroke={b} strokeOpacity="0.4" />
        <rect x="474" y="360" width="52" height="16" fill="#24242d" />
        <rect x="492" y="388" width="16" height="20" fill="#07070a" />
        <path d="M500 360 l13 -16 l13 16z" fill={b} opacity="0.7" />
      </g>

      <g fill={b}>
        <circle cx="206" cy="478" r="7" />
        <circle cx="342" cy="412" r="6" />
        <circle cx="430" cy="384" r="8" />
        <circle cx="540" cy="330" r="6" />
        <circle cx="588" cy="296" r="5" />
      </g>

      <g fill={a} opacity="0.85">
        <circle cx="170" cy="540" r="5" />
        <circle cx="190" cy="556" r="4" />
        <circle cx="146" cy="558" r="4" />
      </g>
    </>
  );
}

function Rocket({ id, a, b }: SceneProps) {
  return (
    <>
      <rect width="800" height="600" fill={`url(#${id}-sky)`} />
      <g fill="#141419" stroke="#f4f0e6" strokeOpacity="0.06">
        <rect x="40" y="120" width="130" height="300" />
        <rect x="640" y="150" width="120" height="270" />
        <rect x="240" y="60" width="90" height="120" />
      </g>
      <g stroke="#f4f0e6" strokeOpacity="0.08">
        <path d="M40 190 h130 M40 260 h130 M40 330 h130" />
        <path d="M640 220 h120 M640 290 h120 M640 360 h120" />
      </g>

      <g stroke={a} strokeLinecap="round">
        <line x1="0" y1="180" x2="800" y2="180" strokeWidth="10" opacity="0.12" />
        <line x1="0" y1="180" x2="800" y2="180" strokeWidth="2" opacity="0.7" />
        <line x1="0" y1="450" x2="800" y2="450" strokeWidth="10" opacity="0.12" />
        <line x1="0" y1="450" x2="800" y2="450" strokeWidth="2" opacity="0.7" />
      </g>

      <g>
        <ellipse cx="392" cy="310" rx="54" ry="35" fill="#f4f0e6" opacity="0.92" />
        <circle cx="348" cy="274" r="18" fill="#f4f0e6" opacity="0.92" />
        <circle cx="398" cy="270" r="18" fill="#f4f0e6" opacity="0.92" />
        <circle cx="348" cy="274" r="8" fill={a} opacity="0.4" />
        <circle cx="398" cy="270" r="8" fill={a} opacity="0.4" />
        <circle cx="420" cy="300" r="4" fill="#08080b" />
        <path d="M334 316 Q300 330 286 356" stroke="#f4f0e6" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7" />
      </g>

      <g>
        <rect x="300" y="286" width="30" height="48" rx="9" fill={a} />
        <rect x="306" y="296" width="18" height="8" rx="4" fill="#08080b" opacity="0.35" />
        <path d="M300 326 L262 350 L288 356 L292 338Z" fill={b} />
        <path d="M300 330 L276 344 L294 348Z" fill="#f4f0e6" opacity="0.8" />
      </g>

      <g fill={b}>
        <circle cx="120" cy="330" r="12" />
        <circle cx="178" cy="316" r="9" opacity="0.8" />
        <circle cx="228" cy="338" r="7" opacity="0.6" />
      </g>

      <g stroke="#f4f0e6" strokeOpacity="0.18" strokeLinecap="round">
        <line x1="90" y1="250" x2="160" y2="250" />
        <line x1="60" y1="280" x2="110" y2="280" />
        <line x1="600" y1="380" x2="680" y2="380" />
      </g>
    </>
  );
}

function Shmup({ id, a, b }: SceneProps) {
  return (
    <>
      <rect width="800" height="600" fill={`url(#${id}-sky)`} />
      <g fill="#f4f0e6" opacity="0.4">
        <circle cx="110" cy="80" r="1.4" />
        <circle cx="300" cy="50" r="1" />
        <circle cx="520" cy="100" r="1.5" />
        <circle cx="700" cy="60" r="1" />
        <circle cx="760" cy="220" r="1.2" />
      </g>
      <circle cx="90" cy="560" r="180" fill={b} opacity="0.06" />
      <circle cx="90" cy="560" r="150" fill="none" stroke={b} strokeOpacity="0.15" />

      <g fill={a} opacity="0.04">
        <rect x="0" y="120" width="800" height="40" />
        <rect x="0" y="330" width="800" height="24" />
      </g>

      <g stroke={b} strokeWidth="2" strokeLinecap="round" opacity="0.65">
        <line x1="372" y1="430" x2="372" y2="120" />
        <line x1="400" y1="430" x2="400" y2="80" />
        <line x1="428" y1="430" x2="428" y2="150" />
      </g>

      <g>
        <path d="M400 510 L446 434 L422 444 L400 416 L378 444 L354 434Z" fill={a} />
        <path d="M400 458 L416 486 L400 478 L384 486Z" fill="#08080b" opacity="0.5" />
        <path d="M378 500 L360 530 L392 518Z" fill={b} opacity="0.8" />
        <path d="M422 500 L440 530 L408 518Z" fill={b} opacity="0.8" />
      </g>

      <g>
        <circle cx="214" cy="200" r="30" fill={b} opacity="0.85" />
        <circle cx="204" cy="192" r="5" fill="#08080b" />
        <circle cx="226" cy="192" r="5" fill="#08080b" />
        <path d="M198 220 q16 12 32 0" stroke="#08080b" strokeWidth="3" fill="none" />
      </g>
      <g>
        <circle cx="540" cy="160" r="40" fill={a} opacity="0.8" />
        <circle cx="526" cy="150" r="6" fill="#08080b" />
        <circle cx="554" cy="150" r="6" fill="#08080b" />
        <path d="M518 184 q22 16 44 0" stroke="#08080b" strokeWidth="3" fill="none" />
      </g>
      <g>
        <circle cx="654" cy="302" r="22" fill={b} opacity="0.65" />
        <circle cx="648" cy="296" r="4" fill="#08080b" />
        <circle cx="662" cy="296" r="4" fill="#08080b" />
      </g>

      <g stroke={b} strokeWidth="2" strokeLinecap="round">
        <path d="M700 430 l0 -24 M688 418 l12 -12 l12 12 M700 406 v-16" opacity="0.8" />
      </g>
    </>
  );
}

function Girgir({ id, a, b }: SceneProps) {
  return (
    <>
      <rect width="800" height="600" fill={`url(#${id}-sky)`} />
      <circle cx="660" cy="120" r="120" fill={`url(#${id}-glow)`} opacity="0.4" />
      <g fill="#f4f0e6" opacity="0.06">
        <ellipse cx="180" cy="120" rx="90" ry="22" />
        <ellipse cx="440" cy="80" rx="64" ry="16" />
      </g>

      <rect x="0" y="490" width="800" height="110" fill="#0d1216" />
      <line x1="0" y1="490" x2="800" y2="490" stroke={a} strokeOpacity="0.5" strokeWidth="3" />

      <g>
        <rect x="90" y="360" width="190" height="26" fill="#19222a" stroke="#f4f0e6" strokeOpacity="0.08" />
        <line x1="90" y1="360" x2="280" y2="360" stroke={a} strokeOpacity="0.5" strokeWidth="3" />
        <rect x="380" y="300" width="210" height="26" fill="#19222a" stroke="#f4f0e6" strokeOpacity="0.08" />
        <line x1="380" y1="300" x2="590" y2="300" stroke={a} strokeOpacity="0.5" strokeWidth="3" />
        <rect x="620" y="400" width="140" height="26" fill="#19222a" stroke="#f4f0e6" strokeOpacity="0.08" />
        <line x1="620" y1="400" x2="760" y2="400" stroke={a} strokeOpacity="0.5" strokeWidth="3" />
      </g>

      <g fill={b} opacity="0.8">
        <path d="M300 490 l14 -26 l14 26z" />
        <path d="M330 490 l14 -26 l14 26z" />
        <path d="M360 490 l14 -26 l14 26z" />
      </g>

      <g>
        <rect x="214" y="430" width="30" height="46" rx="10" fill={a} />
        <circle cx="229" cy="418" r="15" fill={a} />
        <rect x="218" y="412" width="24" height="8" rx="4" fill="#08080b" opacity="0.4" />
      </g>

      <g transform="translate(500 180)">
        <circle cx="0" cy="0" r="26" fill="none" stroke={b} strokeWidth="9" />
        <rect x="22" y="-5" width="54" height="10" rx="5" fill={b} />
        <rect x="58" y="5" width="10" height="16" rx="3" fill={b} />
        <rect x="72" y="5" width="8" height="12" rx="3" fill={b} />
      </g>

      <g transform="translate(700 400)">
        <ellipse cx="0" cy="0" rx="30" ry="64" fill="none" stroke={a} strokeWidth="3" opacity="0.8" />
        <ellipse cx="0" cy="0" rx="18" ry="50" fill="none" stroke={b} strokeWidth="2" opacity="0.6" />
        <ellipse cx="0" cy="0" rx="42" ry="74" fill="none" stroke={a} strokeOpacity="0.18" />
      </g>

      <g fill={b}>
        <circle cx="340" cy="440" r="7" />
        <circle cx="380" cy="452" r="5" />
        <circle cx="430" cy="440" r="6" />
      </g>
    </>
  );
}

function Rpg({ id, a, b }: SceneProps) {
  return (
    <>
      <rect width="800" height="600" fill={`url(#${id}-sky)`} />
      <g stroke="#f4f0e6" strokeOpacity="0.05">
        {Array.from({ length: 10 }).map((_, index) => (
          <line key={`h-${index}`} x1="0" y1={80 + index * 46} x2="800" y2={80 + index * 46} />
        ))}
        {Array.from({ length: 14 }).map((_, index) => (
          <line key={`v-${index}`} x1={index * 62} y1="0" x2={index * 62} y2="600" />
        ))}
      </g>

      <circle cx="120" cy="190" r="120" fill={`url(#${id}-glow)`} opacity="0.5" />
      <circle cx="120" cy="190" r="9" fill={a} />
      <circle cx="690" cy="170" r="100" fill={`url(#${id}-glow)`} opacity="0.3" />

      <g fill="#16161c" stroke="#f4f0e6" strokeOpacity="0.08">
        <rect x="60" y="330" width="48" height="170" />
        <rect x="50" y="316" width="68" height="18" />
        <rect x="700" y="350" width="42" height="150" />
        <rect x="690" y="336" width="62" height="18" />
      </g>

      <g transform="rotate(-32 400 280)">
        <path d="M400 130 L416 300 L400 330 L384 300Z" fill="#f4f0e6" opacity="0.9" />
        <path d="M400 130 L400 330 L384 300Z" fill={b} opacity="0.35" />
        <rect x="358" y="330" width="84" height="12" rx="4" fill={a} />
        <rect x="392" y="342" width="16" height="52" rx="6" fill="#2a2016" />
        <circle cx="400" cy="400" r="10" fill={a} />
        <path d="M366 300 L344 316 L360 322Z" fill={a} opacity="0.7" />
      </g>

      <g>
        {Array.from({ length: 5 }).map((_, index) => (
          <g key={index}>
            <rect
              x={196 + index * 82}
              y={500}
              width="66"
              height="56"
              fill="#0a0a0e"
              stroke="#f4f0e6"
              strokeOpacity={index === 0 ? 0.3 : 0.12}
            />
            {index === 0 && (
              <g transform="translate(229 528) rotate(-30)">
                <rect x="-3" y="-22" width="6" height="30" fill={b} />
                <rect x="-10" y="8" width="20" height="4" fill={a} />
                <rect x="-2" y="12" width="4" height="10" fill="#2a2016" />
              </g>
            )}
          </g>
        ))}
      </g>

      <g fill="#f4f0e6" opacity="0.25">
        <circle cx="200" cy="120" r="1.5" />
        <circle cx="560" cy="100" r="1.2" />
        <circle cx="620" cy="250" r="1.6" />
        <circle cx="280" cy="260" r="1" />
      </g>
    </>
  );
}

function Clicker({ id, a, b }: SceneProps) {
  return (
    <>
      <rect width="800" height="600" fill={`url(#${id}-sky)`} />
      <circle cx="400" cy="270" r="230" fill={`url(#${id}-glow)`} opacity="0.35" />

      <rect x="0" y="440" width="800" height="160" fill="#0b0b10" />
      <line x1="0" y1="440" x2="800" y2="440" stroke="#f4f0e6" strokeOpacity="0.08" />

      <rect x="214" y="142" width="372" height="252" rx="10" fill="#07070b" stroke={a} strokeOpacity="0.45" />
      <rect x="228" y="156" width="344" height="224" rx="4" fill="#0c0c12" />
      <g>
        <rect x="244" y="176" width="52" height="6" rx="3" fill={a} opacity="0.8" />
        <rect x="244" y="196" width="120" height="5" rx="2.5" fill="#f4f0e6" opacity="0.22" />
        <rect x="258" y="214" width="92" height="5" rx="2.5" fill={b} opacity="0.55" />
        <rect x="258" y="232" width="146" height="5" rx="2.5" fill="#f4f0e6" opacity="0.16" />
        <rect x="258" y="250" width="70" height="5" rx="2.5" fill={a} opacity="0.5" />
        <rect x="244" y="268" width="104" height="5" rx="2.5" fill="#f4f0e6" opacity="0.2" />
        <rect x="258" y="286" width="132" height="5" rx="2.5" fill={b} opacity="0.45" />
        <rect x="258" y="304" width="88" height="5" rx="2.5" fill="#f4f0e6" opacity="0.14" />
        <rect x="244" y="322" width="64" height="5" rx="2.5" fill={a} opacity="0.6" />
        <rect x="244" y="340" width="156" height="5" rx="2.5" fill="#f4f0e6" opacity="0.12" />
      </g>

      <g transform="translate(470 300)">
        <path d="M0 0 L0 34 L9 26 L16 40 L24 36 L17 23 L28 22Z" fill={a} />
        <path d="M0 0 L0 34 L9 26 L16 40 L24 36 L17 23 L28 22Z" fill="none" stroke="#08080b" strokeOpacity="0.4" />
      </g>

      <g>
        <rect x="630" y="402" width="46" height="46" rx="6" fill="#15151b" stroke={b} strokeOpacity="0.4" />
        <path d="M676 414 q20 0 20 12 t-20 12" fill="none" stroke={b} strokeWidth="4" />
        <path d="M640 392 q6 -14 0 -22 M654 392 q6 -14 0 -22" stroke="#f4f0e6" strokeOpacity="0.2" strokeWidth="2" fill="none" />
      </g>

      <g>
        <rect x="214" y="412" width="372" height="8" rx="4" fill="#1b1b22" />
        <rect x="214" y="412" width="252" height="8" rx="4" fill={a} />
        <text x="214" y="400" fill="#f4f0e6" opacity="0.35" fontFamily="JetBrains Mono Variable, monospace" fontSize="10" letterSpacing="2">
          LEVEL 12 / 68%
        </text>
      </g>

      <g fill={b} opacity="0.6">
        <circle cx="150" cy="220" r="4" />
        <circle cx="110" cy="300" r="2.5" />
        <circle cx="680" cy="250" r="3" />
      </g>
    </>
  );
}

function Memory({ id, a, b }: SceneProps) {
  return (
    <>
      <rect width="800" height="600" fill={`url(#${id}-sky)`} />
      <circle cx="400" cy="300" r="250" fill={`url(#${id}-glow)`} opacity="0.45" />

      <g transform="rotate(-16 330 300)">
        <rect x="220" y="160" width="190" height="270" rx="12" fill="#17121a" stroke={a} strokeOpacity="0.5" />
        <rect x="236" y="176" width="158" height="238" rx="8" fill="none" stroke={a} strokeOpacity="0.25" strokeDasharray="4 8" />
      </g>
      <g transform="rotate(14 500 300)">
        <rect x="410" y="150" width="190" height="270" rx="12" fill="#17121a" stroke={b} strokeOpacity="0.5" />
        <rect x="426" y="166" width="158" height="238" rx="8" fill="none" stroke={b} strokeOpacity="0.25" strokeDasharray="4 8" />
      </g>

      <g transform="rotate(-3 400 300)">
        <rect x="300" y="130" width="204" height="292" rx="14" fill="#f4f0e6" />
        <rect x="316" y="146" width="172" height="260" rx="8" fill="none" stroke="#08080b" strokeOpacity="0.18" />
        <path
          d="M402 218 C372 188 340 208 340 240 C340 276 384 292 402 326 C420 292 464 276 464 240 C464 208 432 188 402 218Z"
          fill="#141018"
        />
        <text x="330" y="190" fill="#141018" fontFamily="JetBrains Mono Variable, monospace" fontSize="12" fontWeight="700">
          A
        </text>
        <text x="466" y="394" fill="#141018" fontFamily="JetBrains Mono Variable, monospace" fontSize="12" fontWeight="700">
          A
        </text>
      </g>

      <g fill={b}>
        <path d="M600 190 l5 14 14 5 -14 5 -5 14 -5 -14 -14 -5 14 -5z" />
        <path d="M180 380 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4z" opacity="0.7" />
        <path d="M640 420 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z" opacity="0.6" />
      </g>

      <text x="400" y="500" textAnchor="middle" fill="#f4f0e6" opacity="0.3" fontFamily="JetBrains Mono Variable, monospace" fontSize="11" letterSpacing="4">
        12 MOVES / 4 PAIRS
      </text>
    </>
  );
}

function Pong({ id, a, b }: SceneProps) {
  return (
    <>
      <rect width="800" height="600" fill={`url(#${id}-sky)`} />
      <g fill="#f4f0e6" opacity="0.08">
        {Array.from({ length: 7 }).map((_, row) =>
          Array.from({ length: 10 }).map((__, col) => (
            <circle key={`${row}-${col}`} cx={80 + col * 72} cy={90 + row * 72} r="1.4" />
          ))
        )}
      </g>

      <line x1="400" y1="70" x2="400" y2="530" stroke="#f4f0e6" strokeOpacity="0.16" strokeWidth="3" strokeDasharray="10 14" />

      <g>
        <rect x="108" y="220" width="18" height="130" rx="9" fill={a} />
        <rect x="674" y="250" width="18" height="130" rx="9" fill={b} />
      </g>

      <g>
        <circle cx="418" cy="300" r="12" fill="#f4f0e6" />
        <circle cx="444" cy="300" r="7" fill="#f4f0e6" opacity="0.3" />
        <circle cx="462" cy="300" r="4" fill="#f4f0e6" opacity="0.15" />
      </g>

      <text x="250" y="210" textAnchor="middle" fill="none" stroke="#f4f0e6" strokeOpacity="0.2" strokeWidth="1.5" fontFamily="Space Grotesk Variable, sans-serif" fontSize="128" fontWeight="600">
        3
      </text>
      <text x="550" y="210" textAnchor="middle" fill="none" stroke="#f4f0e6" strokeOpacity="0.2" strokeWidth="1.5" fontFamily="Space Grotesk Variable, sans-serif" fontSize="128" fontWeight="600">
        5
      </text>

      <circle cx="400" cy="300" r="90" fill={`url(#${id}-glow)`} opacity="0.2" />
    </>
  );
}

function Cube({ id, a, b }: SceneProps) {
  const cube = (x: number, y: number, size: number, color: string, opacity: number, key: string) => {
    const s = size;
    const h = s * 0.5;
    return (
      <g key={key} opacity={opacity}>
        <path d={`M${x} ${y} l${s} -${h} l${s} ${h} l-${s} ${h}Z`} fill={color} fillOpacity="0.18" stroke={color} />
        <path d={`M${x} ${y} l${s} ${h} v${s} l-${s} -${h}Z`} fill={color} fillOpacity="0.08" stroke={color} strokeOpacity="0.6" />
        <path d={`M${x + s * 2} ${y} l-${s} ${h} v${s} l${s} -${h}Z`} fill={color} fillOpacity="0.04" stroke={color} strokeOpacity="0.4" />
      </g>
    );
  };

  return (
    <>
      <rect width="800" height="600" fill={`url(#${id}-sky)`} />
      <rect width="800" height="600" fill={`url(#${id}-grid)`} opacity="0.5" />

      <line x1="90" y1="90" x2="400" y2="300" stroke={a} strokeWidth="1.5" strokeDasharray="5 8" opacity="0.8" />
      <g transform="translate(400 300)">
        <circle r="70" fill="none" stroke={a} strokeOpacity="0.25" />
        <circle r="46" fill="none" stroke={a} strokeOpacity="0.4" strokeDasharray="4 8" />
        <circle r="10" fill={a} />
      </g>

      {cube(150, 330, 58, a, 0.9, "c1")}
      {cube(430, 240, 46, b, 0.8, "c2")}
      {cube(560, 390, 38, a, 0.55, "c3")}
      {cube(300, 120, 28, b, 0.45, "c4")}

      <g fill={b}>
        <circle cx="620" cy="160" r="5" />
        <circle cx="200" cy="200" r="4" />
        <circle cx="680" cy="480" r="3" />
      </g>

      <text x="70" y="540" fill="#f4f0e6" opacity="0.25" fontFamily="JetBrains Mono Variable, monospace" fontSize="11" letterSpacing="2">
        RAYCAST / FOLLOW / DESTROY
      </text>
    </>
  );
}

function Pacman({ id, a, b }: SceneProps) {
  return (
    <>
      <rect width="800" height="600" fill={`url(#${id}-sky)`} />
      <rect width="800" height="600" fill={`url(#${id}-grid)`} opacity="0.35" />

      <g stroke={b} strokeOpacity="0.45" strokeWidth="10" strokeLinecap="round" fill="none">
        <path d="M80 110 H300 V210 H500 V110 H720" />
        <path d="M80 500 H250 V390 H410" />
        <path d="M540 390 H720 V500" />
        <path d="M80 300 H180" />
        <path d="M620 300 H720" />
      </g>

      <g fill="#f4f0e6" opacity="0.55">
        {[
          [130, 180],
          [210, 250],
          [340, 160],
          [400, 250],
          [460, 160],
          [600, 180],
          [660, 250],
          [180, 440],
          [320, 440],
          [470, 450],
          [600, 440],
          [670, 440],
        ].map(([x, y], index) => (
          <circle key={index} cx={x} cy={y} r="4" />
        ))}
      </g>

      <g>
        <path d="M240 300 L292 270 A60 60 0 1 0 292 330 Z" fill={a} />
        <circle cx="258" cy="274" r="5" fill="#08080b" />
      </g>

      <g>
        <path d="M560 356 v-64 a48 48 0 0 1 96 0 v64 l-16 -12 -16 12 -16 -12 -16 12 -16 -12Z" fill={b} />
        <circle cx="590" cy="300" r="8" fill="#08080b" />
        <circle cx="626" cy="300" r="8" fill="#08080b" />
        <circle cx="592" cy="298" r="3" fill="#f4f0e6" />
        <circle cx="628" cy="298" r="3" fill="#f4f0e6" />
      </g>

      <text x="400" y="545" textAnchor="middle" fill="#f4f0e6" opacity="0.3" fontFamily="JetBrains Mono Variable, monospace" fontSize="11" letterSpacing="5">
        READY!
      </text>
    </>
  );
}

function renderScene(art: string, id: string, a: string, b: string): ReactNode {
  const props = { id, a, b };
  switch (art) {
    case "valley":
      return <Valley {...props} />;
    case "apartment":
      return <Apartment {...props} />;
    case "cipher":
      return <Cipher {...props} />;
    case "platformer":
      return <Platformer {...props} />;
    case "ufo":
      return <Ufo {...props} />;
    case "tower":
      return <Tower {...props} />;
    case "rocket":
      return <Rocket {...props} />;
    case "shmup":
      return <Shmup {...props} />;
    case "girgir":
      return <Girgir {...props} />;
    case "rpg":
      return <Rpg {...props} />;
    case "clicker":
      return <Clicker {...props} />;
    case "memory":
      return <Memory {...props} />;
    case "pong":
      return <Pong {...props} />;
    case "cube":
      return <Cube {...props} />;
    case "pacman":
      return <Pacman {...props} />;
    default:
      return <Cipher {...props} />;
  }
}

type ProjectArtProps = {
  project: Pick<Project, "slug" | "title" | "art" | "accent" | "accent2">;
  className?: string;
};

export function ProjectArt({ project, className }: ProjectArtProps) {
  const { slug: id, accent: a, accent2: b } = project;

  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`${project.title} — обложка проекта`}
      style={{ width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0.85" y2="1">
          <stop offset="0" stopColor="#0b0b10" />
          <stop offset="0.55" stopColor={a} stopOpacity="0.13" />
          <stop offset="1" stopColor="#07070a" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={a} stopOpacity="0.55" />
          <stop offset="0.55" stopColor={a} stopOpacity="0.12" />
          <stop offset="1" stopColor={a} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-acc`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
        <linearGradient id={`${id}-beam`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={b} stopOpacity="0.5" />
          <stop offset="1" stopColor={b} stopOpacity="0" />
        </linearGradient>
        <pattern id={`${id}-grid`} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#f4f0e6" strokeOpacity="0.055" />
        </pattern>
        <radialGradient id={`${id}-vig`} cx="0.5" cy="0.45" r="0.78">
          <stop offset="0.5" stopColor="#08080b" stopOpacity="0" />
          <stop offset="1" stopColor="#08080b" stopOpacity="0.72" />
        </radialGradient>
      </defs>

      <rect width="800" height="600" fill={`url(#${id}-sky)`} />
      {renderScene(project.art, id, a, b)}
      <rect width="800" height="600" fill={`url(#${id}-vig)`} />
    </svg>
  );
}
