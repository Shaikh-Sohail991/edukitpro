export type Product = {
  slug: string;
  title: string;
  badge: string;
  img: string;
  shortDesc: string;
  description: string;
  features: string[];
  specs: [string, string][];
  externalLink: string;
};

export const products: Product[] = [
  {
    slug: "digital-analog-multimeter",
    title: "Digital & Analog Multimeter",
    badge: "New",
    img: "/multimeter.webp",
    shortDesc: "Digital & analog multimeters for measuring voltage, current, and resistance accurately.",
    description:
      "Our Digital & Analog Multimeter trainers are engineered for educational labs that need both modern digital precision and the intuitive needle-based readout of analog meters. Ideal for teaching students to compare measurement methodologies and understand loading effects.",
    features: [
      "Dual-mode: digital LCD + analog needle display for comparative learning",
      "Measures AC/DC voltage (0–750V), current (0–10A), and resistance (0–20MΩ)",
      "Auto-ranging with manual override for advanced experiment control",
      "Built-in diode test, continuity buzzer, and transistor hFE measurement",
      "Overload protection on all ranges — safe for student use",
      "Banana-plug input terminals compatible with standard lab leads",
    ],
    specs: [
      ["DC Voltage Range", "0–1000V (6 ranges)"],
      ["AC Voltage Range", "0–750V (5 ranges)"],
      ["DC Current", "0–10A (6 ranges)"],
      ["Resistance", "0–20MΩ (7 ranges)"],
      ["Accuracy (DCV)", "±0.5% ±2 digits"],
      ["Display", "3½ digit LCD + 43-segment analog bar"],
      ["Frequency", "5Hz – 100kHz"],
      ["Certification", "CE, RoHS"],
    ],
    externalLink:
      "https://lovosis.in/products/test-measuring-instrument/digital-analog-multimeter",
  },
  {
    slug: "digital-storage-oscilloscope",
    title: "Digital Storage Oscilloscope",
    badge: "Popular",
    img: "/Oscilloscope.webp",
    shortDesc: "Digital storage oscilloscope for observing and analyzing electronic signals.",
    description:
      "The Digital Storage Oscilloscope (DSO) trainer is the centerpiece of any electronics lab. Capture, freeze, and analyze transient waveforms with precision. Students can observe real circuit behavior — from audio amplifiers to switching power supplies — and export data for lab reports.",
    features: [
      "Dual-channel with 100 MHz bandwidth for wide experiment coverage",
      "1 GSa/s real-time sampling — captures fast transients accurately",
      "7-inch colour TFT display with adjustable intensity and grid",
      "Waveform math: ADD, SUB, MUL, FFT spectrum analysis",
      "USB storage for waveform screenshots and CSV data export",
      "Auto-trigger, edge, pulse, video, and slope trigger modes",
    ],
    specs: [
      ["Bandwidth", "100 MHz (2 channels)"],
      ["Sample Rate", "1 GSa/s (real-time)"],
      ["Memory Depth", "40K points per channel"],
      ["Display", "7\" TFT Color LCD, 800×480"],
      ["Vertical Sensitivity", "2mV/div – 5V/div"],
      ["Time Base", "2ns/div – 50s/div"],
      ["Input Impedance", "1MΩ ± 2% || 18pF ± 3pF"],
      ["Certification", "CE, RoHS"],
    ],
    externalLink:
      "https://lovosis.in/products/test-measuring-instrument/digital-storage-oscilloscope",
  },
  {
    slug: "power-supply",
    title: "Power Supply",
    badge: "Featured",
    img: "/powersupply.webp",
    shortDesc: "DC power supply for providing adjustable voltage and current to circuits.",
    description:
      "A stable, regulated DC power supply is the backbone of every electronics lab. Our benchtop trainer models deliver clean, ripple-free output with precise voltage and current control — protecting student-built circuits and expensive components from accidental damage.",
    features: [
      "Triple output: 0–30V/5A (×2 independent channels) + fixed 5V/3A",
      "Series and parallel tracking modes for flexible supply configurations",
      "Large 4-digit LED displays for voltage and current on each channel",
      "Built-in OVP, OCP, and short-circuit protection on all outputs",
      "Low noise: <1mVrms ripple — suitable for sensitive analog circuits",
      "Solid aluminium enclosure with forced-air cooling for continuous operation",
    ],
    specs: [
      ["Output Voltage", "0–30V (×2), 5V fixed"],
      ["Output Current", "0–5A (×2), 3A fixed"],
      ["Load Regulation", "≤0.01% + 3mV"],
      ["Line Regulation", "≤0.01% + 3mV"],
      ["Ripple & Noise", "<1mVrms"],
      ["Display", "4-digit LED (V & A each channel)"],
      ["Input", "230V AC ±10%, 50/60Hz"],
      ["Certification", "CE, RoHS, ISO 9001"],
    ],
    externalLink:
      "https://lovosis.in/products/test-measuring-instrument/power-supply",
  },
  {
    slug: "function-generators",
    title: "Function Generators",
    badge: "Featured",
    img: "/function-generator.webp",
    shortDesc: "Function generators for producing various electrical waveforms in labs.",
    description:
      "Function generators are essential for signal-injection experiments in analog and digital labs. Our DDS-based trainers produce stable, low-distortion waveforms across a wide frequency range with precise digital control — giving students repeatable results every time.",
    features: [
      "DDS technology: sine, square, triangle, sawtooth, and pulse waveforms",
      "Frequency range: 0.1Hz to 10MHz with 7-digit frequency resolution",
      "Amplitude: 0–20Vpp into 50Ω; TTL sync output for digital experiments",
      "Sweep function (linear/log) with external FM input for modulation labs",
      "DC offset control: ±10V to shift waveforms for biasing experiments",
      "Large backlit LCD showing frequency, amplitude, and waveform type",
    ],
    specs: [
      ["Waveforms", "Sine, Square, Triangle, Ramp, Pulse"],
      ["Frequency Range", "0.1Hz – 10MHz"],
      ["Frequency Resolution", "0.1Hz (DDS)"],
      ["Amplitude", "0–20Vpp (into 50Ω)"],
      ["THD (Sine)", "<0.5% (at 1kHz)"],
      ["Square Rise Time", "<25ns"],
      ["Output Impedance", "50Ω ±10%"],
      ["Certification", "CE, RoHS"],
    ],
    externalLink:
      "https://lovosis.in/products/test-measuring-instrument/function-generators/function-generator",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}