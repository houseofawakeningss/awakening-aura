const WA = "https://wa.me/919113216212?text=Hi%20House%20of%20Awakenings%2C%20I%27d%20love%20to%20begin%20my%20healing%20journey.";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full text-white transition-transform hover:scale-110"
      style={{
        background: "linear-gradient(135deg, #25D366, #128C7E)",
        boxShadow: "0 12px 30px -8px rgba(37,211,102,0.6), 0 0 0 0 rgba(37,211,102,0.5)",
      }}
    >
      <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: "#25D366" }} />
      <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true" className="relative">
        <path d="M19.11 17.21c-.27-.14-1.6-.79-1.84-.88-.25-.09-.43-.14-.62.14-.18.27-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.16-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.54-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.83.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 4C9.39 4 4 9.39 4 16.02c0 2.13.56 4.18 1.62 6L4 28l6.16-1.6a12 12 0 0 0 5.86 1.5h.01c6.62 0 12.01-5.39 12.01-12.02C28.04 9.39 22.65 4 16.02 4z"/>
      </svg>
    </a>
  );
}
