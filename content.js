// Single source of truth for site content. Every design reads from window.SITE.
// Edit text here once and it updates in whichever design you deploy.
window.SITE = {
  name: 'Jebadiah Parillo',
  firstName: 'Jebadiah',
  lastName: 'Parillo',
  title: 'Controls Automation Engineer',
  location: 'Central New York',
  email: 'jebadiahparillo@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jebadiah-parillo',
  github: 'https://github.com/JebadiahParillo',
  resumeUrl: 'resume.pdf',
  tagline: 'PLC logic, embedded backends, and operator software for industrial machines.',
  summary:
    'Controls automation engineer at Wenger / JRC. I program Siemens PLCs in TIA Portal, build Qt C++/QML control apps and Python edge backends, and take systems from the schematic to field handover.',
  // Keywords recruiters search for. Shown near the top of every design.
  focus: ['Siemens TIA Portal PLCs', 'Qt C++ / QML control apps', 'Python on embedded Linux', 'UL 508A panel design'],
  skills: [
    { id: 'plc', label: 'PLC & automation', items: ['Siemens TIA Portal', 'SCL', 'Ladder Logic', 'CLICK PLC', 'KEB F6', 'SEW MOVI-B/C', 'Industrial Fieldbus', '24V Industrial I/O'] },
    { id: 'sw', label: 'Software', items: ['C++', 'Qt', 'QML', 'Python', '.NET', 'WPF', 'Java', 'SQL', 'React'] },
    { id: 'hw', label: 'Hardware & embedded', items: ['AC Induction Motor Control', 'Reversing Contactors', 'Microcontrollers', 'Industrial Sensors', 'Raspberry Pi'] },
    { id: 'design', label: 'Electrical design', items: ['AutoCAD Electrical', 'UL 508A', 'NFPA 70', 'SolidWorks', 'ESTA', 'ADA Compliance'] },
    { id: 'ops', label: 'Systems & deployment', items: ['Linux (Ubuntu/WSL)', 'Bash', 'PowerShell', 'Git', 'Docker', 'AWS EC2', 'Inno Setup'] },
  ],
  experience: [
    {
      company: 'Wenger / JRC', role: 'Controls Automation Engineer', start: 'May 2024', end: 'Present', current: true,
      points: [
        ['PLC automation', 'Programmed Siemens PLC projects in TIA Portal for industrial cabinets, engineering SCL and ladder-based load learning and sensing algorithms.'],
        ['Software & edge', 'Developed features for Qt C++/QML control apps, engineered Python backends for Ubuntu/Raspberry Pi, and maintained .NET WPF applications.'],
        ['Workflow automation', 'Created Bash and PowerShell scripts to automate HMI configurations and enforce kiosk mode on control system workstations.'],
        ['Commissioning', 'Led shop floor hardware/software integration and provided advanced escalation support for field engineers.'],
        ['Documentation', 'Integrated cross-functional processes and authored technical manuals to streamline engineer onboarding.'],
      ],
    },
    {
      company: 'Wenger / JRC', role: 'Controls Engineer', start: 'May 2023', end: 'May 2024',
      points: [
        ['Project lifecycle', 'Managed full-lifecycle control system projects from concept through final field handover.'],
        ['Drives & PLCs', 'Configured and troubleshot KEB F6, SEW MOVI-B/C, and Siemens/CLICK PLCs with industrial fieldbus.'],
        ['CAD design', 'Drafted electrical schematics in AutoCAD Electrical, standardized libraries, and ensured UL 508A and NFPA 70 compliance.'],
        ['Field debugging', 'Diagnosed safety systems, limit switches, and load cells; performed on-site deployment of PLC systems.'],
        ['Training', 'Conducted end-user training on complex systems and collaborated on R&D for next-gen products.'],
      ],
    },
    {
      company: 'IBM', role: 'Hardware Technical Support Intern', start: 'Jan 2023', end: 'May 2023',
      points: [
        ['Diagnostics', 'Developed Python scripts to analyze call metrics and enhanced the zGuard logging utility to automate mainframe diagnostic reporting.'],
        ['Production support', 'Managed remote server software deployments via Linux CLI/Git and performed live component upgrades on mainframes to prevent assembly line downtime.'],
      ],
    },
    {
      company: 'Astronomic Studios', role: 'Full Stack Software Engineering Intern', start: 'Nov 2021', end: 'May 2022',
      points: [
        ['Full stack', 'Architected a React and Bootstrap client portal backed by a RESTful MVC API and MySQL database.'],
        ['Cloud & DevOps', 'Standardized deployment environments using Docker and hosted application services on AWS EC2.'],
      ],
    },
  ],
  education: {
    school: 'University at Albany',
    degree: 'B.S. Electrical & Computer Engineering',
    detail: 'Concentration in Electronics · Minor in Mathematics',
  },
  // Each project's status comes live from its GitHub repo (see index.html).
  // `repo` is owner/name. Until that repo exists (or while it's private), the card
  // shows `status` instead. Create a public repo with that name and the card goes live.
  projects: [
    {
      name: 'Personal website', repo: 'JebadiahParillo/JebadiahParillo.github.io', status: 'Idea',
      tags: ['HTML', 'Tailwind', 'GitHub Pages'],
      blurb: 'This site. Plain HTML and vanilla JS, with project statuses pulled live from GitHub.',
    },
    {
      name: 'Bluetooth foot pedal', repo: 'JebadiahParillo/ble-foot-pedal', status: 'In development',
      tags: ['nRF', 'BLE HID', 'Windows'],
      blurb: 'Wireless foot pedal on a Nordic nRF board that pairs with Windows, with a desktop app to remap each button. Documented for others to build.',
    },
    {
      name: 'Multi-numpad mapper', repo: 'JebadiahParillo/multi-numpad-mapper', status: 'In development',
      tags: ['USB HID', 'Raw Input', 'Windows'],
      blurb: 'Turns several USB numpads into independent macro pads, each with its own key mappings.',
    },
    {
      name: 'Wireless HTR foot pedal', repo: 'JebadiahParillo/wireless-htr-pedal', status: 'Idea',
      tags: ['Functional safety', 'Wireless', 'Hold-to-run'],
      blurb: 'A safety-rated, wireless hold-to-run foot pedal for machine and stage motion control.',
    },
    {
      name: 'Hoist collision vision', repo: 'JebadiahParillo/hoist-collision-vision', status: 'Idea',
      tags: ['OpenCV', 'Encoders', 'Stage automation'],
      blurb: 'Camera-based object detection for theatrical hoists. Combines vision with encoder data to send a stop signal before a load hits a set piece or a person.',
    },
    {
      name: 'Universal PLC HMI', repo: 'JebadiahParillo/universal-plc-hmi', status: 'Idea',
      tags: ['HMI', 'Modbus', 'EtherNet/IP', 'S7'],
      blurb: 'An HMI that runs on any monitor and talks to PLCs over the common industrial protocols, with no vendor-locked panel hardware.',
    },
    {
      name: 'Wiring schematic CAD', repo: 'JebadiahParillo/wiring-schematic-cad', status: 'Idea',
      tags: ['CAD', 'Electrical design', 'UL 508A'],
      blurb: 'Software in the spirit of AutoCAD Electrical, designed from the ground up for wiring schematics.',
    },
    {
      name: 'Home automation planner', repo: 'JebadiahParillo/home-automation-planner', status: 'Idea',
      tags: ['Smart home', 'Planning', 'Purchasing'],
      blurb: 'Plan each room, and it works out what to buy, compares the products available, and offers temporary (renter-friendly) and permanent options.',
    },
    {
      name: 'CarPlay customizer', repo: 'JebadiahParillo/carplay-customizer', status: 'Idea',
      tags: ['iOS', 'Swift', 'CarPlay'],
      blurb: 'An iOS app for customizing your CarPlay setup.',
    },
    {
      name: 'PC power remote', repo: 'JebadiahParillo/pc-power-remote', status: 'Idea',
      tags: ['Mobile', 'Wake-on-LAN', 'Networking'],
      blurb: 'A phone app to turn a PC on and off over the network.',
    },
    {
      name: 'Kalshi near-close backtest', repo: 'JebadiahParillo/kalshi-backtest', status: 'Idea',
      tags: ['Python', 'Backtesting', 'Prediction markets'],
      blurb: 'Backtests a strategy of buying 95–99¢ Bitcoin contracts on Kalshi just before close for small, high-probability gains.',
    },
  ],
};
