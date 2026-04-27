import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function EEGNeurofeedback() {
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
        EEG BASED<br />NEUROFEEDBACK<br />SYSTEM
      </h1>

      <div className="space-y-6 font-mono text-cream/55 text-xs md:text-[0.8rem] leading-relaxed tracking-widest uppercase">
        <p>
          Electroencephalography (EEG) captures cortical dynamics with millisecond
          resolution, making it the ideal modality for closed-loop neurofeedback
          training. Our work focuses on motor-imagery paradigms in which patients
          learn to modulate event-related desynchronisation (ERD) patterns over
          sensorimotor cortex.
        </p>
        <p>
          Signal processing pipelines combine common spatial pattern (CSP)
          filters with deep learning classifiers to achieve robust online decoding
          even in the presence of movement artefacts and inter-session variability.
          Feedback latency is kept below 80 ms to maintain effective reinforcement.
        </p>
        <p>
          Validated across five SCI-indexed publications, the system has
          demonstrated statistically significant improvement in affected-limb
          function scores compared to sham feedback, with effects persisting at
          three-month follow-up.
        </p>
      </div>
    </div>
  );
}
