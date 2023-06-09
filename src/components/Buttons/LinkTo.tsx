interface LinkTo {
  to: string;
  title: string;
}

export function LinkTo(props: LinkTo) {
  return <a href={props.to} className="text-white font-semibold border-b-2 border-[var(--cyan-gradient-from)] antialiased" target="_blank">{props.title}</a>
}