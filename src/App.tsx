import { Layout } from './components/layout/Layout.tsx';
import { Card } from './design-system/card/Card.tsx';
import qrCodeImg1x from './assets/qr-code-1x.png';
import qrCodeImg2x from './assets/qr-code-2x.png';

function App() {
  const title = 'Improve your front-end skills by building projects';
  const description =
    'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level';

  return (
    <Layout>
      <Card>
        <Card.Image srcSet={`${qrCodeImg1x} 1x, ${qrCodeImg2x} 2x`} alt="QR Code" />
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card>
    </Layout>
  );
}

export default App;
