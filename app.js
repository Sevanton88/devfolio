/* ============================================================
   DevFolio — Retro Terminal Portfolio
   app.js
   ============================================================
   CUSTOMIZE: Edit the DATA object below with your real info!
   ============================================================ */

/* ============================================================
   ██████╗  █████╗ ████████╗ █████╗
   ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗
   ██║  ██║███████║   ██║   ███████║
   ██║  ██║██╔══██║   ██║   ██╔══██║
   ██████╔╝██║  ██║   ██║   ██║  ██║
   ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝
   ▶ EDIT THIS SECTION WITH YOUR INFO ◀
   ============================================================ */
const DATA = {
  name:     'Dušan Šević',
  title:    'Frontend & WordPress Developer',
  location: 'Kikinda, Serbia 🇷🇸',
  email:    'dusansevic@yahoo.com',
  github:   'https://github.com/Sevanton88',
  linkedin: 'https://rs.linkedin.com/in/du%C5%A1an-%C5%A1evi%C4%87/',
  website:  'https://dusans.dev',

  about: [
    'Frontend Developer & Founder of 88 Design,',
    'a digital agency based in Serbia.',
    'I specialize in WordPress development and JavaScript',
    'applications — delivering fast, secure, and user-friendly',
    'web solutions built on clean, maintainable code.',
    '',
    'With hands-on experience across agencies, e-commerce,',
    'and hosting support, I bring a full-picture understanding',
    'of how websites are built, deployed, and maintained',
    'in the real world.',
    '',
    'Always learning. Always building.',
  ],

  skills: {
    'Languages':  ['JavaScript (ES6+)', 'HTML5', 'CSS3'],
    'WordPress':  ['Elementor', 'ACF', 'WooCommerce', 'Custom Themes'],
    'Tools':      ['Git', 'GitHub', 'VS Code', 'Chrome DevTools'],
    'Concepts':   ['DOM Manipulation', 'REST APIs', 'Canvas API', 'DNS & Hosting'],
    'Learning':   ['React', 'Node.js', 'AI Integration', 'TypeScript'],
  },

  projects: [
    {
      name:  'JS Quiz',
      desc:  'Interactive JavaScript knowledge quiz — shuffle algorithm, real-time scoring, progress tracking.',
      tech:  ['HTML', 'CSS', 'Vanilla JS'],
      stars: '⭐⭐⭐',
      url:   'https://sevanton88.github.io/js-quiz/',
    },
    {
      name:  'TypeLab',
      desc:  'Minimalist typing speed test — live WPM, accuracy %, multiple modes, personal best via localStorage.',
      tech:  ['HTML', 'CSS', 'Vanilla JS'],
      stars: '⭐⭐⭐',
      url:   'https://sevanton88.github.io/typing-speed-test/',
    },
    {
      name:  'Spend',
      desc:  'iOS-inspired expense tracker — CRUD, Chart.js visualization, category filtering, localStorage.',
      tech:  ['HTML', 'CSS', 'Vanilla JS', 'Chart.js'],
      stars: '⭐⭐⭐',
      url:   'https://sevanton88.github.io/expense-tracker/',
    },
    {
      name:  'GitScan',
      desc:  'GitHub profile analyzer — GitHub REST API, async/await, language breakdown, repo stats.',
      tech:  ['HTML', 'CSS', 'Vanilla JS', 'GitHub API'],
      stars: '⭐⭐⭐⭐',
      url:   'https://sevanton88.github.io/gitscan/',
    },
    {
      name:  'PixelForge',
      desc:  'Browser pixel art editor — Canvas API, BFS flood fill, Bresenham line, undo/redo, PNG export.',
      tech:  ['HTML', 'CSS', 'Vanilla JS', 'Canvas API'],
      stars: '⭐⭐⭐⭐',
      url:   'https://sevanton88.github.io/pixelforge/',
    },
    {
      name:  'DevFolio',
      desc:  'This retro CRT terminal portfolio — custom terminal engine, typing animation, 12 commands.',
      tech:  ['HTML', 'CSS', 'Vanilla JS'],
      stars: '⭐⭐⭐⭐⭐',
      url:   'https://sevanton88.github.io/devfolio/',
    },
  ],

  experience: [
    {
      role:    'Founder & CEO',
      company: '88 Design',
      period:  'November 2024 — Present',
      desc:    'Founded and lead a full-service digital agency specializing in WordPress development, hosting, maintenance, and technical support. Responsible for client acquisition, project management, and delivering optimized websites tailored to each client\'s needs.',
    },
    {
      role:    'Web Developer',
      company: 'Webueno LLC',
      period:  'May 2023 — Present',
      desc:    'Building and maintaining custom WordPress websites using Elementor, ACF, and WooCommerce. Full website development, DNS configuration, performance optimization, security hardening, and website migrations.',
    },
    {
      role:    'Shop Admin',
      company: 'Nicole Perfumes',
      period:  'August 2025 — Present',
      desc:    'Managing a WooCommerce online store — product management, SEO optimization, content updates, performance monitoring, and daily e-commerce operations.',
    },
    {
      role:    'Hosting Support',
      company: 'Play Media',
      period:  'March 2025 — September 2025',
      desc:    'Technical support for website transfers, performance optimization, security improvements, email setup, and DNS configuration (A, MX, SPF, DKIM, CNAME).',
    },
  ],

  education: [
    {
      degree: 'Self-taught Frontend & WordPress Developer',
      school: 'Online Courses, Docs & Real-World Projects',
      period: '2022 — Present',
    },
  ],

  fun_facts: [
    '🇷🇸  From Kikinda, Banat, Serbia — proud of my roots',
    '🏀  Big basketball fan and Crvena Zvezda supporter',
    '🎯  Goal for 2025: Start my own agency — achieved it!',
    '🤖  Currently exploring AI integration into web development',
    '🚀  Building my own platform and learning new languages every day',
  ],
};

