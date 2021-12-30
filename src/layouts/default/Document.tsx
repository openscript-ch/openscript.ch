import { Helmet } from 'react-helmet';

type DocumentProps = {
  title: string;
};

export function Document({ title }: DocumentProps) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
