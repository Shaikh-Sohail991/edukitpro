export default function CircuitSVG({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="320" height="240" rx="8" fill="#0d2040" />
      <g stroke="#1a3a6e" strokeWidth="0.5" opacity="0.6">
        <line x1="0" y1="30" x2="320" y2="30" /><line x1="0" y1="60" x2="320" y2="60" />
        <line x1="0" y1="90" x2="320" y2="90" /><line x1="0" y1="120" x2="320" y2="120" />
        <line x1="0" y1="150" x2="320" y2="150" /><line x1="0" y1="180" x2="320" y2="180" />
        <line x1="0" y1="210" x2="320" y2="210" />
        <line x1="40" y1="0" x2="40" y2="240" /><line x1="80" y1="0" x2="80" y2="240" />
        <line x1="120" y1="0" x2="120" y2="240" /><line x1="160" y1="0" x2="160" y2="240" />
        <line x1="200" y1="0" x2="200" y2="240" /><line x1="240" y1="0" x2="240" y2="240" />
        <line x1="280" y1="0" x2="280" y2="240" />
      </g>
      <g stroke="#1356e8" strokeWidth="2" fill="none">
        <path d="M40 120 H120 V80 H200 V120 H280" />
        <path d="M80 180 V120" /><path d="M160 60 V120" /><path d="M240 180 V120" />
        <path d="M40 60 H80 V30 H240 V60 H280" />
      </g>
      <g stroke="#00d4ff" strokeWidth="1.5" fill="none" opacity="0.7">
        <path d="M40 180 H120 V210 H200 V180 H280" />
        <path d="M120 150 V210" /><path d="M200 150 V210" />
      </g>
      <g fill="#1a3570" stroke="#1356e8" strokeWidth="1">
        <rect x="140" y="90" width="40" height="60" rx="4" />
        <rect x="220" y="100" width="36" height="40" rx="4" />
        <rect x="50" y="100" width="36" height="40" rx="4" />
      </g>
      <g stroke="#1356e8" strokeWidth="1.5">
        <line x1="140" y1="100" x2="130" y2="100" /><line x1="140" y1="110" x2="130" y2="110" />
        <line x1="140" y1="120" x2="130" y2="120" /><line x1="140" y1="130" x2="130" y2="130" />
        <line x1="180" y1="100" x2="190" y2="100" /><line x1="180" y1="110" x2="190" y2="110" />
        <line x1="180" y1="120" x2="190" y2="120" /><line x1="180" y1="130" x2="190" y2="130" />
      </g>
      <g stroke="#4c84ff" strokeWidth="2">
        <line x1="80" y1="52" x2="80" y2="48" /><line x1="76" y1="52" x2="84" y2="52" />
        <line x1="76" y1="48" x2="84" y2="48" />
        <line x1="240" y1="52" x2="240" y2="48" /><line x1="236" y1="52" x2="244" y2="52" />
        <line x1="236" y1="48" x2="244" y2="48" />
      </g>
      <g fill="none" stroke="#ffb800" strokeWidth="1.5">
        <rect x="152" y="56" width="16" height="8" rx="2" />
        <line x1="160" y1="56" x2="160" y2="50" /><line x1="160" y1="64" x2="160" y2="70" />
        <rect x="232" y="116" width="16" height="8" rx="2" />
        <line x1="240" y1="116" x2="240" y2="110" /><line x1="240" y1="124" x2="240" y2="130" />
      </g>
      <circle cx="80" cy="180" r="6" fill="#00d4ff" opacity="0.9" />
      <circle cx="80" cy="180" r="3" fill="white" opacity="0.8" />
      <circle cx="240" cy="180" r="6" fill="#4c84ff" opacity="0.9" />
      <circle cx="240" cy="180" r="3" fill="white" opacity="0.8" />
      <circle cx="80" cy="180" r="12" fill="#00d4ff" opacity="0.15" />
      <circle cx="240" cy="180" r="12" fill="#4c84ff" opacity="0.15" />
      <circle cx="16" cy="16" r="5" fill="none" stroke="#1a3570" strokeWidth="1.5" />
      <circle cx="304" cy="16" r="5" fill="none" stroke="#1a3570" strokeWidth="1.5" />
      <circle cx="16" cy="224" r="5" fill="none" stroke="#1a3570" strokeWidth="1.5" />
      <circle cx="304" cy="224" r="5" fill="none" stroke="#1a3570" strokeWidth="1.5" />
      <text x="153" y="125" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">MCU</text>
      <text x="225" y="125" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">REG</text>
      <text x="55" y="125" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">DRV</text>
    </svg>
  );
}
