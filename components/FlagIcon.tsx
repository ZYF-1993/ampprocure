type FlagIconProps = {
  code: string
  className?: string
}

function flagBackground(code: string) {
  const styles: Record<string, string> = {
    en: 'repeating-linear-gradient(to bottom, #b22234 0 12.5%, #ffffff 12.5% 25%)',
    cn: 'linear-gradient(to bottom, #de2910 0 100%)',
    ar: 'linear-gradient(to bottom, #006c35 0 100%)',
    de: 'linear-gradient(to bottom, #000000 0 33.33%, #dd0000 33.33% 66.66%, #ffce00 66.66% 100%)',
    el: 'repeating-linear-gradient(to bottom, #0d5eaf 0 11%, #ffffff 11% 22%)',
    es: 'linear-gradient(to bottom, #aa151b 0 25%, #f1bf00 25% 75%, #aa151b 75% 100%)',
    fa: 'linear-gradient(to bottom, #239f40 0 33.33%, #ffffff 33.33% 66.66%, #da0000 66.66% 100%)',
    fr: 'linear-gradient(to right, #0055a4 0 33.33%, #ffffff 33.33% 66.66%, #ef4135 66.66% 100%)',
    he: 'linear-gradient(to bottom, #0038b8 0 16%, #ffffff 16% 84%, #0038b8 84% 100%)',
    hi: 'linear-gradient(to bottom, #ff9933 0 33.33%, #ffffff 33.33% 66.66%, #138808 66.66% 100%)',
    hu: 'linear-gradient(to bottom, #ce2939 0 33.33%, #ffffff 33.33% 66.66%, #477050 66.66% 100%)',
    id: 'linear-gradient(to bottom, #ce1126 0 50%, #ffffff 50% 100%)',
    it: 'linear-gradient(to right, #009246 0 33.33%, #ffffff 33.33% 66.66%, #ce2b37 66.66% 100%)',
    ja: 'linear-gradient(to bottom, #ffffff 0 100%)',
    ko: 'linear-gradient(to bottom, #ffffff 0 100%)',
    nl: 'linear-gradient(to bottom, #ae1c28 0 33.33%, #ffffff 33.33% 66.66%, #21468b 66.66% 100%)',
    pl: 'linear-gradient(to bottom, #ffffff 0 50%, #dc143c 50% 100%)',
    pt: 'linear-gradient(to right, #046a38 0 40%, #da291c 40% 100%)',
    ru: 'linear-gradient(to bottom, #ffffff 0 33.33%, #0039a6 33.33% 66.66%, #d52b1e 66.66% 100%)',
    th: 'linear-gradient(to bottom, #a51931 0 20%, #ffffff 20% 35%, #2d2a4a 35% 65%, #ffffff 65% 80%, #a51931 80% 100%)',
    tr: 'linear-gradient(to bottom, #e30a17 0 100%)',
    vi: 'linear-gradient(to bottom, #da251d 0 100%)',
  }

  return styles[code] ?? 'linear-gradient(to bottom, #f3f4f6 0 100%)'
}

export default function FlagIcon({ code, className }: FlagIconProps) {
  return (
    <span
      className={`relative inline-block h-4 w-6 overflow-hidden rounded-sm border border-slate-300 ${className ?? ''}`}
      style={{ background: flagBackground(code) }}
      aria-hidden="true"
    >
      {code === 'en' ? <span className="absolute left-0 top-0 h-[56%] w-[44%] bg-[#3c3b6e]" /> : null}
      {code === 'cn' ? <span className="absolute left-1 top-1 h-1.5 w-1.5 rounded-full bg-[#ffde00]" /> : null}
      {code === 'ja' ? <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bc002d]" /> : null}
      {code === 'ko' ? (
        <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(#cd2e3a_0_50%,#0047a0_50%_100%)]" />
      ) : null}
      {code === 'tr' ? (
        <>
          <span className="absolute left-1.5 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white" />
          <span className="absolute left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#e30a17]" />
        </>
      ) : null}
      {code === 'vi' ? <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffde00]" /> : null}
      {code === 'he' ? <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#0038b8]" /> : null}
    </span>
  )
}
