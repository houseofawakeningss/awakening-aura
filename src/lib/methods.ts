export const METHODS = [
  {
    id: "yoga",
    name: "Yoga",
    image: "https://files.catbox.moe/w3c51q.jpg",
    short: "A movement of breath and body returning you home.",
    long: `Yoga at House of Awakenings is far more than a physical practice — it is a remembering. Each posture becomes a doorway, each breath an invitation inward. Drawing from classical Hatha, Vinyasa, and the deeper currents of yogic philosophy, our sessions are designed to dissolve the noise of modern life and reveal the steady, luminous intelligence that already lives within you. We move with reverence, not performance — building strength alongside surrender, flexibility alongside stillness. Whether you are stepping onto the mat for the first time or returning after years away, you are met where you are. Over time, the practice becomes a mirror — quietly reflecting old patterns, softening the body's armor, and reawakening a deep trust in your own rhythm. This is yoga as it was meant to be: a sacred reunion with the self.`,
  },
  {
    id: "sound-healing",
    name: "Sound Healing",
    image: "https://files.catbox.moe/yy1bih.jpg",
    short: "Vibrations that restore the body's natural symphony.",
    long: `Sound is the oldest medicine. In our sound healing journeys, the resonant tones of crystal singing bowls, Himalayan bowls, gongs, and chimes wash over the body like waves — gently dissolving tension stored in the nervous system and unwinding subtle holding patterns you may not even know you carry. Lying in stillness, you become an instrument being tuned. Brainwaves shift toward theta, the breath deepens, and the analytical mind softens its grip. What rises in this state is often profound — clarity, release, tears, peace, insight. Each frequency works on a different layer of being, gently realigning body, mind, and energy. You leave feeling lighter, quieter, and reconnected to the living vibration of life itself. No experience is needed — only your willingness to listen and receive.`,
  },
  {
    id: "chakra-healing",
    name: "Chakra Healing",
    image: "https://files.catbox.moe/wivdac.jpg",
    short: "Realign your inner energy centers and reclaim your wholeness.",
    long: `Within you flow seven luminous wheels of energy, each governing a dimension of how you live, love, create, and express. When these centers spin in harmony, life feels effortless. When they stagnate or contract, we feel stuck, unseen, anxious, or disconnected. Chakra healing at House of Awakenings is a sacred process of clearing, balancing, and re-energizing these subtle energy fields. Through guided meditation, breath, intention, sound, and gentle energy work, we move attention through each chakra — releasing what no longer serves and inviting fresh life-force to circulate. You may experience warmth, color, emotion, or simply a quiet inner spaciousness. This is not about fixing something broken; it is about remembering that you are already whole — and clearing the obstacles that have been keeping that wholeness hidden from view.`,
  },
  {
    id: "ice-bath",
    name: "Ice Bath",
    image: "https://files.catbox.moe/gmpw6c.jpg",
    short: "Meet the cold, meet yourself — fully present, fully alive.",
    long: `The cold is one of life's most honest teachers. In an ice bath, there is nowhere to hide — only breath, sensation, and the choice to stay. Guided immersion at House of Awakenings is held with deep care: we begin with grounding breathwork, prepare the nervous system, and enter the water with intention. What unfolds is a powerful alchemy. The body floods with endorphins, inflammation softens, circulation surges, and a remarkable mental clarity emerges. But beyond the physiology, something deeper happens — you discover a calm, capable self living beneath your reactions. You learn that discomfort is survivable. That resistance can be met with breath. That you are stronger than the stories your mind tells you. People emerge from cold immersion radiant, grounded, and quietly transformed — carrying that resilience back into daily life.`,
  },
  {
    id: "breathwork",
    name: "Breathwork",
    image: "https://files.catbox.moe/x1mtr3.jpg",
    short: "The breath is the bridge between body, mind, and soul.",
    long: `Your breath is the most intimate, available, and powerful tool you possess — and most of us have forgotten how to use it. Breathwork sessions at House of Awakenings reintroduce you to this living force. Through carefully guided rhythms — pranayama, conscious connected breathing, coherent and circular techniques — we activate the body's innate capacity to release stored emotion, regulate the nervous system, and access expanded states of awareness. What feels physical at first becomes deeply psychological, then unmistakably spiritual. Tension you've carried for decades may surface and dissolve. Memories soften. Energy moves where it has been frozen. Each session is held in a safe, intentional container so you can fully let go. You leave not only calmer, but reconnected — to your body, to your truth, and to the simple miracle of being alive, one breath at a time.`,
  },
  {
    id: "eft",
    name: "EFT (Emotional Freedom Techniques)",
    image: "https://files.catbox.moe/zq2hjt.webp",
    short: "Tap into freedom — release the emotional weight you no longer need.",
    long: `EFT, often called tapping, is a remarkable bridge between ancient meridian wisdom and modern psychology. By gently tapping on specific energy points along the body while voicing the emotion or experience we are working with, we send a calming signal to the brain's threat response — quickly diffusing the charge from anxiety, grief, fear, anger, limiting beliefs, or old wounds. At House of Awakenings, we hold EFT sessions with depth and care, weaving inquiry, presence, and somatic awareness into the process. Issues that have felt heavy for years can soften in a single sitting. Patterns that drove your reactions begin to lose their grip. What remains is a quieter inner landscape — and a renewed sense of agency over your emotional life. EFT is gentle, evidence-supported, and surprisingly powerful. It is freedom, one tap at a time.`,
  },
] as const;

export type MethodId = typeof METHODS[number]["id"];
