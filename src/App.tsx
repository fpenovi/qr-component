import { Layout } from './components/layout/Layout.tsx';
import { Card } from './components/card/Card.tsx';
import qrCodeImg from './assets/qr-code.png';

function App() {
  const title = 'Improve your front-end skills by building projects';
  const description =
    'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level';

  return (
    <Layout>
      <Card>
        <Card.Image src={qrCodeImg} alt="QR Code" />
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card>
    </Layout>
  );
}

export default App;