/* ============================================================
   TERMINAL ENGINE — No need to edit below this line
   ============================================================ */

/* ---------- State ---------- */
let cmdHistory  = [];
let historyIdx  = -1;
let typingQueue = [];
let isTyping    = false;

/* ---------- DOM ---------- */
const outputWrap = document.getElementById('output-wrap');
const cmdInput   = document.getElementById('cmd-input');
const inputRow   = document.getElementById('input-row');
const termBody   = document.getElementById('terminal-body');

/* ---------- Output helpers ---------- */
function appendLine(text = '', cls = '') {
  const div = document.createElement('div');
  div.className = 'out-line' + (cls ? ' ' + cls : '');

  if (cls === 'kv' && text.includes('|||')) {
    const [key, val] = text.split('|||');
    div.innerHTML = `<span class="kv-key">${key}</span><span class="kv-val">${val}</span>`;
  } else {
    div.textContent = text;
  }

  outputWrap.appendChild(div);
  scrollBottom();
  return div;
}

function blank() { appendLine('', 'blank'); }

function scrollBottom() {
  requestAnimationFrame(() => {
    termBody.scrollTop = termBody.scrollHeight;
  });
}

/* ---------- Typing effect ---------- */
function typeLines(lines, onDone) {
  typingQueue = [...lines];
  isTyping = true;
  inputRow.style.opacity = '0.3';
  processQueue(onDone);
}

function processQueue(onDone) {
  if (!typingQueue.length) {
    isTyping = false;
    inputRow.style.opacity = '1';
    cmdInput.focus();
    if (onDone) onDone();
    return;
  }

  const { text, cls, delay } = typingQueue.shift();

  if (cls === 'type') {
    // Character-by-character typing for single important lines
    const div = appendLine('', '');
    let i = 0;
    const speed = 28;
    const interval = setInterval(() => {
      div.textContent += text[i++];
      scrollBottom();
      if (i >= text.length) {
        clearInterval(interval);
        setTimeout(() => processQueue(onDone), delay || 60);
      }
    }, speed);
  } else {
    appendLine(text, cls);
    setTimeout(() => processQueue(onDone), delay || 18);
  }
}

function line(text, cls, delay) {
  return { text, cls, delay };
}

