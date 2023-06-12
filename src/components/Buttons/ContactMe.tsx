export interface ContactMe {
  to: string;
  title: string;
}

export function ContactMe(props: ContactMe) {
  return <a href={props.to} className="hover-fill text-white font-semibold pb-1 border-b-2 border-[var(--cyan-gradient-from)] antialiased" data-txthover={props.title}>{props.title}</a>
}