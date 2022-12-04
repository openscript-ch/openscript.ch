type SpriteProps = {
  name: string;
  className?: string;
};

export function Symbol({ name, className }: SpriteProps) {
  return (
    <svg version="2.0" className={className}>
      <use href={`/symbols.svg#${name}`} />
    </svg>
  );
}
