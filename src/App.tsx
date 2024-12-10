import AppRouter from './routes/router';
import background from './assets/Background/AnimatedShapeCircle.svg'

export default function App() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <AppRouter />
    </div>
  );
}