/* ---------- BOOT sequence ---------- */
function bootSequence() {
  inputRow.style.display = 'none';

  const bootLines = [
    line('',                                            '',      80),
    line('DEVFOLIO OS v2.4.1 — Loading...',             'dim',   60),
    line('Initializing terminal subsystems...',         'pale',  40),
    line('[  OK  ] Mounting filesystem',                'pale',  30),
    line('[  OK  ] Starting network interfaces',        'pale',  30),
    line('[  OK  ] Loading portfolio data',             'pale',  30),
    line('[  OK  ] Applying phosphor calibration',      'pale',  30),
    line('',                                            '',      50),
    line('████████████████████████████ 100%',           'dim',   80),
    line('',                                            '',      100),
    // ASCII art
    line(' ██████╗ ███████╗██╗   ██╗', 'ascii', 18),
    line(' ██╔══██╗██╔════╝██║   ██║', 'ascii', 18),
    line(' ██║  ██║█████╗  ██║   ██║', 'ascii', 18),
    line(' ██║  ██║██╔══╝  ╚██╗ ██╔╝', 'ascii', 18),
    line(' ██████╔╝███████╗ ╚████╔╝ ', 'ascii', 18),
    line(' ╚═════╝ ╚══════╝  ╚═══╝  ', 'ascii', 18),
    line(' ███████╗ ██████╗ ██╗     ██╗ ██████╗ ', 'ascii', 18),
    line(' ██╔════╝██╔═══██╗██║     ██║██╔═══██╗', 'ascii', 18),
    line(' █████╗  ██║   ██║██║     ██║██║   ██║', 'ascii', 18),
    line(' ██╔══╝  ██║   ██║██║     ██║██║   ██║', 'ascii', 18),
    line(' ██║     ╚██████╔╝███████╗██║╚██████╔╝', 'ascii', 18),
    line(' ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ ', 'ascii', 60),
    line('',                                            '',      30),
    line('  Terminal Portfolio — ' + DATA.title,        'amber', 80),
    line('',                                            '',      40),
    line('─'.repeat(52),                               'sep',   30),
    line('  Type  help  to see available commands.',    '',      30),
    line('  Type  about  to learn more about me.',      '',      30),
    line('─'.repeat(52),                               'sep',   60),
    line('',                                            '',      0),
  ];

  typeLines(bootLines, () => {
    inputRow.style.display = 'flex';
    cmdInput.focus();
  });
}

