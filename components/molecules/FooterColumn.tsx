export function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: string[];
}) {
  return (
    <div>
      <h5>{heading}</h5>
      <ul>
        {links.map((label, i) => (
          <li key={i}>
            <a href="#">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
