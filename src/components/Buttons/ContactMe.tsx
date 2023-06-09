export interface ContactMe {
  to: string;
  title: string;
}

export function ContactMe(props: ContactMe) {
  return <a href={props.to} className="text-white font-semibold border-b-2 border-[var(--cyan-gradient-from)] antialiased">{props.title}</a>
}