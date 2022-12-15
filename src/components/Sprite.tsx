import SpriteData from '../../content/images/sprite.json';

type SpriteProps = {
  name: keyof typeof SpriteData;
  className?: string;
  viewBox?: string;
};

export function Sprite({ name, className, viewBox }: SpriteProps) {
  const dimensions = SpriteData[name];

  return (
    <svg version="2.0" className={className ?? undefined} width={dimensions.width} height={dimensions.height} viewBox={viewBox}>
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
}
