import Placeholder from 'react-bootstrap/Placeholder';

function AnimationExample() {
  return (
    <>
      <Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <p>End Project RoCaDaRo</p>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
    </>
  );
}

export default AnimationExample;