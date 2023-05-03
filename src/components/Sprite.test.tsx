import { render } from '@testing-library/react';
import { Sprite } from './Sprite';

describe('<Sprite />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Sprite name="arrow" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
