import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function VRRehabilitation() {
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
        VR BASED<br />REHABILITATION<br />SYSTEM
      </h1>

      <div className="space-y-6 font-mono text-cream/55 text-xs md:text-[0.8rem] leading-relaxed tracking-widest uppercase">
        <p>
          Virtual reality–based rehabilitation leverages immersive environments to
          promote motor recovery in stroke survivors. By coupling VR scenarios with
          real-time biofeedback—including EEG and EMG signals—patients re-engage
          sensorimotor pathways that have been disrupted by ischemic or hemorrhagic
          events.
        </p>
        <p>
          Our system integrates a body-ownership illusion paradigm within a
          custom VR environment, allowing patients to observe avatar limb movements
          synchronised with attempted motion. This approach exploits neural
          plasticity to drive cortical reorganisation and accelerate functional
          recovery.
        </p>
        <p>
          Key contributions include a patented multi-modal feedback architecture
          (US patent issued, KR pending), clinical trial data from chronic stroke
          participants, and a translational pipeline moving from laboratory
          prototype to hospital deployment.
        </p>
      </div>
    </div>
  );
}
