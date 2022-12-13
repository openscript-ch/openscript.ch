import SpriteData from '../../static/sprite.json';

type SpriteProps = {
  name: keyof typeof SpriteData;
  className?: string;
};

export function Sprite({ name, className }: SpriteProps) {
  const dimensions = SpriteData[name];

  return (
    <svg version="2.0" className={className ?? undefined} width={dimensions.width} height={dimensions.height}>
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
}