/* ---------- COMMANDS ---------- */
const COMMANDS = {

  help() {
    const lines = [
      line('',                                           '',       0),
      line('Available commands:',                        'header', 0),
      line('─'.repeat(52),                              'sep',    0),
      line('  about        — Who am I',                  '',       0),
      line('  skills       — Technical skills',          '',       0),
      line('  projects     — Portfolio projects',        '',       0),
      line('  experience   — Work experience',           '',       0),
      line('  education    — Education background',      '',       0),
      line('  contact      — How to reach me',           '',       0),
      line('  social       — Social links',              '',       0),
      line('  fun          — Fun facts about me',        '',       0),
      line('  whoami       — Quick summary',             '',       0),
      line('  ls           — List all projects',         '',       0),
      line('  clear        — Clear the terminal',        '',       0),
      line('  banner       — Show the welcome banner',   '',       0),
      line('  date         — Current date & time',       '',       0),
      line('  echo [text]  — Echo a message',            '',       0),
      line('  sudo         — Try it 😏',                '',       0),
      line('─'.repeat(52),                              'sep',    0),
      line('',                                           '',       0),
    ];
    typeLines(lines);
  },

  about() {
    const lines = [
      line('',                                '',       0),
      line('[ ABOUT ME ]',                    'header', 0),
      line('─'.repeat(52),                   'sep',    0),
      line(`  Name:     ${DATA.name}`,        '',       0),
      line(`  Role:     ${DATA.title}`,       'amber',  0),
      line(`  Location: ${DATA.location}`,   '',       0),
      line('',                                '',       0),
      ...DATA.about.map(l => line('  ' + l, 'white', 0)),
      line('',                                '',       0),
    ];
    typeLines(lines);
  },

  skills() {
    const lines = [line('', '', 0), line('[ SKILLS ]', 'header', 0), line('─'.repeat(52), 'sep', 0)];
    Object.entries(DATA.skills).forEach(([category, items]) => {
      lines.push(line('', '', 0));
      lines.push(line(`  ${category}:`, 'amber', 0));
      items.forEach(item => lines.push(line(`    ▸ ${item}`, 'white', 0)));
    });
    lines.push(line('', '', 0));
    typeLines(lines);
  },

  projects() {
    const lines = [
      line('', '', 0),
      line('[ PROJECTS ]', 'header', 0),
      line('─'.repeat(52), 'sep', 0),
    ];
    DATA.projects.forEach((p, i) => {
      lines.push(line('', '', 0));
      lines.push(line(`  [${String(i+1).padStart(2,'0')}] ${p.name}  ${p.stars}`, 'amber', 0));
      lines.push(line(`       ${p.desc}`, 'white', 0));
      lines.push(line(`       Tech: ${p.tech.join(' · ')}`, 'dim', 0));
      lines.push(line(`       URL:  ${p.url}`, 'cyan', 0));
    });
    lines.push(line('', '', 0));
    lines.push(line(`  ${DATA.projects.length} projects total. Type  ls  for quick list.`, 'dim', 0));
    lines.push(line('', '', 0));
    typeLines(lines);
  },

  ls() {
    const lines = [line('', '', 0)];
    lines.push(line('  drwxr-xr-x  projects/', 'dim', 0));
    DATA.projects.forEach(p => {
      lines.push(line(`  -rw-r--r--  ${p.name.toLowerCase().replace(/\s/g,'-')}/`, 'cyan', 0));
    });
    lines.push(line('', '', 0));
    typeLines(lines);
  },

  experience() {
    const lines = [line('', '', 0), line('[ EXPERIENCE ]', 'header', 0), line('─'.repeat(52), 'sep', 0)];
    DATA.experience.forEach(e => {
      lines.push(line('', '', 0));
      lines.push(line(`  ${e.role}`, 'amber', 0));
      lines.push(line(`  ${e.company}  |  ${e.period}`, 'dim', 0));
      lines.push(line(`  ${e.desc}`, 'white', 0));
    });
    lines.push(line('', '', 0));
    typeLines(lines);
  },

  education() {
    const lines = [line('', '', 0), line('[ EDUCATION ]', 'header', 0), line('─'.repeat(52), 'sep', 0)];
    DATA.education.forEach(e => {
      lines.push(line('', '', 0));
      lines.push(line(`  ${e.degree}`, 'amber', 0));
      lines.push(line(`  ${e.school}  |  ${e.period}`, 'white', 0));
    });
    lines.push(line('', '', 0));
    typeLines(lines);
  },

  contact() {
    const lines = [
      line('', '', 0),
      line('[ CONTACT ]', 'header', 0),
      line('─'.repeat(52), 'sep', 0),
      line('', '', 0),
      line(`  Email    →  ${DATA.email}`, 'cyan', 0),
      line(`  GitHub   →  ${DATA.github}`, 'cyan', 0),
      line(`  LinkedIn →  ${DATA.linkedin}`, 'cyan', 0),
      line('', '', 0),
      line('  I\'m currently open to new opportunities.', 'white', 0),
      line('  Feel free to reach out anytime! 👋', 'white', 0),
      line('', '', 0),
    ];
    typeLines(lines);
  },

  social() {
    const lines = [
      line('', '', 0),
      line('[ SOCIAL LINKS ]', 'header', 0),
      line('─'.repeat(52), 'sep', 0),
      line('', '', 0),
      line(`  GitHub    →  ${DATA.github}`, 'cyan', 0),
      line(`  LinkedIn  →  ${DATA.linkedin}`, 'cyan', 0),
      line(`  Website   →  ${DATA.website}`, 'cyan', 0),
      line('', '', 0),
    ];
    typeLines(lines);
  },

  whoami() {
    const lines = [
      line('', '', 0),
      { text: `${DATA.name}`, cls: 'type', delay: 80 },
      line(`${DATA.title}`, 'amber', 0),
      line(`${DATA.location}`, 'dim', 0),
      line('', '', 0),
      line(`Founder @ 88 Design  ·  Web Dev @ Webueno LLC`, 'white', 0),
      line(`${DATA.projects.length} public projects  ·  WordPress & JS  ·  Open to work`, 'white', 0),
      line(`${DATA.website}`, 'cyan', 0),
      line('', '', 0),
    ];
    typeLines(lines);
  },

  fun() {
    const lines = [
      line('', '', 0),
      line('[ FUN FACTS ]', 'header', 0),
      line('─'.repeat(52), 'sep', 0),
      line('', '', 0),
      ...DATA.fun_facts.map(f => line('  ' + f, 'white', 0)),
      line('', '', 0),
    ];
    typeLines(lines);
  },

  banner() {
    const lines = [
      line('', '', 0),
      line(' ██████╗ ███████╗██╗   ██╗', 'ascii', 18),
      line(' ██╔══██╗██╔════╝██║   ██║', 'ascii', 18),
      line(' ██║  ██║█████╗  ██║   ██║', 'ascii', 18),
      line(' ██║  ██║██╔══╝  ╚██╗ ██╔╝', 'ascii', 18),
      line(' ██████╔╝███████╗ ╚████╔╝ ', 'ascii', 18),
      line(' ╚═════╝ ╚══════╝  ╚═══╝  ', 'ascii', 18),
      line(' ███████╗ ██████╗ ██╗     ██╗ ██████╗ ', 'ascii', 18),
      line(' ██╔════╝██╔═══██╗██║     ██║██╔═══██╗', 'ascii', 18),
      line(' █████╗  ██║   ██║██║     ██║██║   ██║', 'ascii', 18),
      line(' ██╔══╝  ██║   ██║██║     ██║██║   ██║', 'ascii', 18),
      line(' ██║     ╚██████╔╝███████╗██║╚██████╔╝', 'ascii', 18),
      line(' ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ ', 'ascii', 60),
      line('', '', 0),
      line(`  ${DATA.title}`, 'amber', 0),
      line('', '', 0),
    ];
    typeLines(lines);
  },

  date() {
    const now = new Date();
    const lines = [
      line('', '', 0),
      line('  ' + now.toDateString() + '  —  ' + now.toLocaleTimeString(), 'cyan', 0),
      line('', '', 0),
    ];
    typeLines(lines);
  },

  clear() {
    outputWrap.innerHTML = '';
  },

  sudo() {
    const lines = [
      line('', '', 0),
      line('  [sudo] password for visitor:', 'amber', 400),
      line('  Sorry, try again.', 'error', 600),
      line('  Sorry, try again.', 'error', 600),
      line('  sudo: 3 incorrect password attempts', 'error', 400),
      line('  Nice try 😄', 'white', 300),
      line('', '', 0),
    ];
    typeLines(lines);
  },
};

