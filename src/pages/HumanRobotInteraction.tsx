import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function HumanRobotInteraction() {
  return (
    <div className="bg-background text-cream min-h-screen px-5 md:px-14 py-10 max-w-4xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center gap-2 font-mono text-cream/50 hover:text-neon text-xs tracking-widest uppercase transition-colors duration-200 mb-12"
      >
        <ArrowLeft size={14} />
        Back
      </Link>

      <p className="font-condiment text-neon leading-none mb-2" style={{ fontSize: 'clamp(1.6rem, 3vw, 3rem)' }}>
        Research
      </p>
      <h1
        className="font-grotesk text-cream uppercase leading-none tracking-tight mb-10"
        style={{ fontSize: 'clamp(2.2rem, 5.5vw, 6rem)' }}
      >
        HUMAN-ROBOT<br />INTERACTION
      </h1>

      <div className="space-y-6 font-mono text-cream/55 text-xs md:text-[0.8rem] leading-relaxed tracking-widest uppercase">
        <p>
          Rehabilitation robots offer precise, high-repetition therapy that scales
          beyond what a single therapist can deliver. Our research investigates how
          to make these systems truly adaptive — responding not just to surface
          kinematics, but to the patient's neural and physiological state in real
          time.
        </p>
        <p>
          By fusing EEG-derived motor-intention signals with EMG-based effort
          estimation, robotic exoskeletons and end-effectors can provide assistance
          proportional to the patient's residual voluntary drive. This
          assist-as-needed paradigm is believed to maximise neuroplastic benefit
          while preventing learned non-use.
        </p>
        <p>
          Ongoing work addresses transparency control, compliant actuation, and
          safety-aware human-state estimation — translating laboratory prototypes
          towards devices that can operate reliably in a busy clinical ward.
        </p>
      </div>
    </div>
  );
}
