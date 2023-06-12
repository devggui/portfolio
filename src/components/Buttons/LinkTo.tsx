interface LinkTo {
  to: string;
  title: string;
}

export function LinkTo(props: LinkTo) {
  return <a href={props.to} className="hover-fill text-white font-semibold pb-1 border-b-2 border-[var(--cyan-gradient-from)] antialiased" data-txthover={props.title} target="_blank">{props.title}</a>
}