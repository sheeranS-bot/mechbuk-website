export type FooterLink = string | { label: string; href: string };

export function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h5>{heading}</h5>
      <ul>
        {links.map((link, i) => {
          const label = typeof link === "string" ? link : link.label;
          const href = typeof link === "string" ? "#" : link.href;
          return (
            <li key={i}>
              <a href={href}>{label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