/* ---------- Process command ---------- */
function processCommand(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return;

  // Save to history
  cmdHistory.unshift(trimmed);
  historyIdx = -1;

  // Echo the command
  appendLine(`visitor@devfolio:~$ ${trimmed}`, 'cmd-echo');

  const parts = trimmed.toLowerCase().split(/\s+/);
  const cmd   = parts[0];
  const args  = parts.slice(1);

  // Special: echo
  if (cmd === 'echo') {
    const msg = raw.trim().slice(5).trim();
    if (msg) {
      typeLines([line('  ' + msg, 'white', 0), line('', '', 0)]);
    } else {
      typeLines([line('', '', 0)]);
    }
    return;
  }

  if (COMMANDS[cmd]) {
    COMMANDS[cmd](args);
  } else {
    typeLines([
      line('', '', 0),
      line(`  bash: ${cmd}: command not found`, 'error', 0),
      line('  Type  help  for available commands.', 'dim', 0),
      line('', '', 0),
    ]);
  }
}

/* ---------- Input event handlers ---------- */
cmdInput.addEventListener('keydown', e => {
  if (isTyping && !(e.key === 'c' && e.ctrlKey)) return; // allow only Ctrl+C to interrupt

  if (e.key === 'Enter') {
    const val = cmdInput.value;
    cmdInput.value = '';
    processCommand(val);
    return;
  }

  // History navigation
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (historyIdx < cmdHistory.length - 1) {
      historyIdx++;
      cmdInput.value = cmdHistory[historyIdx];
    }
    return;
  }

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (historyIdx > 0) {
      historyIdx--;
      cmdInput.value = cmdHistory[historyIdx];
    } else {
      historyIdx = -1;
      cmdInput.value = '';
    }
    return;
  }

  // Tab autocomplete
  if (e.key === 'Tab') {
    e.preventDefault();
    const val    = cmdInput.value.toLowerCase();
    const cmds   = Object.keys(COMMANDS);
    const extras = ['echo'];
    const all    = [...cmds, ...extras];
    const matches = all.filter(c => c.startsWith(val));
    if (matches.length === 1) {
      cmdInput.value = matches[0];
    } else if (matches.length > 1) {
      appendLine(`visitor@devfolio:~$ ${cmdInput.value}`, 'cmd-echo');
      typeLines([
        line('  ' + matches.join('    '), 'dim', 0),
        line('', '', 0),
      ]);
    }
    return;
  }

  // Ctrl+L = clear
  if (e.key === 'l' && e.ctrlKey) {
    e.preventDefault();
    outputWrap.innerHTML = '';
    return;
  }

  // Ctrl+C = cancel typing
  if (e.key === 'c' && e.ctrlKey) {
    typingQueue = [];
    isTyping    = false;
    inputRow.style.opacity = '1';
    appendLine('^C', 'dim');
    return;
  }
});

/* Click anywhere on terminal to focus input */
document.getElementById('terminal').addEventListener('click', () => {
  cmdInput.focus();
});

/* ---------- Boot! ---------- */
window.addEventListener('load', () => {
  setTimeout(bootSequence, 300);
});
